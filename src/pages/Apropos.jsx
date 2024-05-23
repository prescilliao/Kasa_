import React from "react";
import Navbar from "../composants/Navbar";
import Header from "../composants/Header";
import MontagneDeux from "../assets/montagnedeux.jpg";
import Accordeon from "../composants/Accordeon";
import Footer from "../composants/Footer";

const Apropos = () => {
  return (
    <div>
      <Navbar />
      <Header Image={MontagneDeux} Texte={""} />
      <div className="padding">
        <Accordeon
          title={"Fiabilité"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. "
          }
        />
        <Accordeon
          title={"Respect"}
          content={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Accordeon
          title={"Service"}
          content={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Accordeon
          title={"Sécurité"}
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
};

export default Apropos;
