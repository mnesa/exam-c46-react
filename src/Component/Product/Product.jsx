import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, seller, price, ratings, _id } = product;
  return (
    <div>
      <div className="product shadow p-3">
        <img src={img} alt="" />
        <div>
          <p className="fw-bold py-2">{name}</p>
          <p>Price: {price}</p>
          <p>
            <small>Seller: {seller}</small>
          </p>
          <p>
            <small>Ratting: {ratings}</small>
          </p>
        </div>
        <Link
          to={`/checkout/${_id}`}
          className="btn my-bg-secondary w-100 fs-5 text-light mb-3"
        >
          Details
        </Link>
        <button className="btn my-bg-secondary w-100 fs-5 text-light">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
