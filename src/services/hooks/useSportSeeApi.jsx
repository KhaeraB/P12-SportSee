// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

const TYPE_0F_ACTIVITY = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

function useSportSeeApi(service, id) {
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
        const getData = getDataByService(dataApi, service);
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
    console.log(service, "  ", id)
  switch (service) {
    case "userInfos":
      return `user/${id}`;

    case "key-data":
      return `user/${id}`;

    case "today-score":
      return `user/${id}`;

    case "activities":
      return `user/${id}/performance`;

    case "average-sessions":
      return `user/${id}/average-sessions`;

    case "daily-activity":
      return `user/${id}/activity`;

    default:
      return null;
  }
}

function getDataByService(data, service) {
    console.log(data, "  ", service)
  if (data) {
    switch (service) {
      case "userInfos":
        return infoUser(data);

      case "activities":
        return getActivities(data.data.data);

      case "average-sessions":
        return getAverageSessions(data.data.sessions);

      case "daily-activity":
        return getDailyActivity(data.data.sessions);

      default:
        console.error(
          `DataByService error: service "${service}" is not defined.`
        );
        return;
    }
  }
  console.error("DataByService : no data to process.");
  return;
}
export function infoUser(data) {
  return data === "user not found"
    ? "wrong user"
    : {
        firstName: data.data.userInfos.firstName,
        macroKPI: data.data.keyData,
        userScore: data.data.todayScore || data.data.score,
      };
}

export function getActivities() {
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
export function getDefaultAverageSessions() {
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
function getAverageSessions(data) {
  let averageSessions = getDefaultAverageSessions();

  for (let index in data) {
    averageSessions[index].sessionLength = data[index].sessionLength;
  }

  return averageSessions;
}

/**
 * Build an array with the dates of the 7 previous days.
 * @returns {array.Object} default data for DailyActivityChart
 */
export function getDefaultDailyActivity() {
  const dailyActivity = [];

  let date = new Date(Date.now());

  // eslint-disable-next-line no-unused-vars
  for (let _ of "1234567") {
    let dateFr = new Intl.DateTimeFormat("fr").format(date);

    dailyActivity.push({
      day: dateFr.slice(0, 5),
      kilogram: 0,
      calories: 0,
    });

    date.setDate(date.getDate() - 1);
  }

  dailyActivity.reverse();

  return dailyActivity;
}

/**
 * @param {array.Object} data
 * @returns {array.Object} data for DailyActivityChart
 */
function getDailyActivity(data) {
  if (data) {
    const dailyActivity = [];

    for (let item of data) {
      // eslint-disable-next-line no-unused-vars
      const [yyyy, mm, dd] = item.day.split("-");

      dailyActivity.push({
        day: `${dd}/${mm}`,
        kilogram: item.kilogram,
        calories: item.calories,
      });
    }

    return dailyActivity;
  }

  return getDefaultDailyActivity();
}

export default useSportSeeApi;
