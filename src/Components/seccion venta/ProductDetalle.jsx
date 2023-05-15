import React from "react";
import { useState } from "react";
import dataProduct from "../../helpers/dataProduct.json";
import "./cssventas/detalle.css";
import { Navbar } from "../../Components/Navigation/Navigation";
function ProductDetalle({ price, name, imagen }) {
  const data = dataProduct[0];
  return (
    <div>
      <div className="detalle-product">
        <div className="">
          <picture>
            <img src={data.imagen} alt="" className="prodcuto-principal" />
          </picture>
          <picture className="masproductos">
            <div className="item-img"></div>
            <div className="item-img"></div>
            <div className="item-img"></div>
            <div className="item-img"></div>
          </picture>
        </div>
        <div className="info">
          <div className="price-prv-price">
            <h2 className="price-pruduct">{data.price}</h2>
            <h3 className="prev-price">{data.previousPrice}</h3>
          </div>

          <p className="descripcion-producto">{data.descripcion}</p>
        </div>
        <div className="options">
          <div className="img-cantidad-container">
            <picture>
              <img src={data.imagen} alt="" className="img-colores" />
            </picture>
            <div className="cantidad-container">
              <form action="" className="inputs">
                <input type="submit" value="-" />
                <h1>1</h1>
                <input type="submit" value="+" />
              </form>
            </div>
          </div>

          <div className="buttons">
            <form action="" className="container-button">
              <input
                type="submit"
                value="Añadir al carrito"
                className="btn btn__add"
              />
              <input type="submit" value="Comprar" className="btn btn-buy" />
              <input
                type="submit"
                value="Añadir a tu lista de deseos"
                className="btn btn-favoritos"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetalle;
