import React, { useState } from "react";
import "../styles/PartyInfo.css";
import DressCodeModal from "../components/DressCodeModal";
import MusicModal from "../components/MusicModal";
import NoKidsModal from "../components/NoKidsModal";
import GiftModal from "../components/GiftModal";

const PartyInfo = () => {
  const [dresscodeIsOpen, setDresscodeIsOpen] = useState(false);
  const [musicIsOpen, setMusicIsOpen] = useState(false);
  const [noKidsIsOpen, setNoKidsIsOpen] = useState(false);
  const [giftIsOpen, setGiftIsOpen] = useState(false);
  return (
    <div className="party-info">
      <div className="party-info-a">
        <h1 className="party-info-title">¡Hora de la fiesta!</h1>
      </div>
      <div className="party-info-b">
        <div className="party-info-row-a">
          <div className="party-dresscode">
            <div className="party-info-image">
              <img
                src={`http://drive.google.com/uc?export=view&id=1TuSl5w4aif3mHXJpLNTlJuoEAkxqSDuX`}
              />
            </div>
            <h2 className="party-info-subtitle">Dress Code</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setDresscodeIsOpen(true)}
            >
              ¿Qué me pongo?
            </button>
            <DressCodeModal
              open={dresscodeIsOpen}
              onClose={() => setDresscodeIsOpen(false)}
            >
              <img></img>
              <h2>Elegante</h2>
            </DressCodeModal>
          </div>
          <div className="party-music">
            <div className="party-info-image">
              <img
                src={`http://drive.google.com/uc?export=view&id=10Fyq8FBVa7rYak24KaO9lnhS9SMHaXnt`}
              />
            </div>
            <h2 className="party-info-subtitle">Música</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setMusicIsOpen(true)}
            >
              ¿Qué cancion no debería faltar?
            </button>
            <MusicModal
              open={musicIsOpen}
              onClose={() => setMusicIsOpen(false)}
            ></MusicModal>
          </div>
        </div>
        <div className="party-info-row-b">
          <div className="party-no-kids-allowed">
            <div className="party-info-image">
              <img
                src={`http://drive.google.com/uc?export=view&id=1T3Gpkg2pjW8nmGdIpCH1J5uPef1truNE`}
              />
            </div>
            <h2 className="party-info-subtitle">Sin niños</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setNoKidsIsOpen(true)}
            >
              Más info
            </button>
            <NoKidsModal
              open={noKidsIsOpen}
              onClose={() => setNoKidsIsOpen(false)}
            ></NoKidsModal>
          </div>
          <div className="party-gifts">
            <div className="party-info-image">
              <img
                src={`http://drive.google.com/uc?export=view&id=1umakiREd_X1i39sYFd3i0DDI4Y3F4-ko`}
              />
            </div>
            <h2 className="party-info-subtitle">Regalos</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setGiftIsOpen(true)}
            >
              Más info
            </button>
            <GiftModal
              open={giftIsOpen}
              onClose={() => setGiftIsOpen(false)}
            ></GiftModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInfo;
