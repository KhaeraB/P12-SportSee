import PropTypes from "prop-types";
import { useEffect } from "react";
// import Recharts
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Loader from "../Loader"
import {
  useApi,
} from "../../services/hooks/useApi";

import colors from "../../utils/colors";
import { useParams } from "react-router-dom";

export function DailyActivityChart({ userId }) {
    const {id} = useParams()
  const { data, isLoading, error } = useApi("userInfos", id);

  const score =  data.userScore

    console.log(score)

  useEffect(()=>{
    if (error || isLoading) {
      < Loader /> 
    }
  }, [error, data, isLoading])
   
        return (
            <div className="score-box rounded mb-4">

                <div className='scrore-title'>Score</div>

                <div className='scrore-count'>
    
                    <div className='score-percent'>{score} %</div>
                    <div className='score-text'>
                        de votre
                        <br/>
                        objectif
                    </div>
    
                </div>

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart width={300} height={300}>

                        <Pie
                            data={data}
                            innerRadius={85}
                            outerRadius={100}
                            paddingAngle={0}
                            dataKey="value"
                            startAngle={180}
                            endAngle={-360}
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colors.red}
                                        cornerRadius={50}
                                    />
                                ))
                            }
                        </Pie>
                    
                    </PieChart>

                </ResponsiveContainer>

            </div>
        )
    
}

DailyActivityChart.propTypes = {
  userId: PropTypes.string.isRequired,
};
