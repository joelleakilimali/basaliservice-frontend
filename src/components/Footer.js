import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">
            Basaliservice Agence événementielle, est une agence créé par un
            groupe des jeunes ambitueux et motivés pour le changement.{" "}
          </p>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+123456789">+243812952248</a>
              <a href="tel:+123456789"> //+243973523189</a>
            </li>
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:contact@example.com">basaliservice@gmail.com</a>
            </li>
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faWhatsapp} />
              <a href="https://wa.me/123456789">+243904874291</a>
            </li>
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faInstagram} />
              <a href="https://instagram.com/basaliservice?igshid=NTc4MTIwNjQ2YQ==">
                BASALIservice
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Follow Us</h3>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://instagram.com/basaliservice?igshid=NTc4MTIwNjQ2YQ==">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; 2023 Basali Service Protocol's Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
