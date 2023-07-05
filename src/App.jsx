import "./App.css";
import Header from "./components/header/header.jsx";
import Cards from "./components/Cards/cards.jsx";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product/product.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
