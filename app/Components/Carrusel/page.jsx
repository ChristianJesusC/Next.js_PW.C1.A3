"use client"
import React, { useState, useEffect } from 'react';
import estilo from "../style/estilos.css"

export default function Carousel({ images }) {
  const [indiceSlide, setIndiceSlide] = useState(0);

  const cambiarSlide = (n) => {
    mostrarSlide(indiceSlide + n);
    detener();
  };

  const mostrarSlide = (n) => {
    let newIndiceSlide = n;
    if (newIndiceSlide >= images.length) {
      newIndiceSlide = 0;
    } else if (newIndiceSlide < 0) {
      newIndiceSlide = images.length - 1;
    }
    setIndiceSlide(newIndiceSlide);
  };

  const [corriendo, setCorriendo] = useState(false);

  const iniciar = () => {
    setCorriendo(true);
    const intervalo = setInterval(() => cambiarSlide(1), 5000);
    return () => clearInterval(intervalo);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!corriendo) {
        iniciar();
      }
    }
  }, [corriendo]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            style={{
              transform: `translateX(${-indiceSlide * 100}%)`,
              width: "100%",
              height: "100%",
              transition: `transform 1s ease-in-out`,
            }}
          />
        ))}
      </div>
      <button className="prev-button" onClick={() => cambiarSlide(-1)}>
        &#9664;
      </button>
      <button className="next-button" onClick={() => cambiarSlide(1)}>
        &#9654;
      </button>
    </div>
  );
}
