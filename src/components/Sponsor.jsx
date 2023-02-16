import React from "react";
import {
  sponsors1,
  sponsors2,
  sponsors3,
  sponsors4,
  sponsors5,
} from "../assets/img";

const Sponsor = () => {
  const data = [sponsors1, sponsors2, sponsors3, sponsors4, sponsors5];
  return (
    <section className="sponsor section">
      <div className="sponsor__container container grid">
        {data.map((sponsor, index) => (
          <div className="sponsor__content" key={`-${index}`}>
            <img src={sponsor} alt="" className="sponsor__img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
