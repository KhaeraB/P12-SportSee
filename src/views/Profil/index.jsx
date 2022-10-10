import React from "react";
import { Container } from "react-bootstrap";
import HeaderDashbord from "../../compoments/HeaderDashboard";
import BarChartActivity from "../../compoments/BarChartActivity";
import { useParams } from "react-router";
import { Informations } from "../../compoments/Informations";

export default function Profil() {
  const { id } = useParams();
  return (
    <Container className="d-flex align-items-center content">
      <HeaderDashbord />

          {/* bars Activity     */}
          <BarChartActivity userId={id} />
         <Informations userId={id} />
    
    </Container>
  );
}
