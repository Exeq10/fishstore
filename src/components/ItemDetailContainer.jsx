import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function ItemDetailContainer({ Objetos }) {
  const [cargar, setCargar] = useState(true);
  const [item, setItem] = useState(null);

  const { id } = useParams();

  function getDatos() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Objetos.length <= 0) {
          rej(setItem(false));
        } else {
          res(Objetos);
        }
      }, 1500);
    });
  }

  useEffect(() => {
    setCargar(true);
    getDatos()
      .then((res) => {
        setItem(res.filter((prod) => prod.id === parseInt(id)));
      })
      .catch((err) => console.log(err))
      .finally(() => setCargar(false));
  }, [id]);

  return (
    <div className="container">
      {cargar ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <ItemDetail producto={item} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
