import React from "react";
import Logo from "./Logo";
import Navegacion from "./Navegacion";

function Header() {
  const enlaces = ["Home", "Info", "Contacto"];
  return (
    <header className="header">
      <Logo />

      <Navegacion enlaces={enlaces} />
    </header>
  );
}

export default Header;
