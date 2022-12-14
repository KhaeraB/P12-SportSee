import PropTypes from "prop-types";
// REACT
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
//RECHART
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from "recharts";
//HOOK
import useApi from "../../services/hooks/useApi";
//STYLE
import "./style.scss";

/**
 * @component
 * @description Render of the average sessions for Line Chart
 * @function UserLineChart
 * @param {string} id
 * @returns {jsx}
 */
export function UserLineChart() {
  const { id } = useParams();
  const { data } = useApi("sessions", id);
  const [sessions, setActivities] = useState([]);

  useEffect(() => {
    setActivities(data);
  }, [data]);

  return (
    <Container className="lineChart">
      <div className="titleLineChart">
        Durée moyenne des
        <br />
        sessions
      </div>
      <ResponsiveContainer width="100%" height="100%" className="responsive">
        <LineChart
          height={268}
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
          data={sessions}
          // hover darkest opacity on right
          onMouseMove={(e) => {
            const focus = document.getElementsByClassName("responsive")[0];

            if (e.isTooltipActive) {
              const widthFocus = focus.clientWidth;

              const pourcentage = Math.round(
                (e.activeCoordinate.x / widthFocus) * 100
              );

              focus.style.background = `linear-gradient(to right, rgba(255,0,0,1) ${pourcentage}%, rgba(0,0,0,0.1) ${pourcentage}%, rgba(0,0,0,0.1) 100%)`;
            } else {
              focus.style.background = `rgba(255,0,0,1)`;
            }
          }}
        >
          <XAxis
            dataKey="day"
            stroke="none"
            tick={{ fill: "rgba(255, 255, 255, 0.5)" }}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0)",
              strokeWidth: 32,
            }}
          />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
            dot={0}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.5)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

UserLineChart.propTypes = {
  userId: PropTypes.string.isRequired,
};
/**
 * @component
 * @description Component for custom tooltip
 * @function CustomTooltip
 * @param {*}
 * @returns {jsx}
 */
function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return `${payload[0].value} min`;
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
