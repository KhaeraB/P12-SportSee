import PropTypes from "prop-types";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart
} from "recharts";

import useApi from "../../services/hooks/useApi";

import colors  from "../../utils/colors";
import Loader from "../Loader";
import "./style.scss"; 

export function ActivitiesRadarChart({userId}) {
    const {id} = useParams()
    const { data, isLoading, error } = useApi("activities", id);

    let activities = data;
    useEffect(()=>{
      if (error || isLoading) {
        < Loader /> 
      }
    }, [error, data, isLoading])

     return(
          <Container className="radar">
          
              <RadarChart width={258} height={268} data={activities} outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}>
                <PolarGrid />
                <PolarAngleAxis dataKey="activity" stroke={`${colors.white}`}/>
                <Radar dataKey="value" stroke={`${colors.red}`} fill={`${colors.red}`} fillOpacity={0.7} />
              </RadarChart>
     
          </Container>
      )  
}

ActivitiesRadarChart.propTypes = {
  userId: PropTypes.string.isRequired,
};