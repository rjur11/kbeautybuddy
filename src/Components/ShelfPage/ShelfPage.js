import Shelf from "../Shelf/Shelf";
import Catalog from "../Catalog/Catalog";
import PropTypes from "prop-types";

const ShelfPage = ({ userProducts, allProducts, onProductClick }) => {
  return (
    <>
      <Shelf products={userProducts} />
      <Catalog allProducts={allProducts} onProductClick={onProductClick} />
    </>
  );
};

export default ShelfPage;

ShelfPage.propTypes = {
  userProducts: PropTypes.array.isRequired,
  allProducts: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
};
