import Footer from "./Components/footer/page"
import Carrusel from "./Carrusel/page"
import CarruselProducto from "./carruselProductos/page"
import estilos from "./style/estilos.css"

const images = [
    '/img/banner1.png',
    '/img/banner2.png',
    '/img/banner3.png',
  ];

  const imagenes = [
    {
      src: '/img/img_carrusel/carrusel1.webp',
      alt: 'Imagen 1',
      texto: 'Prueba las bebidas más deliciosas y refrescantes.',
    },
    {
      src: '/img/img_carrusel/carrusel2.webp',
      alt: 'Imagen 2',
      texto: 'Dale un toque de energía a tu día con café.',
    },
  ];

export default function HomePage() {
    return(
    <div>
        <head>
        <title>Inicio - Dairy Queen México</title>
        </head>
        <Carrusel images={images}/>
        <h2>¡Conoce el sabor de la alegría!</h2>
        <CarruselProducto imagenes={imagenes}/>
        
        <div class="cuadro-grande">
            <h2>¡Conoce el sabor de la alegría!</h2>
            <img src="/img/banner4.png"/>
        </div>
        <Footer/>
    </div>)
} 