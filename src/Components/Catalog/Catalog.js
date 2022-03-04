import { getAllSkincare } from "../../apiCalls";
import { useState, useEffect } from "react";
import "./Catalog.css";
import Modal from "react-modal/lib/components/Modal";
import ProductModal from "../../ProductModal/ProductModal";

const Catalog = ({ onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    getAllSkincare().then(setProducts);
  }, []);

  const renderProducts = () => {
    return products
      .filter(
        (product) =>
          selectedCategory === "" || product.productType === selectedCategory
      )
      .map((product) => {
        return (
          <div
            className="single-product-container"
            onClick={() => setSelectedProduct(product)}
          >
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

  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div>
      <h2 className="catalog-title">~~~ Product Catalog ~~~</h2>
      <span>
        <select onChange={handleSelect}>
          <option value="">All</option>
          <option value="Cleanser">Cleansers</option>
          <option value="Toner">Toners</option>
          <option value="Serum">Serums</option>
          <option value="Cream">Creams</option>
          <option value="SPF">SPF</option>
        </select>
      </span>
      <div className="catalog">{renderProducts()}</div>
      <Modal
        isOpen={selectedProduct !== null}
        onRequestClose={() => setSelectedProduct(null)}
      >
        <ProductModal
          selectedProduct={selectedProduct}
          onProductClick={(product) => {
            onProductClick(product);
            setSelectedProduct(null);
          }}
        />
      </Modal>
    </div>
  );
};

export default Catalog;
