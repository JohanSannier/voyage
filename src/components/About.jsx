import React from "react";
import { about1, about2 } from "../assets/img/index";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            Plus d'informations <br /> à propos des plus belles plages
          </h2>
          <p className="about__description">
            Retrouvez les meilleurs endroits et des plages magnifiques aux
            meilleurs prix, vous choisissez la destination et nous vous
            guiderons pas à pas, réservez dès maintenant !
          </p>
          <a href="#" className="button">
            Réservez
          </a>
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img src={about1} alt="" className="about__img-one" />
          </div>
          <div className="about__img-overlay">
            <img src={about2} alt="" className="about__img-one" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
