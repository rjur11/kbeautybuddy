import "./Shelf.css";
import Cleanser from "../../Images/cleanser.png";
import Toner from "../../Images/toner.png";
import Serum from "../../Images/serum.png";
import Cream from "../../Images/cream.png";
import SPF from "../../Images/spf.png";

const Shelf = () => {
  return (
    <div className="shelf">
      <div className="images">
        <img className="first" src={Cleanser} />
        <img className="second" src={Toner} />
        <img className="third" src={Serum} />
        <img className="fourth" src={Cream} />
        <img className="fifth" src={SPF} />
      </div>
      <div className="product-names">
        <p>Cleanser</p>
        <p>Toner</p>
        <p>Serum</p>
        <p>Cream</p>
        <p>Sunscreen</p>
      </div>
    </div>
  );
};

export default Shelf;
