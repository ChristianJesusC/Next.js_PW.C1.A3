import React, { Children } from "react";
import estilos from "./style/estilos.css";
import Link from "next/link";


export default function RootLayout({children}) {
  return (
    <html lang="es">
      <head>
        <title>Dairy Queen México</title>
      </head>
      <body>
        <nav>
          <div class="menu">
            <img src="/img/logo.png" alt="Dairy Queen" />
            <a href="/">INICIO</a>
            <Link href="/menuTienda">MENÚ</Link>
          </div>
        </nav>
        <div className="contenido-debajo-del-nav">
        {children}
        </div>
        
      </body>
    </html>
  );
}
1