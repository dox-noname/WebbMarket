import React, { useState } from "react";
import "../../CardProduct.css";
import { useContext } from "react";
import { DataContext } from "../../DataContext/DataPdProvider";
function Products() {
  const [products] = useContext(DataContext);
  
  return (
    <div className="main-content-cards">
      <div className="grid place-items-center grid-rows-1 gap-4  ">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h1 className="">{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
