import React from "react";
import Montagne from "./asset/montagne.jpg";
import MontagneDeux from "./asset/montagnedeux.jpg";

const Header = ({ Texte, Image }) => {
  return (
    <div className="header">
      <img src={Image} alt="" className="head" />
      <p className="text">{Texte}</p>
    </div>
  );
};
export default Header;
