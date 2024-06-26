import React from "react";
import { useState } from "react";
import arrow from "../assets/arrow.svg";
// import { Route } from "react-router-dom";

const Accordeon = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const open = (e) => {
    setActive(!active);
  };
  return (
    <div className="container">
      <div className="accordeon__title">
        {title}
        <span onClick={open}>
          <img
            className="arrow"
            src={arrow}
            alt="Flèche cliquable"
            style={{
              transform: !active ? "rotate(0deg)" : "rotate(-180deg)",
              transition: "transform 0.5s ease",
            }}
          />
        </span>
      </div>
      <div className={!active ? "invisible" : "accordeon__content"}>
        {content}
      </div>
    </div>
  );
};

export default Accordeon;
