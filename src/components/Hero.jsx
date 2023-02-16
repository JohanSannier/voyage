import React from "react";
import { home1, home2 } from "../assets/img/index.js";

const Hero = () => {
  const socialLink = ["facebook", "instagram", "twitter", "youtube"];
  return (
    <section className="home" id="home">
      <img src={home1} alt="" className="home__img" />
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">Découvrez un lieu</span>
          <h1 className="home__data-title">Explorez les plus belles plages</h1>
          <a href="#" className="button">
            Découvrir
          </a>
        </div>

        <div className="home__social">
          {socialLink.map((item) => (
            <a
              href="#"
              key={item}
              className="home__social-link"
              target="_blank"
            >
              <i className={`ri-${item}-fill`}></i>
            </a>
          ))}
        </div>

        <div className="home__info">
          <div>
            <span className="home__info-title">
              Les 5 meilleurs endroits à visiter
            </span>
            <a
              href="#"
              className="button button--flex button--link home__info-button"
            >
              Plus d'info <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <img src={home2} alt="" className="home__info-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
