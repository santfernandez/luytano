import React, { useState } from "react";
import "../styles/RSVPModal.css";

const initialData = {
  assistanceConfirmation: "",
  firstAssistant: "",
  secondAssistant: "",
  thirdAssistant: "",
  fourthAssistant: "",
  fifthAssistant: "",
  sixthAssistant: "",
};

const RSVPForm = () => {
  const [data, setData] = useState(initialData);

  const {
    assistanceConfirmation,
    firstAssistant,
    secondAssistant,
    thirdAssistant,
    fourthAssistant,
    fifthAssistant,
    sixthAssistant,
  } = data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/santfernandez/google_sheets/qqHSFkbwufAzEQMf?tabId=Lista",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              assistanceConfirmation,
              firstAssistant,
              secondAssistant,
              thirdAssistant,
              fourthAssistant,
              fifthAssistant,
              sixthAssistant,
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        assistanceConfirmation: "",
        firstAssistant: "",
        secondAssistant: "",
        thirdAssistant: "",
        fourthAssistant: "",
        fifthAssistant: "",
        sixthAssistant: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <h1 className="rsvp-modal-title">¿Asistís a la fiesta?</h1>
        <form className="rsvp-modal-form" method="post" onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              id="assistanceConfirmation"
              name="assistanceConfirmation"
              value={data.assistanceConfirmation}
              onChange={handleInputChange}
              className="rsvp-modal-assistance-confirmation"
              placeholder="Si o no para confirmar"
            ></input>
          </p>
          <fieldset className="rsvp-modal-fieldset">
            <legend className="rsvp-modal-list-legend">
              Indicanos quienes asistirán / no asistirán
            </legend>
            <ul className="rsvp-modal-list">
              <li className="rsvp-modal-list-li">
                <input
                  type="text"
                  id="name"
                  name="firstAssistant"
                  placeholder="Nombre y Apellido"
                  className="rsvp-modal-list-input"
                  value={data.firstAssistant}
                  onChange={handleInputChange}
                ></input>
              </li>
              <li className="rsvp-modal-list-li">
                <input
                  type="text"
                  id="name"
                  name="secondAssistant"
                  placeholder="Nombre y Apellido"
                  className="rsvp-modal-list-input"
                  onChange={handleInputChange}
                  value={data.secondAssistant}
                ></input>
              </li>
              <li className="rsvp-modal-list-li">
                <input
                  type="text"
                  id="name"
                  name="thirdAssistant"
                  placeholder="Nombre y Apellido"
                  className="rsvp-modal-list-input"
                  onChange={handleInputChange}
                  value={data.thirdAssistant}
                ></input>
              </li>
              <li className="rsvp-modal-list-li">
                <input
                  type="text"
                  id="name"
                  name="fourthAssistant"
                  placeholder="Nombre y Apellido"
                  className="rsvp-modal-list-input"
                  onChange={handleInputChange}
                  value={data.fourthAssistant}
                ></input>
              </li>
              <li className="rsvp-modal-list-li">
                <input
                  type="text"
                  id="name"
                  name="fifthAssistant"
                  placeholder="Nombre y Apellido"
                  className="rsvp-modal-list-input"
                  onChange={handleInputChange}
                  value={data.fifthAssistant}
                ></input>
              </li>
              <li className="rsvp-modal-list-li">
                <input
                  type="text"
                  id="name"
                  name="sixthAssistant"
                  placeholder="Nombre y Apellido"
                  className="rsvp-modal-list-input"
                  onChange={handleInputChange}
                  value={data.sixthAssistant}
                ></input>
              </li>
            </ul>
          </fieldset>
          <div>
            <button type="submit" value="Submit" className="rsvp-form-button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;
