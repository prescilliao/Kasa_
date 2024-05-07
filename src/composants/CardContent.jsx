import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import { useState } from "react";
import Accordeon from "./Accordeon";
import star from "../assets/star.svg";
// import pinkstar from "../assets/pinkstar.svg";
import Etoile from "./Etoile";
import Carroussel from "./Caroussel";

const ContentCard = ({ Donnees }) => {
  const { id } = useParams();
  const Datafiltered = Donnees.filter((item) => ":" + item.id === id);
  const [slide, setSlide] = useState([Datafiltered[0].pictures]);
  const numberEtoile = Datafiltered[0].rating;
  function AfficheEtoile(numberEtoile) {
    let stars = [];
    for (let i = 0; i < numberEtoile; i++) {
      stars.push(<Etoile key={i} />);
    }
    return stars;
  }
  const Galaxie = AfficheEtoile(numberEtoile);
  return (
    <div>
      <Navbar />
      <div className="caroussel">
        <img className="pass one" src={arrow} alt="arrow" onClick={() => {}} />
        <img className="pass two" src={arrow} alt="arrow" />
        {Datafiltered[0].pictures.map((img, index) => {
          return <img src={img} key={index} alt="" className="car" />;
        })}
      </div>

      <section className="content">
        <div className="infocard">
          <div>
            <p className="titreOne">{Datafiltered[0].title}</p>
            <p className="titreTwo">{Datafiltered[0].location}</p>
          </div>

          <div className="categorie">
            {Datafiltered[0].tags.map((tag, index) => {
              return (
                <li className="categ" key={index}>
                  {tag}{" "}
                </li>
              );
            })}
          </div>
        </div>

        <div className="proprio">
          <div className="infoproprio">
            <img
              className="face"
              src={Datafiltered[0].host.picture}
              alt="Photo propriétaire"
            />
            <p className="name">{Datafiltered[0].host.name}</p>
          </div>

          <div className="etoile">
            <img src={star} alt="étoile" />
            <img src={star} alt="étoile" />
            <img src={star} alt="étoile" />
            <img src={star} alt="étoile" />
            <img src={star} alt="étoile" />
            <div className="pinkstar">{Galaxie}</div>
          </div>
        </div>
      </section>
      <div className="decrypt">
        <span className="complete">
          <Accordeon
            title="Description"
            content={Datafiltered[0].description}
          />
        </span>
        <span className="loot">
          <Accordeon
            title="Équipements"
            content={Datafiltered[0].equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          />
        </span>
      </div>
    </div>
  );
};

export default ContentCard;
