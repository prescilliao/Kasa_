import React from "react";
import logoB from "../assets/logoB.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoB} alt="Logo" />
      <p className="txtFoot">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
