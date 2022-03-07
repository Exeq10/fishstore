import { React, useState } from "react";

function ItemCount() {
  const [stockItem, setStockItem] = useState(1);

  return (
    <div className="count">
      <button
        className="count-button mas"
        onClick={() => {
          if (stockItem === 10) {
            setStockItem(10);
          } else {
            setStockItem(stockItem + 1);
          }
        }}
      >
        +
      </button>
      <h4>{stockItem}</h4>
      <button
        className="  count-button menos"
        onClick={() => {
          if (stockItem === 1) {
            setStockItem(1);
          }

          if (stockItem > 1) {
            setStockItem(stockItem - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
