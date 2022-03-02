import Shelf from "../Shelf/Shelf";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="details">
        <h2 className="profile-title"> Your Skin Profile</h2>
        <div className="skin-results">
          <p> Skin Type: ___________</p>
          <p>Skin Concern: ____________</p>
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
