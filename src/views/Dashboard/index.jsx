import React from "react";
import { Container } from "react-bootstrap";
import HeaderDashbord from "../../compoments/HeaderDashboard";
import BarChartActivity from "../../compoments/BarChartActivity";
import { useParams } from "react-router";
import { Informations } from "../../compoments/Informations";
import { UserLineChart } from "../../compoments/LineChart";
import { ActivitiesRadarChart } from "../../compoments/Radar";
import "./style.scss";
import { ScoreActivity } from "../../compoments/PieChart";
import useApi from "../../services/hooks/useApi";
import Loader from "../../compoments/Loader";

export default function Dashboard() {
  const { id } = useParams();
  const { isLoading, error } = useApi("activities", id);

  return (
    <Container className="content">
      <HeaderDashbord />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="error">Une erreur est ......</div>
      ) : (
        <Container className="profil">
          {/* bars Activity     */}
          <div>
            <BarChartActivity userId={id} />
            <div className="bottomGraphic">
              <UserLineChart userId={id} />
              <ActivitiesRadarChart userId={id} />
              <ScoreActivity userId={id} />
            </div>
          </div>
          <Informations userId={id} />
        </Container>
      )}
    </Container>
  );
}
