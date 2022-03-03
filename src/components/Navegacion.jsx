import React from "react";
import Cart from "./Cart";

function Navegacion() {
  return (
    <nav className="navegacion">
      <ul className="enlaces">
        <li>
          <Cart />
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Productos</a>
        </li>
        <li>
          <a href="">Info</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
