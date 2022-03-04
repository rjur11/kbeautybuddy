import { getAllSkincare } from "../../apiCalls";
import { useState, useEffect } from "react";
import "./Catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllSkincare().then(setProducts);
  }, []);

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div className="single-product-container">
          <img
            src={`https://kbeautyphotos.s3.amazonaws.com/${product.filename}.jpeg`}
            alt={`${product.name}`}
          />
          <p>
            {product.brand}
            <br />{" "}
            {product.name.length > 30
              ? product.name.substr(0, 27) + "..."
              : product.name}
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="catalog">{renderProducts()}</div>
    </div>
  );
};

export default Catalog;
