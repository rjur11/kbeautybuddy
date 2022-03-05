import "./ProductModal.css";
import PropTypes from "prop-types";

const ProductModal = ({ selectedProduct, onProductClick }) => {
  return selectedProduct === null ? (
    "hi"
  ) : (
    <div className="modal-container">
      <div className="modal-img-container">
        <img
          className="modal-img"
          src={`https://kbeautyphotos.s3.amazonaws.com/${selectedProduct.filename}.jpeg`}
          alt={selectedProduct.name}
        />
      </div>
      <div className="modal-details">
        <h1>{selectedProduct.brand}</h1>
        <h2>{selectedProduct.name}</h2>
        <p>Skin Benefits: {selectedProduct.benefits.join(", ")}</p>
        <p>
          Suited for these skin types: {selectedProduct.skinTypes.join(", ")}
        </p>

        <button
          className="modal-btn"
          onClick={() => onProductClick(selectedProduct)}
        >
          {" "}
          Replace in routine
        </button>
      </div>
    </div>
  );
};

export default ProductModal;

ProductModal.propTypes = {
  selectedProduct: PropTypes.any.isRequired,
  onProductClick: PropTypes.func.isRequired,
};
