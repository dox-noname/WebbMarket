import React from "react";
import "./csscontent/Section.css";
import { Link } from "react-router-dom";
function Section(props) {
  const sectionStyle = {
    backgroundColor: props.backgroundColor || "#fff", 

  };

  return (
    <section className="section-container" style={sectionStyle}>
      <div className="section-content">
        {props.title && <h2 className="section-title">{props.title}</h2>}
        <p className="section-descripcion">{props.children} </p>
      </div>
      <div>
        <a href="" className="cta-banner" >
          Quiero verlo  !
        </a>
      </div>
    </section>
  );
}

export default Section;
