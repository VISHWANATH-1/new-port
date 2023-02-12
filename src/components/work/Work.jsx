import "../card/Card.css";
import React from "react";
import WorkCard from "../work/WorkCard"
import Card from "../card/Card";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCard.map((val, ind)=>{
           return(
             <Card 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
             />
           )
        }
        )
        }
        </div>
      </div>
  );
};

export default Work;