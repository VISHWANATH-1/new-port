import "../hero/Hero.css";
import React from 'react'
import Intro from "../../pic/intro-bg.jpg"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="Hero">
        <div className="mask">
            <img className="intro-img" src={Intro} alt="" />
        </div>
           <div className="content">
            <p>Hi, I am a Learner</p>
            <h1>React Developer</h1>
              <div>
                <Link to="/Project" className="btn">
                    Project
                </Link>
                <Link to="/Contact" className="btn btn-light">
                    Contact
                </Link>
              </div>
        </div>
    </div>
  )
}

export default Hero