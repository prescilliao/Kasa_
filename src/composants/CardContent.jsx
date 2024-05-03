import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const ContentCard = ({ Donnees }) => {
  const { id } = useParams();

  const Datafiltered = Donnees.filter((item) => ":" + item.id === id);

  console.log(Datafiltered);
  return (
    <div>
      <Navbar />
      <div className="caroussel">
        <img src={Datafiltered[0].cover} alt="" className="car" />
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
            <p className="star">{Datafiltered[0].rating}/5 étoiles</p>
          </div>
        </div>
      </section>
      <div className="decrypt">
        <p className="detail">{Datafiltered[0].description}</p>
        <p className="loot">
          {Datafiltered[0].equipments.map((equipment, index) => {
            return <li key={index}>{equipment}</li>;
          })}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
