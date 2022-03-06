import { useState, useEffect } from "react";
import "./Catalog.css";
import Modal from "react-modal/lib/components/Modal";
import ProductModal from "../ProductModal/ProductModal";
import PropTypes from "prop-types";
Modal.setAppElement("#root");

const createDropdownOptions = (allProducts, property) => {
  return allProducts
    .map((product) => product[property])
    .reduce((acc, value) => {
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, [])
    .map((value) => <option value={value}>{value}</option>);
};

const Catalog = ({ onProductClick, allProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");

  const renderProducts = () => {
    const filteredCatalogElements = allProducts
      .filter((product) => {
        return (
          (selectedCategory === "" ||
            product.productType === selectedCategory) &&
          (selectedBrand === "" || product.brand === selectedBrand)
        );
      })
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
    if (filteredCatalogElements.length === 0) {
      return (
        <p className="no-products-message">
          Sorry, no products found from those selections. Please search again.
        </p>
      );
    } else {
      return filteredCatalogElements;
    }
  };

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSelectedBrand = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">~~~ Product Catalog ~~~</h2>
      <div className="filter-options">
        <span>
          <label> Filter by Product Type: </label>
          <select
            className="all-product-select"
            onChange={handleSelectCategory}
          >
            <option value="">All</option>
            {createDropdownOptions(allProducts, "productType")}
          </select>{" "}
          <label> Filter by Brand: </label>
          <select className="all-brand-select" onChange={handleSelectedBrand}>
            <option value="">All</option>
            {createDropdownOptions(allProducts, "brand")}
          </select>
        </span>
      </div>
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

Catalog.propTypes = {
  onProductClick: PropTypes.func.isRequired,
  allProducts: PropTypes.array.isRequired,
};
