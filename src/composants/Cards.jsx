import React from "react";
import { Link } from "react-router-dom";
import Logement from "../pages/Logement";

const Card = ({ Data }) => {
  return (
    <div className="cards">
      <Link to={`/Logement/${Data.id}`}>
        <div className="image-container">
          <img className="cards img" src={Data.cover} alt="" />
          <div className="shadow-box"></div>
        </div>
        <p className="card">{Data.title}</p>
      </Link>
    </div>
  );
};

export default Card;
