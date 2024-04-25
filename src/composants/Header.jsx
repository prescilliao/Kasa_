import React from "react";

const Header = ({ Texte, Image }) => {
  return (
    <div className="header">
      <img src={Image} alt="" className="head" />
      <p className="text">{Texte}</p>
    </div>
  );
};
export default Header;
