/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Greet from "./Components/Greet/Greet";
import Sapa from "./Components/Sapasquare/Sapa";
import Currencies from "./Components/Currencies/Currencies";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="bg-[#222] text-white">
      <Navbar />
      <Hero />
      <Greet />
      <Sapa/>
      <Currencies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
