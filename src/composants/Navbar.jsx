import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="lien">
        <li>
          <Link className="a " to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="a" to="/Apropos">
            A propos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
