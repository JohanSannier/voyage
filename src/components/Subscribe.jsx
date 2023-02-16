import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe section">
      <div className="subscribe__bg">
        <div className="subscribe__container container">
          <h2 className="section__title subscribe__title">
            Souscrire à <br />
            notre Newsletter
          </h2>
          <p className="subscribe__description">
            Souscrivez à notre Newsletter et recevez une réduction spéciale de
            15% sur votre voyage.
          </p>
          <div className="subscribe__form">
            <input
              type="text"
              placeholder="Email"
              className="subscribe__input"
            />
            <button className="button">S'inscrire</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
