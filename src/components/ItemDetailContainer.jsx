import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer({ Objetos }) {
  let elemento = Objetos.filter((objeto) => objeto.id === 4);

  return (
    <div className="container">
      {" "}
      <ItemDetail items={elemento} />{" "}
    </div>
  );
}

export default ItemDetailContainer;
