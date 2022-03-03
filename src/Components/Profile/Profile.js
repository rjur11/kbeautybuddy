import Shelf from "../Shelf/Shelf";
import { Link } from "react-router-dom";
import "./Profile.css";

// Need conditional logic to ensure quizResult is not null otherwise page breaks on reload
const Profile = (quizResult) => {
  const checkForNull = (prop) => {
    return quizResult !== null && quizResult.results !== null
      ? quizResult.results[prop]
      : "__________";
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
            {quizResult === null || quizResult.results === null
              ? "Take Skin Quiz to get profile results!"
              : "Retake Quiz"}
          </button>
        </Link>
        <Shelf />
      </div>
    </>
  );
};

export default Profile;
