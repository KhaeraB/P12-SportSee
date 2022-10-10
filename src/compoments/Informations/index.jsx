import calorieIcon from  "../../assets/energy.svg";
import carbIcon from  "../../assets/carb.svg";
import fatIcon from "../../assets/fat.svg";
import proteinIcon from  "../../assets/protein.svg";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useApi from "../../services/hooks/useApi";
import "./style.scss"

export function Informations() {
    const { id } = useParams();
  const { data, error, isLoading } = useApi("key-data", id);
  let info = data.macroKPI;
  console.log(info)
  if (error || !isLoading) {
    console.log(error)
  }
  return (
      <Container className="info">
      <div className="type">
       <div className="cardInfo">
          <img src={calorieIcon} alt="icon calories" />
          <div className="score">
            <h4>{info.calorieCount}kCal</h4>
            <p>Calories</p>
          </div>
          </div>
        </div>
        <div className="type">
          <div className="cardInfo">
            <img src={proteinIcon} alt="icon protein" />
              <div className="score">
                <h4>{info.proteinCount}g</h4>
                <p>Protéines</p>
              </div>
            </div>
        </div>
        <div className="type">
          <div className="cardInfo">
            <img src={carbIcon} alt="icon protein" />
              <div className="score">
                <h4>{info.carbohydrateCount}g</h4>
                <p>Glucides</p>
              </div>
          </div>
        </div>
        <div className="type">
          <div className="cardInfo">
            <img src={fatIcon} alt="icon protein" />
            <div className="score">
              <h4>{info.lipidCount}g</h4>
              <p>Lipides</p>
            </div>
          </div>
        </div>

      </Container>
  );
}


