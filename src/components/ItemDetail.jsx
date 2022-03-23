import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Formato } from "./Card";

function ItemDetail({ producto }) {
  const { id, nombre, precio, picture, description, tipo, stock } = producto[0];

  const [cantidad, setCantidad] = useState(0);

  const AgregarItemToCart = () => {
    const itemToCart = {
      id,
      nombre,
      precio,
      cantidad,
    };

    console.log(itemToCart);
  };

  AgregarItemToCart();

  return (
    <div>
      <div className="itemdetail">
        <div className="itemImage">
          <img src={picture} alt="imagenProducto" />
        </div>

        <div className="itemInfo">
          <h2>{nombre}</h2>
          <p>{description}</p>
          <h3 className="price">{Formato(precio, "UYU")}</h3>
          <h4>{tipo}</h4>

          <ItemCount
            stock={stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
          />
          {stock == cantidad ? (
            <p className="alert">No hay mas stock</p>
          ) : (
            <p></p>
          )}
          <Link to={"/cart"}>
            {" "}
            <Button className="success" variant="success">
              Agregar al carrito
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
