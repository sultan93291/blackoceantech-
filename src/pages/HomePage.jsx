import React from "react";
import GetInTouch from "../Components/Pages/HomePage/GetInTouch";
import WhyChooseUs from "../Components/Pages/HomePage/WhyChooseUs";
import Features from "../Components/Pages/HomePage/Features";
import Hero from "../Components/Pages/HomePage/Hero";
import AboutUs from "../Components/Pages/HomePage/AboutUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <WhyChooseUs />
      <GetInTouch />
    </>
  );
};

export default HomePage;
