//REACT
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

//ICONS
import calorieIcon from "../../assets/energy.svg";
import carbIcon from "../../assets/carb.svg";
import fatIcon from "../../assets/fat.svg";
import proteinIcon from "../../assets/protein.svg";

//HOOK
import useApi from "../../services/hooks/useApi";

//STYLE
import "./style.scss";

/**
 * @component
 * @description Render of the nutriscore if user
 * @function CardInfo
 * @param {string} id
 * @returns {jsx}
 */
export default function CardInfo() {
  const { id } = useParams();
  const { data} = useApi("key-data", id);
  const [info, setActivities] = useState([]);

  useEffect(() => {
    setActivities(data);
  }, [data]);
  
  return (
    <Container className="info">
      <div className="type">
        <div className="cardInfo">
          <img src={calorieIcon} alt="icon calories" />
          <div className="score">
            <h4>{info?.macroKPI?.calorieCount}kCal</h4>
            <p>Calories</p>
          </div>
        </div>
      </div>
      <div className="type">
        <div className="cardInfo">
          <img src={proteinIcon} alt="icon protein" />
          <div className="score">
            <h4>{info?.macroKPI?.proteinCount}g</h4>
            <p>Protéines</p>
          </div>
        </div>
      </div>
      <div className="type">
        <div className="cardInfo">
          <img src={carbIcon} alt="icon protein" />
          <div className="score">
            <h4>{info?.macroKPI?.carbohydrateCount}g</h4>
            <p>Glucides</p>
          </div>
        </div>
      </div>
      <div className="type">
        <div className="cardInfo">
          <img src={fatIcon} alt="icon protein" />
          <div className="score">
            <h4>{info?.macroKPI?.lipidCount}g</h4>
            <p>Lipides</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
