import React from "react";
import logo from "../assets/img/Fish-Store-logo.png";

function Card() {
  return (
    <div className="card">
      <header className="header-card">
        <img src={logo} alt="producto" />
      </header>
      <body className="body-card">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam in
          vel dignissimos fuga sapiente. Minima in, nisi nesciunt, sed eos est
          id omnis adipisci quibusdam sit rerum, veritatis qui vero?
        </p>
      </body>
      <footer className="footer-card">
        <button className="btn">Comprar</button>
      </footer>
    </div>
  );
}

export default Card;
