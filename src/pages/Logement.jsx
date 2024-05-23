import React from "react";
import Navbar from "../composants/Navbar";
import { useParams, Navigate } from "react-router-dom";
import Accordeon from "../composants/Accordeon";
import star from "../assets/star.svg";
import Etoile from "../composants/Etoile";
import Carroussel from "../composants/Caroussel";
import Donnees from "../data.json";

const Logement = () => {
  const { id } = useParams();
  const Datafiltered = Donnees.filter((item) => item.id === id);
  const valid = Datafiltered.length > 0;

  const numberEtoile = valid ? Datafiltered[0].rating : 0;
  if (!valid) {
    return <Navigate to="/erreur" />;
  }
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
      <Carroussel pictures={Datafiltered[0].pictures} />

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
            <img className="icone" src={star} alt="étoile" />
            <img className="icone" src={star} alt="étoile" />
            <img className="icone" src={star} alt="étoile" />
            <img className="icone" src={star} alt="étoile" />
            <img className="icone" src={star} alt="étoile" />
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

export default Logement;
