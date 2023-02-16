import React from "react";
import { place1, place2, place3, place4, place5 } from "../assets/img";

const Place = () => {
  const data = [
    {
      rating: "4,8",
      title: "Bali",
      subtitle: "Indonésie",
      price: "1599",
      img: place1,
    },
    {
      rating: "5",
      title: "Bora Bora",
      subtitle: "Polynésie",
      price: "2499",
      img: place2,
    },
    {
      rating: "4,9",
      title: "Hawaï",
      subtitle: "USA",
      price: "3499",
      img: place3,
    },
    {
      rating: "4,8",
      title: "Whitehaven",
      subtitle: "Australie",
      price: "2699",
      img: place4,
    },
    {
      rating: "4,8",
      title: "Hvar",
      subtitle: "Croatie",
      price: "1899",
      img: place5,
    },
  ];
  return (
    <section className="place section" id="place">
      <h2 className="section__title">Choisissez votre destination</h2>

      <div className="place__container container grid">
        {data.map((place) => (
          <div className="place__card" key={place.title}>
            <img src={place.img} alt="" className="place__img" />

            <div className="place__content">
              <span className="place__rating">
                <i className="ri-star-line place__rating-icon"></i>
                <span className="place__rating-number">{place.rating}</span>
              </span>

              <div className="place__data">
                <h3 className="place__title">{place.title}</h3>
                <span className="place__subtitle">{place.subtitle}</span>
                <span className="place__price">${place.price}</span>
              </div>
            </div>
            <button className="button button--flex place__button">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Place;
