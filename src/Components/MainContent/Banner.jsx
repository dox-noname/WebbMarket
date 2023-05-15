import React from "react";
import { DataContext } from "../../DataContext/DataPdProvider";
import { useContext } from "react";
import "./csscontent/banner.css";
// import CustomLink from "../CustomLink";
function Banner() {
  //const [dataState] = useContext(DataContext);
  //const bannerimg = dataState.banners[0].banner;

  return (
    <div>
      <div className="container-banner">
        <div className="container_ofert_banner">
          <h2 className="title__banner">Tecnologia</h2>
          <p className="price__banner">hasta un 20% OFF</p>
          <div className="container--cta__product">
            <a href="" className="cta__product">
              ver más
            </a>
            <span className="arrow"></span>
          </div>

          {/* <CustomLink destination="/index.html">a</CustomLink> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
