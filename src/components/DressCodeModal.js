import React from "react";
import ReactDOM from "react-dom";
import "../styles/DressCodeModal.css";

export default function DressCodeModal({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="dresscode-overlay-modal">
        <div className="dresscode-modal">
          <button className="dresscode-close-modal-button" onClick={onClose}>
            X
          </button>
          <img
            className="dresscode-modal-image"
            src={`http://drive.google.com/uc?export=view&id=1D_2njiuszE_8fFsYxaYjeG6FKnx5QTQk`}
          />
          <h1 className="dresscode-modal-tag">Elegante</h1>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
