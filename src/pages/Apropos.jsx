import React from "react";
import Navbar from "../composants/Navbar";
import Header from "../composants/Header";
import MontagneDeux from "../assets/montagnedeux.jpg";
import Accordeon from "../composants/Accordeon";

const Apropos = () => {
  return (
    <div>
      <Navbar />
      <Header Image={MontagneDeux} Texte={""} />
      <Accordeon />
      <Accordeon />
      <Accordeon />
      <Accordeon />
    </div>
  );
};

export default Apropos;
