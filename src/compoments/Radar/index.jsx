//REACT
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

//RECHART
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

//HOOK
import useApi from "../../services/hooks/useApi";

//STYLE
import colors from "../../utils/colors";
import "./style.scss";

/**
 * @component
 * @description Render of the performances in the Radar Chart
 * @function ActivitiesRadarChart
 * @param {string} id
 * @returns {jsx}
 */
export function ActivitiesRadarChart() {
  const { id } = useParams();
  const { data } = useApi("activities", id);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    setActivities(data);
  }, [data]);

  if (activities.length > 0) {
    return (
      <Container className="radar">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={activities}
            outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="activity" stroke={`${colors.white}`} />
            <Radar
              dataKey="value"
              stroke={`${colors.red}`}
              fill={`${colors.red}`}
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Container>
    );
  }
}

ActivitiesRadarChart.propTypes = {
  userId: PropTypes.string.isRequired,
};
