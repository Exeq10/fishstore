import React from "react";
import Logo from "./Logo";
import Navegacion from "./Navegacion";

function Header() {
  return (
    <header className="header">
      <Logo />

      <Navegacion />
    </header>
  );
}

export default Header;
