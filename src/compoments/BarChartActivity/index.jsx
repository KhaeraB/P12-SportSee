//REACT
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//RECHART
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

//HOOK
import useApi from "../../services/hooks/useApi";

//STYLE
import "./style.scss";
import colors from "../../utils/colors";

/**
 * @component
 * @description Render of the performances in the BarChart
 * @function  BarChartAvtivity
 * @param {string} id
 * @returns {jsx}
 */
export default function BarChartAvtivity() {
  const { id } = useParams();
  const { data } = useApi("daysActivity", id);

  const [oneDayActivity, setActivities] = useState([]);

  useEffect(() => {
    setActivities(data);
  }, [data]);

  return (
    <div className="graphic ">
      <div className="info-graphic">
        <div className="title-graphic ">Activité quotidienne</div>

        <div className="legends">
          <div className="circle">
            <div className="point black"></div>&nbsp; Poids (kg)
          </div>
          <div className="circle">
            <div className="point red"></div>&nbsp; Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={oneDayActivity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${colors.gray_light}`}
          />
          <XAxis
            dataKey="day"
            stroke={`${colors.gray_medium}`}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
            dy={10}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            stroke={`${colors.gray_medium}`}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            orientation="false"
            axisLine={false}
            tickLine={false}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill={`${colors.black_light}`}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill={`${colors.red}`}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
BarChartAvtivity.propTypes = {
  userId: PropTypes.string.isRequired,
};

/**
 * @component
 * @description Component for custom tooltip
 * @function CustomTooltip
 * @param {*}
 * @returns {jsx}
 */ function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="custom-tooltip ">
        <div background={`${colors.neutral800}`}>
          {`${payload[0].value} kg`}
        </div>
        <div background={`${colors.primary500}`}>
          {`${payload[1].value} kCal`}
        </div>
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
