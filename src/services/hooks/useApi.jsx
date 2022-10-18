// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DaysActivities } from "../../models/DaysActivities";
import { NutriScore } from "../../models/NutriScore";
import { infoUser } from "../../models/InfoUser";
import {AverageSessions} from "../../models/SessionsAverage"
import { getAllActivities } from "../../models/Performances";
const BASE_URL = "http://localhost:3000";



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

    case "activities":
      return `user/${id}/performance`;

    case "sessions":
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
        return getAllActivities(data.data.data);

      case "sessions":
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

export default useApi