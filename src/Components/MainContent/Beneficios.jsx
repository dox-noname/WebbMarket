import React from "react";
import "./csscontent/beneficios.css";
function Beneficios() {
  return (
    <div>
      <div className="container__beneficios">
        <div className="item item1">
          <img
            src="../../../src/assets/icons/pensado.svg"
            alt=""
            className="icon--beneficios icon--1"
          />
          <figcaption>Pensado para ti</figcaption>
        </div>
        <div className="item item2">
          <img
            src="../../../src/assets/icons/seguro.svg"
            alt=""
            className="icon--beneficios icon--2"
          />
          <figcaption>100% confiable</figcaption>
        </div>
        <div className="item item3">
          <img
            src="../../../src/assets/icons/favoritos.png"
            alt=""
            className="icon--beneficios icon--3"
          />
          <figcaption>Paga con tus favoritos</figcaption>
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
