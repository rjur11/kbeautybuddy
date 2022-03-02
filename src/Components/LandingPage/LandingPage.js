import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main-buttons">
      <Link to="/quiz">
        <button>Take Skincare Quiz</button>{" "}
      </Link>
      <Link to="/profile">
        <button>See Skin Profile</button>{" "}
      </Link>
      <Link to="/shelf">
        <button>Check Your Skincare Shelf</button>
      </Link>
    </div>
  );
};

export default LandingPage;
