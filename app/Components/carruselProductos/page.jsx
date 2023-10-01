"use client"
import React, { useState, useEffect } from 'react';
import estilo from "../style/estilos.css"

export default function Carrusel({ imagenes }) {
  const [indiceSlide, setIndiceSlide] = useState(0);

  const cambiarSlide = (n) => {
    mostrarSlide(indiceSlide + n);
  };

  useEffect(() => {
    const intervalo = setInterval(() => cambiarSlide(1), 5000);
    return () => clearInterval(intervalo);
  }, []);

  const mostrarSlide = (n) => {
    let newIndiceSlide = n;
    if (newIndiceSlide >= imagenes.length) {
      newIndiceSlide = 0;
    } else if (newIndiceSlide < 0) {
      newIndiceSlide = imagenes.length - 1;
    }
    setIndiceSlide(newIndiceSlide);
  };

  const [corriendo, setCorriendo] = useState(false);

  const iniciar = () => {
    setCorriendo(true);
    const intervalo = setInterval(() => cambiarSlide(1), 5000);
    return () => clearInterval(intervalo);
  };

  const detener = () => {
    setCorriendo(false);
  };

  return (
    <div className="contenedor-carrusel">
      <div className="carrusel">
        {imagenes.map((imagen, index) => (
          <div className="diapositiva">
            <img
              key={index}
              src={imagen.src}
              alt={imagen.alt}
              style={{
                transform: `translateX(${-indiceSlide * 100}%)`,
                width: 500,
                height: 500,
                transition: `transform 1s ease-in-out, opacity 0.5s ease-in-out`,
              }}
            />
            <p style={{ transition: `transform 0.5s ease-in-out` }}>{imagen.texto}</p>
          </div>
        ))}
      </div>
      <button className="boton-anterior" onClick={() => cambiarSlide(-1)}>
        &#9664;
      </button>
      <button className="boton-siguiente" onClick={() => cambiarSlide(1)}>
        &#9654;
      </button>
      <a className="botonIr" href="/menuTienda">¡Conócelos aquí!</a>
    </div>
  );
}
