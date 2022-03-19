import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Contenedor from "./Contenedor";

/* componente  */
function ItemListContainer(props) {
  const { titulo, Objetos } = props;
  const [productos, setProductos] = useState([]);
  const [cargar, setCargar] = useState(true);

  const { categoria } = useParams();

  /* funcion que toma los datos del array y simula el retraso de red */
  function getDatos() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Objetos.length <= 0) {
          rej(setProductos(false));
        } else {
          if (!categoria) {
            res(Objetos);
          } else {
            res(Objetos.filter((objeto) => objeto.categoria === categoria));
          }
        }
      }, 1500);
    });
  }

  useEffect(() => {
    setCargar(true);
    getDatos()
      .then((response) => setProductos(response))

      .catch((err) => console.log(err))
      .finally(() => setCargar(false));
  }, [categoria]);

  return (
    <Fragment>
      <h2>{titulo}</h2>
      <section className="productos">
        {productos ? (
          cargar ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            productos.map((producto, index) => (
              <Card productos={producto} key={index} initial={1} />
            ))
          )
        ) : (
          <p>No hay productos</p>
        )}
      </section>
    </Fragment>
  );
}
export default ItemListContainer;
