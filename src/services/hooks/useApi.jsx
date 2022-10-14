// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DaysActivities } from "../../models/DaysActivities";
import { NutriScore } from "../../models/Score";
import { infoUser } from "../../models/InfoUser";
const BASE_URL = "http://localhost:3000";

const TYPE_0F_ACTIVITY = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

function useApi(service, id) {
 
  const endpoint = getByEndpoints(service, id);
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);
  useEffect(() => {
    if (!endpoint) return;

    setIsLoading(true);
    async function axiosData() {
      try {
        const url = `${BASE_URL}/${endpoint}`;
        const dataApi = await axios.get(url).then(({ data }) => data);
       // console.log(dataApi)
        const getData = DataByService(dataApi, service);
        setData(getData);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    axiosData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service, id, endpoint]);
  
  return { data, error, isLoading };
}

function getByEndpoints(service, id) {
    //console.log(service, "  ", id)
  switch (service) {
    case "userInfos":
      return `user/${id}`;

    case "key-data":
      return `user/${id}`;

    case "today-score":
      return `user/${id}`;

    case "activities":
      return `user/${id}/performance`;

    case "averageSessions":
      return `user/${id}/average-sessions`;

    case "daysActivity":
      return `user/${id}/activity`;

    default:
      return null;
  }
}

function DataByService(data, service) {
   // console.log(data, "  ", service)
  if (data) {
    switch (service) {
      case "userInfos":
        return infoUser(data);
        
      case "key-data":
        return NutriScore(data);

      case "activities":
        return Activities(data.data.data);

      case "averageSessions":
        return AverageSessions(data.data.sessions);

      case "daysActivity":
        return DaysActivities(data.data.sessions);

      default:
        console.error(
          `Error: service "${service}" is not defined.`
        );
        return;
    }
  }
  console.error("No data to process.");
  return;
}


export function Activities() {
  const activities = [];

  for (let key in TYPE_0F_ACTIVITY) {
    activities.push({
      activity: TYPE_0F_ACTIVITY[key],
      value: 0,
    });
  }

  return activities;
}

/**
 * @returns {array.Object} default data for AverageSessionsChart
 */
export function defaultAverageSessions() {
  const averageSessions = [
    {
      day: "L",
      sessionLength: 0,
    },
    {
      day: "M",
      sessionLength: 0,
    },
    {
      day: "M",
      sessionLength: 0,
    },
    {
      day: "J",
      sessionLength: 0,
    },
    {
      day: "V",
      sessionLength: 0,
    },
    {
      day: "S",
      sessionLength: 0,
    },
    {
      day: "D",
      sessionLength: 0,
    },
  ];        

  return averageSessions;
}

/**
 * @param {array.Object} data
 * @returns {array.Object} data for AverageSessionsChart
 */
function AverageSessions(data) {
  let averageSessions = defaultAverageSessions();

  for (let i in data) {
    averageSessions[i].sessionLength = data[i].sessionLength;
  }

  return averageSessions;
}

/**
 * Build of the 7 days.
 * @returns {array.Object} default data for DailyActivityChart
 */




export default useApi