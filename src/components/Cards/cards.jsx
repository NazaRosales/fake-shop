import { useEffect, useState } from "react";
import "./cards.css";
import Card from "../Card/card";
import Filters from "../filters/filters.jsx";
export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <>
      <Filters />
      <section className="listProducts">
        {products.map((p) => {
          return (
            <Card
              key={p?.id}
              id={p?.id}
              title={p?.title}
              image={p?.image}
              price={p?.price}
            />
          );
        })}
      </section>
    </>
  );
}
