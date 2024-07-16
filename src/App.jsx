import React from "react";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Header from "./components/layouts/Header";
import BackgroundAnimation from "./components/animations/BacgroundAnimation";
import Tokenomics from "./pages/Tokenomics";
import Banner from "./pages/Banner";

const App = () => {
  return (
    <>
      <main className="relative overflow-hidden z-[5] ">
        <Header />
        <Hero />
        <About />
        <Tokenomics />
        <Banner />
        <Contact />
        <BackgroundAnimation />
      </main>
    </>
  );
};

export default App;
