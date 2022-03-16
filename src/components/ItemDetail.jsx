import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

function ItemDetail({ items, formato }) {
  const [itemdetail, setIdetail] = useState([]);
  const [cargar, setCargar] = useState(true);

  const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      if (items.length >= 0) {
        res(items);
      } else {
        rej(console.log("error"));
      }
    }, 2500);
  });

  useEffect(() => {
    promesa
      .then((response) => setIdetail(response))
      .catch((err) => console.log(err))
      .finally(() => setCargar(false));
  }, []);

  return (
    <div>
      {itemdetail ? (
        cargar ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <div className="itemdetail">
            <div className="itemimg">
              <img src={itemdetail[0].picture} alt="imagen" />
            </div>
            <div className="itemInfo">
              <h3 className="name">{itemdetail[0].nombre}</h3>
              <p>{itemdetail[0].description}</p>
              <h4 className="price">$ {itemdetail[0].precio}</h4>
              <ItemCount initial={1} stock={itemdetail[0].stock} />

              <Button variant="success">Comprar</Button>
            </div>
          </div>
        )
      ) : (
        <p>no hay productos</p>
      )}
    </div>
  );
}

export default ItemDetail;
