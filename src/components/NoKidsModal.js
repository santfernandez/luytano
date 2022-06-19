import React from "react";
import ReactDOM from "react-dom";
import "../styles/NoKidsModal.css";

export default function NoKidsModal({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="no-kids-overlay-modal">
        <div className="no-kids-modal">
          <button className="no-kids-close-modal-button" onClick={onClose}>
            X
          </button>
          <div className="no-kids-modal-content">
            <h1 className="no-kids-modal-title">
              Deseamos que todos disfruten al máximo de la fiesta y por eso
              decidimos que sea solo de adultos.
            </h1>
            <img
              className="no-kids-modal-image"
              src={`http://drive.google.com/uc?export=view&id=1XdV-ovpl-QedKvY_vYegCBHgEB7_JW-r`}
              alt="bored kid laying on the floor"
            />
            <img
              className="no-kids-modal-heart"
              src={`http://drive.google.com/uc?export=view&id=1riLQ_hWKjeO2TuTlQzOKqajhR5i233pW`}
              alt="bored kid laying on the floor"
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
