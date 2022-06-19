import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 7, 2022 12:00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="home">
      <div className="rectangle-background">
        <div className="date-and-icon">
          <img
            className="home-icon"
            src={`https://drive.google.com/uc?export=view&id=11sUSZwUr52wJBm74n4tt6lsDTMLtPOTo`}
          />
          <span className="home-date">07|05|22</span>
        </div>
        <div className="title">
          <h2>Lucila</h2>
          <span className="middle-title">&</span>
          <h2>Luciano</h2>
        </div>
        <div className="quote">
          <p>
            "Y mis ojos, versus su sonrisa, <br /> terminaron por tirar la
            fachada"
          </p>
        </div>
      </div>
      <section className="countdown">
        <div className="countdown-container">
          <div className="countdown-container-row-a">
            <div className="number-container">
              <p>{timerDays}</p>
              <span>Días</span>
            </div>
            <div className="number-container">
              <p>{timerHours}</p>
              <span>Horas</span>
            </div>
          </div>
          <div className="countdown-container-row-b">
            <div className="number-container">
              <p>{timerMinutes}</p>
              <span>Min</span>
            </div>
            <div className="number-container">
              <p>{timerSeconds}</p>
              <span>Seg</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
