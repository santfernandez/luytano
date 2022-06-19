import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/RSVPModal.css";
import RSVPForm from "./RSVPForm";

export default function RSVPModal({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="rsvp-overlay-modal">
        <div className="rsvp-modal">
          <button className="rsvp-close-modal-button" onClick={onClose}>
            X
          </button>
          <RSVPForm />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
