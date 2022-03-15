import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Card from "../components/Card";

/* componente  */
function ItemListContainer(props) {
  const { titulo, Objetos } = props;
  const [productos, setProductos] = useState([]);
  const [cargar, setCargar] = useState(true);

  /* funcion que toma los datos del array y simula el retraso de red */
  const getDatos = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Objetos.length <= 0) {
          rej(setProductos(false));
        } else {
          res(Objetos);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    getDatos()
      .then((response) => setProductos(response))

      .catch((err) => console.log(err))
      .finally(() => setCargar(false));
  }, []);

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
