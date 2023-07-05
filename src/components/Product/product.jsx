import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="productContainer">
      <section className="productInfo">
        <h1>{product.title}</h1>
        <img className="productImage" src={product.image} alt={product.title} />
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </section>
    </div>
  );
}
