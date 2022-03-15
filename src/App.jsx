import Contenedor from "./components/Contenedor";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./css/App.css";

/* array de objetos */

const Objetos = [
  {
    nombre: "Reel Okuma",
    tipo: "Frontal",
    precio: 1245,
    picture: "/images/reel frontal1.jpg",
    stock: 40,
  },
  {
    nombre: "Reel Rapala",
    tipo: "Rotativo",
    precio: 1685,
    picture: "/images/reelrotativo1.jpg",
    stock: 30,
  },

  {
    nombre: "Caña de lance Okuma",
    tipo: "Fibra de carbono",
    precio: 6745,
    picture: "/images/caña2.jpg",
    stock: 14,
  },
  {
    nombre: "Tanza Sufix 30 mm",
    tipo: "Nylon",
    precio: 800,
    picture: "/images/tanzasufix.jpg",
    stock: 40,
  },
  {
    nombre: "Tanza Vexter 60 mm",
    tipo: "Multifilamento",
    precio: 1205,
    picture: "/images/tanzavexter.jpg",
    stock: 12,
  },
  {
    nombre: "Reel xtreme",
    tipo: "Frontal",
    precio: 6845,
    picture: "/images/reel rotativo3.webp",
    stock: 10,
  },
];

function App() {
  const mensajes = ["hola", "chau", "bye"];
  return (
    <div className="App">
      <Header />
      <Contenedor />

      <ItemListContainer titulo={"Productos Destacados"} Objetos={Objetos} />

      <Footer texto={mensajes} />
    </div>
  );
}

export default App;
