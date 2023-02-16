import React, { useEffect } from "react";

const Scrollup = () => {
  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (window.scrollY >= 200) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    return () => (window.onscroll = null);
  });

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
