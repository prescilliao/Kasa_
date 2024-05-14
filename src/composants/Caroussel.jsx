import React from "react";
import Donnees from "../data.json";
import arrow from "../assets/arrow.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Caroussel({ children }) {
  const [current, setCurrent] = useState(0);
  const Suivant = () =>
    setCurrent((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  const Precedent = () =>
    setCurrent((curr) => (curr === 0 ? children.length - 1 : curr - 1));

  return (
    <div className="box">
      <div
        style={{
          transform: `translateX(-${current * 100}%)`,
          display: `flex`,
          transition: `transform 1s`,
        }}
      >
        {children}
      </div>
      <div>
        <img
          className="pass one"
          src={arrow}
          alt="arrow"
          onClick={() => {
            Suivant(console.log("ok"));
          }}
        />
        <img
          className="pass two"
          src={arrow}
          alt="arrow"
          onClick={() => {
            Precedent();
          }}
        />
      </div>
    </div>
  );
}

export default Caroussel;
