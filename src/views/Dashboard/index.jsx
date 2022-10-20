//REACT
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//HOOK
import useApi from "../../services/hooks/useApi";

// COMPONENTS ELEMENTS
import HeaderDashbord from "../../compoments/HeaderDashboard";
import BarChartActivity from "../../compoments/BarChartActivity";
import  PieChartActivity  from "../../compoments/PieChart";
import  CardInfo  from "../../compoments/Card";
import { UserLineChart } from "../../compoments/LineChart";
import { ActivitiesRadarChart } from "../../compoments/Radar";

//LOADER
import Loader from "../../compoments/Loader";

//STYLE
import "./style.scss";



/**
 * @component
 * @description Render all component ReChart
 * @function Dashboard
 * @param {string} id
 * @returns {jsx}
 */
export default function Dashboard() {
  const { id } = useParams();
  const { isLoading, error } = useApi("activities", id);

  return (
    <Container className="content">
       <HeaderDashbord />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="error">
          <h3>Oups Une erreur est survenue...</h3>
          <Link className='d-flex link-user' to={`/`} >
                               Retour à L'ACCUEIL
          </Link>
        </div>
      ) : (
        
        <Container className="profil">
          {/* bars Activity     */}
          <div>
            <BarChartActivity userId={id} />
            <div className="bottomGraphic">
              <UserLineChart userId={id} />
              <ActivitiesRadarChart userId={id} />
              <PieChartActivity userId={id} />
            </div>
          </div>
          <CardInfo userId={id} />
        </Container>
      )}
    </Container>
  );
}
