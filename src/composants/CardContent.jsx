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
      <section>
        <div className="caroussel">
          <img src={Datafiltered[0].cover} alt="" className="car" />
        </div>

        <div className="infocard">
          <div className="titre">
            <p>{Datafiltered[0].title}</p>
            <p>{Datafiltered[0].location}</p>
          </div>

          <div className="categorie">
            {Datafiltered[0].tags.map((tag, index) => {
              return <li key={index}>{tag} </li>;
            })}
          </div>

          <div className="proprio">
            <div className="infoproprio">
              <img
                src={Datafiltered[0].host.picture}
                alt="Photo propriétaire"
              />
              <p>{Datafiltered[0].host.name}</p>
            </div>

            <div className="etoile">
              <p>{Datafiltered[0].rating}/5 étoiles</p>
            </div>
          </div>
        </div>
        <div className="decrypt">
          <p>{Datafiltered[0].description}</p>
          <p>
            {Datafiltered[0].equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentCard;
