import React from "react";
import { Container } from "react-bootstrap";
import HeaderDashbord from "../../compoments/HeaderDashboard";
import BarChartActivity from "../../compoments/BarChartActivity";
import { useParams } from "react-router";
import { Informations } from "../../compoments/Informations";
import { UserLineChart } from "../../compoments/LineChart";
import {ActivitiesRadarChart} from "../../compoments/Radar";
import "./style.scss"
import { ScoreActivity } from "../../compoments/PieChart";

export default function Dashboard() {
  const { id } = useParams();
  return (
    <Container className="content">
      <HeaderDashbord />
        <Container className="profil">
          {/* bars Activity     */}
            <div>
              <BarChartActivity userId={id} />
              <div className="bottomGraphic">
              <UserLineChart userId={id} />
              <ActivitiesRadarChart  userId={id}/>
              <ScoreActivity userId={id} />
              </div>
             
            </div>
        <Informations userId={id} />
        </Container>
    </Container>
  );
}
