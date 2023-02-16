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
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import Scrollup from "./components/Scrollup";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Discover />
        <Experience />
        <Video />
        <Place />
        <Subscribe />
        <Sponsor />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
