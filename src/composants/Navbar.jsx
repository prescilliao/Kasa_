import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="lien">
        <li>
          <NavLink className="a" to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className="a" to="/Apropos">
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
