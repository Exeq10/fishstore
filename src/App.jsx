import Contenedor from "./components/Contenedor";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import CartList from "./components/CartList";

import "./css/App.css";

import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* array de objetos */
import { Objetos } from "./components/datos/Objetos";
import Contacto from "./components/Contacto";

function App() {
  {
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Contenedor />
                <ItemListContainer
                  Objetos={Objetos}
                  titulo={"Nuestros Productos"}
                />
              </>
            }
          />
          <Route
            path="/productos/:categoria"
            element={<ItemListContainer Objetos={Objetos} />}
          />
          <Route path="/info" element={<Info />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route
            path="/detail/:id"
            element={<ItemDetailContainer Objetos={Objetos} />}
          />

          <Route path="/cart" element={<CartList />} />

          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
