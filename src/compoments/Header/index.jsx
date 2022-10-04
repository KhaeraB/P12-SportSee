import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./style.scss";

/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header() {
  return (
    <Navbar className="d-flex row">
      <Container className="el">
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo SportSee" />
        </Navbar.Brand>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/profil:id"
        >
          Profil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/setting"
        >
          Réglages
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/community"
        >
          Communauté
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;
