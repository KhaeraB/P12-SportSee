import React, { useEffect, useState } from "react";
import "./style.scss";
import useApi from "../../services/hooks/useApi";
import { useParams } from "react-router-dom";

/**
 * @component
 * @description Render of firstName of user
 * @function HeaderDashbord
 * @param {string} id
 * @returns {jsx}
 */
export default function HeaderDashbord() {
  const { id } = useParams();
  const { data} = useApi("userInfos", id);

  const [userInfo, setActivities] = useState([])

  useEffect(()=>{
    setActivities(data)
  }, [data])

  
  return (
    <div>
      {
        <h1 key={userInfo.firstName}>
          Bonjour <span className="userName">{userInfo.firstName}</span>
        </h1>
      }
      <p className="congratulation">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
