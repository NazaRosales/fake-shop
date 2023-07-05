import "./card.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  const { id, title, image, price } = props;
  return (
    <Link to={`/product/${id}`} className="productCard" id={"product" + id}>
      <img src={image} alt={title} className="productImg" />
      <p className="productPrice">${price}</p>
      <h1 className="productTitle">{title}</h1>
    </Link>
  );
}
