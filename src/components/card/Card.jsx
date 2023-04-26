import "../card/Card.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ imgsrc, view, text, title }) => {
  return (
    <div className="project-card">
      <div style={{ width: "100%" }}>
        <img src={imgsrc} alt="" />
        <h2 className="project-title">{title}</h2>
        <div className="pro-details">
          <p>{text}</p>
          <div className="pro-btns">
            <a href={view} className="btn">
              View
            </a>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
