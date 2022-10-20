//REACT
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import Recharts
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

//HOOK
import useApi from "../../services/hooks/useApi";

//STYLE
import "./style.scss";
import colors from "../../utils/colors";

/**
 * @component
 * @description Render of the score in PieChart
 * @function PieChartActivity
 * @param {string} id
 * @returns {jsx}
 */
export default function PieChartActivity() {
  const { id } = useParams();
  const { data } = useApi("userInfos", id);

  const [score, setActivities] = useState([]);
  useEffect(() => {
    setActivities(data.userScore);
  }, [data]);

  // create tab with score and difference between 100
  const pie = [
    { name: "score", value: score, fillColor: `${colors.red}` },
    { name: "negativeScore", value: 1 - score, fillColor: "transparent" },
  ];
  return (
    <Container className="pie">
      <div className="title">Score</div>
      <div className="bg-white"></div>
      <div className="counter">
        <h3 className="score-title">{score * 100} %</h3>
        <p className="score-text">
          de votre
          <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={253} height={268}>
        <Pie
          data={pie}
          innerRadius={85}
          outerRadius={100}
          paddingAngle={0}
          dataKey="value"
          startAngle={90}
          endAngle={360}
        >
          {pie.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              stroke={entry.fillColor}
              cornerRadius={50}
            />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    </Container>
  );
}

PieChartActivity.propTypes = {
  userId: PropTypes.string.isRequired,
};
