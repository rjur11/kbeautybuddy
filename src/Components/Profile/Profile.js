import Shelf from "../Shelf/Shelf";
import { Link } from "react-router-dom";
import "./Profile.css";
import PropTypes from "prop-types";

// Need conditional logic to ensure quizResult is not null otherwise page breaks on reload
const Profile = ({ results, products }) => {
  const checkForNull = (prop) => {
    return results !== null ? results[prop] : "__________";
  };
  return (
    <>
      <div className="details">
        <h2 className="profile-title"> Your Skin Profile</h2>
        <div className="skin-results">
          <p>
            Skin Type: <span>{checkForNull("skinType")}</span>
          </p>
          <p>
            Skin Concern: <span>{checkForNull("skinConcerns")}</span>
          </p>
        </div>
        <Link to="/quiz">
          <button className="quiz-btn">
            {" "}
            {results === null
              ? "Take Skin Quiz to get profile results!"
              : "Retake Quiz"}
          </button>
        </Link>
        <Link to="/">
          <button className="return-home-btn">Back to main page</button>
        </Link>
      </div>
      <Shelf products={products} />
    </>
  );
};

export default Profile;

Profile.propTypes = {
  results: PropTypes.any.isRequired,
  products: PropTypes.any.isRequired,
};
