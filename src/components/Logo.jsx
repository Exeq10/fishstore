import React from "react";
import fish from "../assets/img/Fish-Store-logo.png";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={fish} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
