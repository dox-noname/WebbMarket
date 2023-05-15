import React from "react";
import { useState } from "react";
import dataProduct from "./helpers/dataProduct.json";
import "../Oferts.css";

function Oferts() {
  const [data, setData] = useState(dataProduct);
  return (
    <div>
      <div className="container__cardsOferts">
        {data.map((el) => (
          <div className="cardOferts">
            <picture>
              <img src={el.imagen} alt="" className="img-ofert" />
            </picture>
            <div className="txt">
              <div className="prices">
                <h2 className="price">{el.price}</h2>
                <h3 className="previusPrice">{el.previousPrice}</h3>
              </div>
              <div className="description">
                <p className="description__product">{el.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Oferts;
