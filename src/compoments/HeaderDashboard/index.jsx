import React from "react";
import Error from "../../views/Error";
import "./style.scss";
import useApi from "../../services/hooks/useApi";
import { useParams } from "react-router-dom";

export default function HeaderDashbord() {
  const { id } = useParams();
  const { data, error, isLoading } = useApi("userInfos", id);
  /* Retrieving data:*/
const firstName =  data.firstName
  if (error && !isLoading) {
    return <Error />;
  }
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
