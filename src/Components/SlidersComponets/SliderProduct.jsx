import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { DataContext } from "../../DataContext/DataPdProvider";
import "./SlidersCSS/SliderProduct.css";

export function SliderProduct() {
  const [dataState] = useContext(DataContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1204, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 500 },
      items: 3,
    },
    mobile2: {
      breakpoint: { max: 590, min: 400 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 400, min: 320 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (

      <Carousel
        responsive={responsive}
        className="card-containerr"
        customTransition="all 3000ms"
        transitionDuration={500}
        style={{ width: '80%' }}
      >
        {dataState.products.map((product) => (
          <div key={product.id} className="cardssss">
            <img src={product.imagen} alt="" className="img--product" />
            <div className="container__info">
              <div className="price-product">
                <h2 className="price-slider">{product.price}</h2>
                <h3 className="previus__price">{product.previousPrice}</h3>
              </div>

              <div className="info-product">
                <p className="super__ofertas">Super Ofertas</p>
                <p className="description">{product.descripcion}</p>
                <p className="Envio">Envio Gratis</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      
  );
}
export default SliderProduct;
