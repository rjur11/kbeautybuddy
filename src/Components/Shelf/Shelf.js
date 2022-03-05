import "./Shelf.css";
import Cleanser from "../../Images/cleanser.png";
import Toner from "../../Images/toner.png";
import Serum from "../../Images/serum.png";
import Cream from "../../Images/cream.png";
import SPF from "../../Images/spf.png";
import PropTypes from "prop-types";

const Shelf = ({ products, onProductClick }) => {
  const renderPlaceHolder = () => {
    return (
      <>
        <div className="images">
          <div>
            <img className="first" src={Cleanser} />
            <p>Cleanser</p>
          </div>
          <div>
            <img className="second" src={Toner} />
            <p>Toner</p>
          </div>
          <div>
            <img className="third" src={Serum} />
            <p>Serum</p>
          </div>
          <div>
            <img className="fourth" src={Cream} />
            <p>Cream</p>
          </div>
          <div>
            <img className="fifth" src={SPF} />
            <p>Sunscreen</p>
          </div>
        </div>
      </>
    );
  };
  const renderProduct = (product) => {
    return (
      <div className="single-product-details">
        <img
          src={`https://kbeautyphotos.s3.amazonaws.com/${product.filename}.jpeg`}
          alt={`${product.name}`}
        />
        <p>
          {product.brand}
          <br /> {product.name}
        </p>
      </div>
    );
  };

  const renderRoutine = () => {
    return (
      <>
        <div className="images">{products.map(renderProduct)}</div>
      </>
    );
  };
  return (
    <>
      <div className="shelf">
        <h2 className="shelf-header">Your Shelf:</h2>
        {products === null ? renderPlaceHolder() : renderRoutine()}
      </div>
    </>
  );
};

export default Shelf;

Shelf.propTypes = {
  products: PropTypes.array.isRequired,
};
