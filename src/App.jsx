import Contenedor from "./components/Contenedor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productos from "./components/Productos";

import "./css/App.css";

function App() {
  const mensajes = ["hola", "chau", "bye"];
  return (
    <div className="App">
      <Header />
      <Contenedor />

      <Productos titulo="Nuestros Productos" />

      <Footer texto={mensajes} />
    </div>
  );
}

export default App;
