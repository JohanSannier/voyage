import React from "react";
import "./styles/App.css";
import About from "./components/About";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Discover />
    </>
  );
};

export default App;
