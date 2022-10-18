import PropTypes from "prop-types";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
// import Recharts
import { PieChart, Pie, Cell } from "recharts";
import Loader from "../Loader";
import useApi from "../../services/hooks/useApi";
import "./style.scss";

//import colors from "../../utils/colors";
import { useParams } from "react-router-dom";
import colors from "../../utils/colors";

export function ScoreActivity({ userId }) {
  const { id } = useParams();
  const { data, isLoading, error } = useApi("userInfos", id);
  useEffect(() => {
    if (error || isLoading) {
      <Loader />;
    }
  }, [error, data, isLoading]);
  const score = data.userScore;

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
      <PieChart width={253} height={268}>
        <Pie
          data={pie}
          innerRadius={85}
          outerRadius={100}
          paddingAngle={0}
          dataKey="value"
          startAngle={190}
          endAngle={-360}
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
    </Container>
  );
}

ScoreActivity.propTypes = {
  userId: PropTypes.string.isRequired,
};
