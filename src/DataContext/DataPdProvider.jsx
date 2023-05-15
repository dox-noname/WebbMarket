import React, { useState } from "react";
import { createContext } from "react";
import dataProduct from "../helpers/dataProduct.json";
import imgbanners from "../helpers/banners.json";
export const DataContext = createContext();

export function DataPdProvider(props) {
  const [dataState, setDataState] = useState({ products: dataProduct, banners: imgbanners });

  return (
    <DataContext.Provider value={[dataState,setDataState]}>
      {props.children}
    </DataContext.Provider>
  );
}
