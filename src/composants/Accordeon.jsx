import React from "react";
import { useState } from "react";
import arrow from "../assets/arrow.svg";
import { Route } from "react-router-dom";

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
          <img
            className="arrow"
            src={arrow}
            alt="arrow"
            style={{
              transform: !open ? "rotate(0deg)" : "rotate(-180deg)",
              transition: "transform 0.5s ease",
            }}
          />
        </button>
      </div>{" "}
      <div>
        <p className={open ? "anim" : "animation"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          laudantium optio ipsum ipsam itaque labore harum repudiandae enim, ut
          nemo odit? Commodi nesciunt architecto aut doloribus dolor
          reprehenderit impedit autem?
        </p>
      </div>
    </div>
  );
};

export default Accordeon;
