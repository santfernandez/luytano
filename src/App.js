import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./sections/Home";
import VenueInfo from "./sections/VenueInfo";
import PartyInfo from "./sections/PartyInfo";
import Instagram from "./sections/Instagram";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <VenueInfo />
      <PartyInfo />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
