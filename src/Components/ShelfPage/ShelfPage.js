import Shelf from "../Shelf/Shelf";
import Catalog from "../Catalog/Catalog";

const ShelfPage = ({ products, onProductClick }) => {
  return (
    <>
      <Shelf products={products} />
      <Catalog onProductClick={onProductClick} />
    </>
  );
};

export default ShelfPage;
