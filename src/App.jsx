import React from "react";
import "./styles/App.css";
import About from "./components/About";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Place from "./components/Place";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Discover />
      <Experience />
      <Video />
      <Place />
      <Subscribe />
    </>
  );
};

export default App;
