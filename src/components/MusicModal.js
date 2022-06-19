import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/MusicModal.css";

const initialData = {
  song: "",
  artist: "",
};

export default function MusicModal({ open, onClose }) {
  const [data, setData] = useState(initialData);

  const { song, artist } = data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/itachinear/google_sheets/gIiHlVkoYcbupvnu?tabId=Lista",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([[song, artist]]),
        }
      );
      await response.json();
      setData({
        ...data,
        song: "",
        artist: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="music-overlay-modal">
        <div className="music-modal">
          <button className="music-close-modal-button" onClick={onClose}>
            X
          </button>
          <div>
            <img
              className="music-modal-image"
              src={`http://drive.google.com/uc?export=view&id=1tvNtRpIy363me4anLAFYh0MSYi62J9uq`}
              alt=" music speaker at high volume"
            />
            <h1 className="music-modal-title">
              ¿Qué canción te gustaría bailar?
            </h1>
            <form
              className="music-modal-form"
              method="post"
              onSubmit={handleSubmit}
            >
              <p className="music-modal-song">
                <label forHTML="song">
                  <span>Canción</span>
                </label>
                <input
                  type="text"
                  id="song"
                  name="song"
                  placeholder="Despacito"
                  onChange={handleInputChange}
                  value={data.song}
                ></input>
              </p>
              <p className="music-modal-artist">
                <label forHTML="artist">
                  <span>Interprete</span>
                </label>
                <input
                  type="text"
                  id="artist"
                  name="artist"
                  placeholder="Justin Bieber"
                  onChange={handleInputChange}
                  value={data.artist}
                ></input>
              </p>
              <button
                type="submit"
                value="Submit"
                className="music-form-button"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
