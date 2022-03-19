import { React, useState } from "react";

import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";

export function Formato(valor, moneda) {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: moneda,
    minimumFractionDigits: 2,
  });
}

function Card({ initial, productos }) {
  const { picture, stock, nombre, tipo, precio, id } = productos;

  return (
    <div className="card">
      <div className="header-card">
        <img src={picture} alt="producto" />
      </div>
      <div className="body-card">
        <p className="name">{nombre}</p>
        <p className="type"> {tipo}</p>
        <p className="price"> {Formato(precio, "UYU")}</p>
      </div>
      <div className="footer-card">
        <Link to={`/detail/${id}`}>
          <Button variant="success">Ver detalles </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
