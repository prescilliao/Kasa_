import React from "react";
import Card from "../composants/Cards";
import Navbar from "../composants/Navbar";
import Header from "../composants/Header";
import Donnees from "../data.json";
import Montagne from "../assets/montagne.jpg";

const Accueil = () => {
  const Image = Montagne;
  const Texte = "Chez vous partout et ailleurs";

  return (
    <div>
      <Navbar />
      <Header Image={Image} Texte={Texte} />
      <div className="section">
        {Donnees.map((Data, index) => {
          return <Card key={index} Data={Data} />;
        })}
      </div>
    </div>
  );
};

export default Accueil;
