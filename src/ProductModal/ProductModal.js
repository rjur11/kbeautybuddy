const ProductModal = ({ selectedProduct }) => {
  return (
    <div>
      <img
        className="modal-img"
        src={`https://kbeautyphotos.s3.amazonaws.com/${selectedProduct.filename}.jpeg`}
        alt={selectedProduct.name}
      />
      <h1>{selectedProduct.brand}</h1>
      <h2>{selectedProduct.name}</h2>
      <p>Skin Benefits: {selectedProduct.benefits.join(", ")}</p>
      <p>Suited for these skin types: {selectedProduct.skinTypes.join(", ")}</p>
    </div>
  );
};

export default ProductModal;
