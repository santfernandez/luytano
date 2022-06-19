import React from "react";
import ReactDOM from "react-dom";
import "../styles/GiftModal.css";

export default function GiftModal({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="gift-overlay-modal">
        <div className="gift-modal">
          <button className="gift-close-modal-button" onClick={onClose}>
            X
          </button>
          <img
            className="gift-modal-box"
            src={`http://drive.google.com/uc?export=view&id=10-o1jP3w_bDd5wiNy4vQ1MhPa6XmLPSM`}
            alt="bored kid laying on the floor"
          />
          <div className="gift-modal-titles">
            <h1>¡Su presencia es nuestro mejor regalo!</h1>
            <h2>Pero si queres hacernos un detalle, esta es nuetra cuenta:</h2>
          </div>
          <div className="gift-modal-all-info">
            <div className="gift-modal-info-container">
              <p className="gift-modal-info">
                Brubank- caja de ahorro en pesos
              </p>
            </div>
            <div className="gift-modal-info-container">
              <p className="gift-modal-info">Alias: casamiento-luytano</p>
            </div>
            <div className="gift-modal-info-container">
              <p className="gift-modal-info">CBU: 14300017 - 13016281680013</p>
            </div>
            <div className="gift-modal-info-container">
              <p className="gift-modal-info">Nro de cuenta: 1301628168001</p>
            </div>
          </div>
          <h2 className="gift-modal-greetings">¡Muchas gracias!</h2>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
