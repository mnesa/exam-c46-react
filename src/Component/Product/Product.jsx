import "./Product.css";

const Product = ({ product }) => {
  const { name, img, seller, price, ratting } = product;
  return (
    <div className="product shadow p-3">
      <img src={img} alt="" />
      <div>
        <p className="fw-bold py-2">{name}</p>
        <p>Price:{price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Ratting:{ratting}</small>
        </p>
      </div>
      <button className="btn my-bg-secondary w-100 fs-5 text-light">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
