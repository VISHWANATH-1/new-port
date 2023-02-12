import React from "react";
import AboutContent from "../components/about/AboutContent";
import Footer from "../components/footer/Footer";
import Hero2 from "../components/hero2/Hero2";
import Navbar from "../components/navbar/Navbar";

const About = () => {
  return <div>
    <Navbar />
    <Hero2 heading="About" text="I Am Front-End Developer" />
    <AboutContent />
    <Footer />
  </div>;
};

export default About;