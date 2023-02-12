import React from "react";
import Footer from "../components/footer/Footer";
import Form from "../components/form/Form";
import Hero2 from "../components/hero2/Hero2";
import Navbar from "../components/navbar/Navbar";

const Contact = () => {
  return <div>
    <Navbar />
    <Hero2 heading="CONTACT" text="Let's Have A Chat" />
    <Form />
    <Footer />
  </div>;
};

export default Contact;