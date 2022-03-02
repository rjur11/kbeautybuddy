import NavBar from "../NavBar/NavBar";
import Shelf from "../Shelf/Shelf";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="details">
        <h2> Your Skin Profile</h2>
        <p> Skin Type: ___________</p>
        <p>Skin Concern: ____________</p>
      </div>
      <>
        <button> Retake Quiz</button>
      </>
      <Shelf />
    </>
  );
};

export default Profile;
