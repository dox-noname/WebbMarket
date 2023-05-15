import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SlidersCSS/slider.css";
import { useContext } from "react";
import { DataContext } from "../../DataContext/DataPdProvider";
import { useSearchParams } from "react-router-dom";
function MainSlider() {
  return (
    <div className="carrusel">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div>
          <img
            src="../../../src/assets/images/Desktop/banner3.jpeg"
            alt="Imagen 1"
          />
          </div>
        <div>
          <img
            src="../../../src/assets/images/Desktop/banner2.jpeg"
            alt="Imagen 2"
          />
        </div>
        <div>
          <img
            src="../../../src/assets/images/Desktop/bn2.jpeg"
            alt="Imagen 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MainSlider;
