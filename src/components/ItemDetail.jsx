import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

import { Formato } from "./Card";

function ItemDetail({ producto }) {
  return (
    <div>
      <div className="itemdetail">
        <div className="itemImage">
          <img src={producto[0].picture} alt="imagenProducto" />
        </div>

        <div className="itemInfo">
          <h2>{producto[0].nombre}</h2>
          <p>{producto[0].description}</p>
          <h3 className="price">{Formato(producto[0].precio, "UYU")}</h3>
          <h4>{producto[0].tipo}</h4>

          <ItemCount initial={1} stock={producto[0].stock} />
          <Button className="success" variant="success">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
