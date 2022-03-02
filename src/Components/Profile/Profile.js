import Shelf from "../Shelf/Shelf";
import { Link } from "react-router-dom";
import "./Profile.css";

// Need conditional logic to ensure quizResult is not null otherwise page breaks on reload
const Profile = (quizResult) => {
  return (
    <>
      <div className="details">
        <h2 className="profile-title"> Your Skin Profile</h2>
        <div className="skin-results">
          <p>
            Skin Type: <span>{`${quizResult.results.skinType}`}</span>
          </p>
          <p>
            Skin Concern: <span>{`${quizResult.results.skinConcerns}`}</span>
          </p>
        </div>
        <Link to="/quiz">
          <button className="quiz-btn"> Retake Quiz</button>
        </Link>
        <Shelf />
      </div>
    </>
  );
};

export default Profile;
