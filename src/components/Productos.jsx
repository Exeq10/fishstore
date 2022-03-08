import React, { Fragment } from "react";
import Card from "./Card";

function Productos(props) {
  const { titulo } = props;

  return (
    <Fragment>
      <h2>{titulo}</h2>
      <section className="productos">
        <Card stock={25} initial={1} />
        <Card stock={20} initial={1} />
        <Card stock={5} initial={1} />
        <Card stock={9} initial={1} />
        <Card stock={7} initial={1} />
        <Card stock={17} initial={1} />
        <Card stock={12} initial={1} />
        <Card stock={10} initial={1} />
      </section>
    </Fragment>
  );
}

export default Productos;
