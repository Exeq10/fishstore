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
    picture: "#",
    stock: 40,
  },
  {
    nombre: "Reel Rapala",
    tipo: "Rotativo",
    precio: 1685,
    picture: "#",
    stock: 30,
  },
  {
    nombre: "Reel Specialiced",
    tipo: "Frontal",
    precio: 1988,
    picture: "#",
    stock: 10,
  },
  {
    nombre: "Caña Okuma 2.20 m",
    tipo: "Fibra de vidrio",
    precio: 4651,
    picture: "#",
    stock: 23,
  },
  {
    nombre: "Caña SuperFish",
    tipo: "Fibra de carbono",
    precio: 6745,
    picture: "#",
    stock: 14,
  },
  {
    nombre: "Tanza Rapala 30 mm",
    tipo: "Nylon",
    precio: 800,
    picture: "#",
    stock: 40,
  },
  {
    nombre: "Tanza GoldenFish 60 mm",
    tipo: "Multifilamento",
    precio: 1205,
    picture: "#",
    stock: 12,
  },
  {
    nombre: "Reel xtreme",
    tipo: "Frontal",
    precio: 6845,
    picture: "#",
    stock: 10,
  },
];

function App() {
  const mensajes = ["hola", "chau", "bye"];
  return (
    <div className="App">
      <Header />
      <Contenedor />

      <ItemListContainer titulo={"Productos"} Objetos={Objetos} />

      <Footer texto={mensajes} />
    </div>
  );
}

export default App;
