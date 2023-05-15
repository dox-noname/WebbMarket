import React, { useState } from "react";
import "./Op.css";

const Opinions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const opinions = [
    {
      id: 1,
      name: "John Doe",
      comment: "¡Excelente producto! Lo recomiendo totalmente.",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Increíble calidad y servicio al cliente.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      comment: "Me encanta este producto. ¡No puedo vivir sin él!",
    },
    {
      id: 4,
      name: "Emily Williams",
      comment: "El mejor producto que he utilizado. Simplemente asombroso.",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? opinions.length - 3 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === opinions.length - 3 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="opinions-section">
      <h2>Opiniones de nuestros clientes</h2>
      <div className="opinions-slider">
        <button className="slider-button prev-button" onClick={handlePrevSlide}>
          &lt;
        </button>
        <div className="opinion-container">
          {opinions.slice(currentSlide, currentSlide + 3).map((opinion) => (
            <div key={opinion.id} className="opinion-card">
              <h3>{opinion.name}</h3>
              <p>{opinion.comment}</p>
            </div>
          ))}
        </div>
        <button className="slider-button next-button" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Opinions;
