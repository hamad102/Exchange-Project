import React from "react";
import Header from "../Components/LandingPage/Header";
import Hero from "../Components/LandingPage/Hero";

const LandingPageBody = () => {
  return (
    <>
      <div className=' bg-[url("/images/hero.svg")] bg-cover bg-no-repeat'>
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default LandingPageBody;
