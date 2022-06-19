import React, { useState } from "react";
import "../styles/VenueInfo.css";
import RSVPModal from "../components/RSVPModal";

const VenueInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="venue-info">
      <div className="venue-info-row-a">
        <div className="ceremony">
          <div className="venue-info-image">
            <img
              src={`http://drive.google.com/uc?export=view&id=1Kui86K3SDVdmlE710qPeHJqxKwYQC3Ua`}
            />
          </div>
          <div className="venue-info-content">
            <div className="venue-info-event">
              <h2>Ceremonia</h2>
            </div>
            <div className="venue-info-day">
              <h4>Día</h4>
              <p>7 de mayo de 2022</p>
            </div>
            <div className="venue-info-hour">
              <h4>Hora</h4>
              <p>12 pm</p>
            </div>
            <div className="venue-info-venue">
              <h4>Lugar</h4>
              <p>Parroquia Cristo Rey</p>
            </div>
            <div className="venue-info-address">
              <h4>Dirección</h4>
              <p>Av. Mate de luna 3906, SM de Tucumán</p>
            </div>
          </div>
          <div className="venue-info-button">
            <button type="button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/9hy8zLpiVS9EjkpJ7"
              >
                Cómo llegar
              </a>
            </button>
          </div>
        </div>
        <div className="party">
          <div className="venue-info-image">
            <img
              src={`http://drive.google.com/uc?export=view&id=1MX-9KCmVHxwVosJnD30OVFlD3CpvqDXF`}
            />
          </div>
          <div className="venue-info-content">
            <div className="venue-info-event">
              <h2>Celebración</h2>
            </div>
            <div className="venue-info-day">
              <h4>Día</h4>
              <p>7 de mayo de 2022</p>
            </div>
            <div className="venue-info-hour">
              <h4>Hora</h4>
              <p>1 pm</p>
            </div>
            <div className="venue-info-venue">
              <h4>Lugar</h4>
              <p>La Finca Eventos</p>
            </div>
            <div className="venue-info-addres">
              <h4>Dirección</h4>
              <p>Maipú 1850, Tafí Viejo</p>
            </div>
          </div>
          <div className="venue-info-button">
            <button type="button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/kAbPHbbyrnAPdWED7"
              >
                Cómo llegar
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="venue-info-row-b">
        <div className="rsvp">
          <button type="button" onClick={() => setIsOpen(true)}>
            Confirmar asistencia
          </button>
          <RSVPModal open={isOpen} onClose={() => setIsOpen(false)}></RSVPModal>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
