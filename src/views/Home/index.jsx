import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './style.scss'

import {USER_MAIN_DATA} from "./../../__mocks__/data"

export default function Home() {
  return (
    <Container className="d-flex align-items-center content">


        <h1>Bienvenue sur <span className="brand">SportSee</span></h1> 
        <p className="intro">Projet 12 SportSee, réalisation d'un tableau de bord avec React et Recharts.js. Navigation rapide en bas à droite de votre écran. Cliquez sur l'id d'un utilisateur pour voir ses données :</p>
          <div className='link-users'>
                  {
                      USER_MAIN_DATA.map(user => (
                          <Link className='d-flex link-user' to={`/profil/${user.id}`} key={user.id} >
                              Voir le profil de {user.userInfos.firstName}
                          </Link>
                      ))
                  }
          </div>
    

</Container>
  );
}


