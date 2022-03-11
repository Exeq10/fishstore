import { React, useState } from "react";
import logo from "../assets/img/Fish-Store-logo.png";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function Card(props) {
  const { initial, stock, nombre, tipo, precio } = props;

  return (
    <div className="card">
      <header className="header-card">
        <img src={logo} alt="producto" />
      </header>
      <body className="body-card">
        <p>{nombre}</p>
        <p>{precio}</p>
        <p>{tipo}</p>
      </body>
      <footer className="footer-card">
        <ItemCount initial={initial} stock={stock} />
        <Button variant="success">Comprar</Button>{" "}
      </footer>
    </div>
  );
}

export default Card;
