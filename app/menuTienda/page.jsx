import estilosMenu from "../style/estilosMenu.css"
import Footer from "../Components/footer/page";

export default function menuTienda() {
    return(
        <div className="cursor">
            <head>
                <title>Menú - Dairy Queen México</title>
            </head>
            <div className="espacio-izquierdo">
            <button className="espacio-sombreado">
                <img src="/img/menu1.webp"/>
                <a>BLIZZARD® Treats</a>
            </button>
            <button className="espacio-sombreado">
                <img src="/img/menu2.webp"/>
                <a href="#Malteada">MALTEADAS</a>
            </button>
            <button className="espacio-sombreado">
                 <img src="/img/menu3.webp"/>
                <a href="#chilito">CHILITO SLUSH®</a>
            </button>
            <button className="espacio-sombreado">
                <img src="/img/menu4.webp"/>
                <a href="#cafes">CAFÉS DQ®</a>
            </button>
            <button className="espacio-sombreado">
                <img src="/img/menu5.webp"/>
                <a href="#clasico">CLÁSICOS DQ®</a>
            </button>
            <button className="espacio-sombreado">
                <img src="/img/menu6.webp"/>
                <a href="#pasteles">PASTELES HELADOS</a>
            </button>
            <button className="espacio-sombreado">
                <img src="/img/menu7.webp"/>
                <a href="#llevar">PARA LLEVAR</a>
            </button>
            <button className="espacio-sombreado">
                <img src="/img/menu8.webp"/>
                <a href="#especiales">ESPECIALIDADES</a>
            </button>
        </div>
        <div className="espacio-derecho">
            <h2>Menú</h2>
            <p id="Bliz">BLIZZARD® Treats</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/img_licuado/licuado1.webp" alt="Licuado1"/>
                    <p>Frutos Rojos Pay de Queso</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/img_licuado/licuado2.webp" alt="licuado2"/>
                    <p>Fresa Pay de Queso</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/img_licuado/licuado3.webp" alt="licuado3"/>
                    <p>Mango Pay de Queso</p>
                </div>
            </div>
            <p id="Malteada">MALTEADAS</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/img_malt/malteada1.webp" alt="malteada1"/>
                    <p>Malteada Fresa</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/img_malt/malteada2.webp" alt="malteada2"/>
                    <p>Malteada Fresa</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/img_malt/malteada3.webp" alt="malteada3"/>
                    <p>Malteada Fresa</p>
                </div>
            </div>            
            <p id="chilito">CHILITO SLUSH®</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/chilito.webp" alt="chilito"/>
                    <p>DQ® Chilito Slush</p>
                </div>
            </div>            
            <p id="cafes">CAFÉS DQ®</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/cafe1.webp" alt="cafe"/>
                    <p>Café Slush</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/cafe2.webp" alt="cafe2"/>
                    <p>Café Slush</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/cafe3.webp" alt="cafe3"/>
                    <p>Café Frappé</p>
                </div>
            </div>            
            <p id="clasico">CLÁSICOS DQ®</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/clasico1.webp" alt="clasico1"/>
                    <p>Sundae</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/clasico2.webp" alt="clasico2"/>
                    <p>Cono Waffle</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/clasico3.webp" alt="clasico3"/>
                    <p>Cono Cubierto</p>
                </div>
            </div>            
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/clasico4.webp" alt="clasico4"/>
                    <p>Cono Clásico</p>
                </div>
            </div> 
            <p id="pasteles">PASTELES HELADOS</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/pastel1.webp" alt="pastel1"/>
                    <p>Oreo®</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/pastel2.webp" alt="pastel2"/>
                    <p>Fresa Pay de Queso</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/pastel3.webp" alt="pastel3"/>
                    <p>Choco Xtreme</p>
                </div>
            </div>            
            <p id="llevar">PARA LLEVAR</p>
            <p className="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/llevar1.webp" alt="llevar1"/>
                    <p>DQ® Sándwich</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/llevar2.webp" alt="llevar2"/>
                    <p>Dilly Bar</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/llevar3.webp" alt="llevar3"/>
                    <p>BLIZZARD® Treat Familiar</p>
                </div>
            </div>            
            <p id="especiales">ESPECIALIDADES</p>
            <p class="linea_negra"></p>
            <div className="contenedor">
                <div className="contenedor-interno">
                    <img src="/img/especial1.webp" alt="especial1"/>
                    <p>Triple Chocolate Parfait</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/especial2.webp" alt="especial2"/>
                    <p>Canasta Waffle</p>
                </div>
                <div className="contenedor-interno">
                    <img src="/img/especial3.webp" alt="especial3"/>
                    <p>Banana Split</p>
                </div>
            </div>            
        </div>
        <Footer/>
        </div>
    );
}