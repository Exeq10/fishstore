import { Alert } from "bootstrap";
import React, { Fragment } from "react";
import Card from "../components/Card";

/* componente  */
function ItemListContainer(props) {
  const { titulo, Objetos } = props;

  /* funcion que toma los datos del array y simula el retraso de red */
  const getDatos = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Objetos.length <= 0) {
          rej(alert("Error"));
        } else {
          res(Objetos);
        }
      }, 2000);
    });
  };

  return (
    <Fragment>
      <h2>{titulo}</h2>
      <section className="productos">
        {getDatos().then((dato) => {
          dato.map((d, k) => (
            <Card
              stock={d.stock}
              initial={1}
              nombre={d.nombre}
              tipo={d.tipo}
              precio={d.precio}
            />
          ));
        })}
      </section>
    </Fragment>
  );
}
export default ItemListContainer;
