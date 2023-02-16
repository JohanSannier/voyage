import React, { useEffect } from "react";

const Header = () => {
  const navLink = [
    { name: "Accueil", link: "home" },
    { name: "À propos", link: "about" },
    { name: "Découvrir", link: "discover" },
    { name: "Destinations", link: "place" },
  ];

  function handleClickMenu(e) {
    const navMenu = document.getElementById("id-menu");
    if (e.target.classList.contains("ri-function-line")) {
      navMenu.classList.toggle("show-menu");
    } else {
      navMenu.classList.remove("show-menu");
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      scrollActive();
      const header = document.getElementById("header");
      if (window.scrollY >= 100) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    return () => (window.onscroll = null);
  });

  function scrollActive() {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.id;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.add("active-link");
      } else {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.remove("active-link");
      }
    });
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Voyage
        </a>

        <div className="nav__menu" id="id-menu">
          <ul className="nav__list">
            {navLink.map((item) => (
              <li
                className="nav__item"
                onClick={handleClickMenu}
                key={item.link}
              >
                <a href={`#${item.link}`} className="nav__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="ri-close-line nav__close"
            id="nav-close"
            onClick={handleClickMenu}
          ></i>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleClickMenu}>
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
