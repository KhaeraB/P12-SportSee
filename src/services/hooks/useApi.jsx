//REACT
// eslint-disable-next-line no-unused-vars 
import React, { useState, useEffect } from "react";
//AXIOS
import axios from "axios";

//MODELS
import DaysActivities  from "../../models/DaysActivities";
import  NutriScore  from "../../models/NutriScore";
import  infoUser  from "../../models/InfoUser";
import AverageSessions from "../../models/SessionsAverage"
import  Activities  from "../../models/Performances";

//URL
const BASE_URL = "http://localhost:3000";



function useApi(service, id) {
 
  const endpoint = getByEndpoints(service, id);
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);
  

  
  useEffect(() => {
    if (!endpoint) return;

    async function axiosData() {
      try {
        const url = `${BASE_URL}/${endpoint}`;
        //MOCK URL 
        // const dataMocked = '../../mock/data.json'
        const dataApi = await axios.get(url).then(({ data }) => data);
       // console.log(dataApi)
        const getData = DataByService(dataApi, service);
        setData(getData);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
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
        return new infoUser(data)._info;
        
      case "key-data":
        return new NutriScore(data)._macro;

      case "activities":
        return new Activities(data.data.data)._getAllActivities;

      case "sessions":
        return new AverageSessions(data.data.sessions)._sessions;

      case "daysActivity":
        return new DaysActivities(data.data.sessions)._dayActivity;

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