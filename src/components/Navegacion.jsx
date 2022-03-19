import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <nav className="navegacion">
      <ul className="enlaces">
        <li>
          <Cart />
        </li>

        <li className=" cat item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" cat item">
          {" "}
          <Link to={"/info"}> Info</Link>
        </li>
        <li className=" cat item"></li>

        <li className="cat item">
          Productos ▼
          <ul className="submenu">
            <li className="Item-submenu item">
              <Link to={"/productos/caña"}> Cañas</Link>
            </li>
            <li className="Item-submenu item">
              <Link to={"/productos/reel"}> Reels</Link>
            </li>{" "}
            <li className="Item-submenu item">
              <Link to={"/productos/tanza"}> Tanzas</Link>
            </li>{" "}
            <li className="Item-submenu item">
              <Link to={"/productos/accesorio"}> Accesorios</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
