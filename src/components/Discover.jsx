import React from "react";
import { discover1, discover2, discover3, discover4 } from "../assets/img";

const Discover = () => {
  const data = [
    { img: discover1, title: "Bali", description: "24" },
    { img: discover2, title: "Hawaii", description: "15" },
    { img: discover3, title: "Hvar", description: "18" },
    { img: discover4, title: "Whitehaven", description: "32" },
  ];

  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">
        Découvrez <br /> les plus beaux endroits
      </h2>

      <div className="discover__container container">
        <div className="flex">
          {data.map((card) => (
            <div className="discover__card" key={card.title}>
              <img src={card.img} alt="" className="discover__img" />
              <div className="discover__data">
                <h2 className="discover__title">{card.title}</h2>
                <span className="discover__description">
                  {card.description} voyages disponibles
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
