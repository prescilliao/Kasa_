import React from "react";
import { useState } from "react";
import arrow from "../assets/arrow.svg";

const Accordeon = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="bulle">
        <p>Fiabilité</p>
        <button
          className="button"
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        >
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Accordeon;
