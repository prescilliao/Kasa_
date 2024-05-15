import React from "react";
import Donnees from "../data.json";
import arrow from "../assets/arrow.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Caroussel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const Suivant = () =>
    setCurrent((curr) => (curr === pictures.length - 1 ? 0 : curr + 1));

  const Precedent = () =>
    setCurrent((curr) => (curr === 0 ? pictures.length - 1 : curr - 1));
  if (pictures.length < 2) {
    return (
      <div className="box">
        <img src={pictures[current]} alt="" className="car" />
      </div>
    );
  }
  return (
    <div className="box">
      <img src={pictures[current]} alt="" className="car" />
      <div className="number_carroussel">
        {current + 1}/{pictures.length}
      </div>
      <div>
        <img
          className="pass one"
          src={arrow}
          alt="arrow"
          onClick={() => {
            Suivant();
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
