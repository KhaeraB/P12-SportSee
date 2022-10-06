import React from "react";
import Error from "../Error";
import { Container } from "react-bootstrap";
import "./style.scss";
import useSportSeeApi from "../../services/hooks/useSportSeeApi";
import { useParams } from "react-router-dom";

export default function Profil() {
 const { id } = useParams();
 console.log(id);
  const { data, error, isLoading } = useSportSeeApi("userInfos", id);
  
  const userData = JSON.stringify({data});
  console.log(userData);
 if(error){
    return (
        <Error/>
      );
 }
  return (
    <Container className="d-flex align-items-center content">
          <h1> Bonjour </h1>
       
    </Container>
  );
}
