import React from "react";
import cart from "../assets/img/cart.svg";

function Cart() {
  return (
    <div className="cart">
      <a href="">
        <img src={cart} alt="carrito" />
      </a>
    </div>
  );
}

export default Cart;
