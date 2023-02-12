import React from "react";
import Footer from "../components/footer/Footer";
import Hero2 from "../components/hero2/Hero2";
import Navbar from "../components/navbar/Navbar";
import Pricing from "../components/price/Pricing";
import Work from "../components/work/Work";

const Project = () => {
  return <div>
    <Navbar />
    <Hero2 heading="PROJECT'S" text="My Project Works" />
    <Work />
    <Pricing />
    <Footer />
  </div>;
};

export default Project;