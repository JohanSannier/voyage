import React, { useState } from "react";

const Header = () => {
  function handleClickMenu() {
    const navMenu = document.getElementById("id-menu");
    navMenu.classList.toggle("show-menu");
  }

  const navLink = [
    { name: "Accueil", link: "home" },
    { name: "À propos", link: "about" },
    { name: "Découvrir", link: "discover" },
    { name: "Endroits", link: "place" },
  ];

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Voyage
        </a>

        <div className="nav__menu" id="id-menu">
          <ul className="nav__list">
            {navLink.map((item) => (
              <li className="nav__item">
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
