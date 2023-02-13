import React from "react";
import { experience1, experience2 } from "../assets/img";

const Experience = () => {
  const data = [
    { nb: "20", firstWord: "Années", secondWord: "D'expérience" },
    { nb: "75", firstWord: "Voyages", secondWord: "Complets" },
    { nb: "650+", firstWord: "Destinations", secondWord: "Touristiques" },
  ];
  return (
    <section className="experience section">
      <h2 className="section__title">
        Avec notre expérience <br />
        Nous vous servirons
      </h2>
      <div className="experience__container container grid">
        <div className="experience__content grid">
          {data.map((table) => (
            <div className="experience__data" key={table.nb}>
              <h2 className="experience__number">{table.nb}</h2>
              <span className="experience__description">
                {table.firstWord} <br />
                {table.secondWord}
              </span>
            </div>
          ))}
        </div>

        <div className="experience__img grid">
          <div className="experience__overlay">
            <img src={experience1} alt="" className="experience__img-one" />
          </div>{" "}
          <div className="experience__overlay">
            <img src={experience2} alt="" className="experience__img-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
