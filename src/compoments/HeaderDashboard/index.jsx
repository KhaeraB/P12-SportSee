import React, { useEffect } from "react";
import "./style.scss";
import useApi from "../../services/hooks/useApi";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

export default function HeaderDashbord() {
  const { id } = useParams();
  const { data, error, isLoading } = useApi("userInfos", id);
  /* Retrieving data:*/
const firstName =  data.firstName
useEffect(()=>{
  if (error || isLoading) {
    <Loader/>;
  }
})
  
  return (
    <div>
      {
        <h1 key={firstName}>
          Bonjour <span className="userName">{isLoading && firstName}</span>
        </h1>
      }
      <p className="congratulation">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
