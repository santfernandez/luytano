import React from "react";
import "../styles/Instagram.css";

const Instagram = () => {
  return (
    <div className="instagram-section">
      <div className="instagram-section-phrase">
        <p>Compartí la experiencia usando el hashtag</p>
      </div>
      <div className="instagram-section-image">
        <img
          src={`http://drive.google.com/uc?export=view&id=1AfGpzF0VtEV0tvRHoVYgYu_EhIys9iWH`}
        />
      </div>
      <div className="instagram-section-hashtag">
        <p>#luytano</p>
      </div>
      <button className="instagram-section-button" type="button">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/explore/tags/luytano/?hl=es"
          className="instagram-link"
        >
          <p>Ver en Instagram</p>
        </a>
      </button>
    </div>
  );
};

export default Instagram;
