import "../hero2/Hero2.css";
import React, { Component } from 'react'

class Hero2 extends Component {
  render(){
  return (
    <div className="hero2">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}
export default Hero2