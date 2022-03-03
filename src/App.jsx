import Contenedor from "./components/Contenedor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productos from "./components/Productos";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Contenedor />

      <Productos titulo="Nuestros Productos" />
      <Footer />
    </div>
  );
}

export default App;
