import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            nulla et sapien efficitur imperdiet.{" "}
          </p>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+123456789">+1 (234) 567-89</a>
            </li>
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:contact@example.com">contact@example.com</a>
            </li>
            <li className="footer__contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="https://wa.me/123456789">WhatsApp</a>
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
              <a href="https://www.instagram.com">
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
