import React from "react";
import Donnees from "../data.json";
import arrow from "../assets/arrow.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Caroussel({ children }) {
  const [slide, setSlide] = useState(0);
  const Suivant = () =>
    setSlide((slide) => (slide === children.lenght - 1 ? 0 : slide + 1));

  const Precedent = () =>
    setSlide((slide) => (slide === 0 ? children.lenght - 1 : slide - 1));

  return (
    <div className="box">
      <div
        style={{
          transform: `translateX(-${slide * 100}%)`,
          display: `flex`,
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
