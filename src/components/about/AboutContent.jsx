import "../about/AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../../pic/react1.jpg";
import React2 from "../../pic/react2.webp";
const AboutContent = () => {
  return (
    <div className="about" >
       <div className="left">
         <h1>Who Am I ?</h1>
         <p>I Am A React Front-end Developer,
            I Usually Create Responsive And Secure Web Pages
         </p> 
         <Link to="/contact">
            <button className="btn">Contact</button>
         </Link>
       </div>
       <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} alt="True" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React1} alt="True" className="img" />
          </div>
        </div>
       </div>
    </div>
  )
}

export default AboutContent