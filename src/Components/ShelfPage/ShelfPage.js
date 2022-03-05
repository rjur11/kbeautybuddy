import Shelf from "../Shelf/Shelf";
import Catalog from "../Catalog/Catalog";

const ShelfPage = ({ userProducts, allProducts, onProductClick }) => {
  return (
    <>
      <Shelf products={userProducts} />
      <Catalog allProducts={allProducts} onProductClick={onProductClick} />
    </>
  );
};

export default ShelfPage;
