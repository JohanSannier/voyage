import React from "react";

const Footer = () => {
  const socials = ["facebook", "instagram", "twitter", "youtube"];
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div className="footer__data">
            <h3 className="footer__title">Voyage</h3>
            <p className="footer__description">
              Vous choisissez la destination, <br />
              nous vous faisons vivre une expérience.
            </p>

            <div>
              {socials.map((item) => (
                <a
                  href="#"
                  key={item}
                  className="footer__social"
                  target="_blank"
                >
                  <i className={`ri-${item}-fill`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">À propos</h3>

            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Notre vision
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Fonctionnalités
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Entreprise</h3>

            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Notre équipe
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Prix
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Devenir un membre
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Support</h3>

            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Service support
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__rights">
          <p className="footer__copy">
            &#169; 2023 Johan H. Tous droits réservés.
          </p>
          <div className="footer__terms">
            <a href="#" className="footer__terms-link">
              Conditions générales de vente
            </a>
            <a href="#" className="footer__terms-link">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
