import { React, useState } from "react";

function ItemCount({ initial, stock }) {
  const [stockItem, setStockItem] = useState(initial);

  /* Funciones */
  const Sumar = () => {
    if (stockItem < stock) {
      setStockItem(stockItem + 1);
    }
  };

  const Restar = () => {
    if (stockItem > 0) {
      setStockItem(stockItem - 1);
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
      <h4>{stockItem}</h4>
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
