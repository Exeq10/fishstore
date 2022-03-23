import { React, useState } from "react";

function ItemCount({ stock, cantidad, setCantidad }) {
  const [stockItem, setStockItem] = useState(stock);

  /* Funciones */
  const Sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      setStockItem(stockItem - 1);

      console.log(stockItem);
    }
  };

  const Restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setStockItem(stockItem + 1);
    }
  };

  return (
    <div className="count">
      <button
        className="  count-button menos"
        onClick={() => {
          Restar();
        }}
      >
        -
      </button>
      <h4>{cantidad}</h4>
      <button
        className="count-button mas"
        onClick={() => {
          Sumar();
        }}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
