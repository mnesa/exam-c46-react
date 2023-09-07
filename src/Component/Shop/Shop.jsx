import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  document.title = "Shop";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container shop my-mt">
        <h1 className="display-1">
          All <br /> Products
        </h1>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
