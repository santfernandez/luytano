import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-greetings">
          <h1 className="footer-greetings-phrase">¡Te esperamos!</h1>
        </div>
        <div className="footer-lenaria">
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:lenariadesign@gmail.com"
              className="footer-link"
            >
              Lenaria
            </a>
            Web Design & Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
