import { React, useState } from "react";

import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";

function Card({ initial, productos }) {
  const { picture, stock, nombre, tipo, precio } = productos;

  const Formato = (valor, moneda) => {
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: moneda,
      minimumFractionDigits: 2,
    });
  };

  <ItemDetail formato={Formato} />;

  console.log(picture);
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
        <ItemCount initial={initial} stock={stock} />
        <Button variant="success">Comprar</Button>{" "}
      </div>
    </div>
  );
}

export default Card;
