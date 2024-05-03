import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../composants/Navbar";
import Accueil from "./Acceuil";
import Footer from "../composants/Footer";

const Erreur = () => {
  return (
    <div>
      <Navbar />
      <p className="color error">404</p>
      <div className="color txterror">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className="linkError" to="/">
        Retouner a la page d'acceuil
      </Link>
    </div>
  );
};

export default Erreur;
