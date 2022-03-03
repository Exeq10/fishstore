import React, { Fragment } from "react";
import Card from "./Card";

function Productos(props) {
  const { titulo } = props;

  return (
    <Fragment>
      <h2>{titulo}</h2>
      <section className="productos">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Fragment>
  );
}

export default Productos;
