import React from "react";
import Cart from "./Cart";

function Navegacion(props) {
  const { enlaces } = props;
  return (
    <nav className="navegacion">
      <ul className="enlaces">
        <li>
          <Cart />
        </li>

        {enlaces.map((enlace, key) => (
          <li key={key}>
            <a href="" className="item">
              {enlace}
            </a>
          </li>
        ))}

        <li className="cat item">
          Productos ▼
          <ul className="submenu">
            <li className="Item-submenu">
              <a href="" className="item">
                Cañas
              </a>
            </li>
            <li className="Item-submenu">
              <a href="" className="item">
                Reels Frontales
              </a>
            </li>

            <li className="Item-submenu">
              <a href="" className="item">
                Reels Rotativos
              </a>
            </li>

            <li className="Item-submenu">
              <a href="" className="item">
                Equipamiento
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
