import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    image: 'https://via.placeholder.com/150x150',
    price: 10.99
  },
  {
    id: 2,
    name: 'Producto 2',
    image: 'https://via.placeholder.com/150x150',
    price: 9.99
  },
  {
    id: 3,
    name: 'Producto 3',
    image: 'https://via.placeholder.com/150x150',
    price: 12.99
  },
  {
    id: 4,
    name: 'Producto 4',
    image: 'https://via.placeholder.com/150x150',
    price: 7.99
  },
  {
    id: 5,
    name: 'Producto 5',
    image: 'https://via.placeholder.com/150x150',
    price: 14.99
  }
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  
  return (
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </Slider>
  );
}

export default ProductCarousel;
