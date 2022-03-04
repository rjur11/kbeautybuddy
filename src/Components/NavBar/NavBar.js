import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="1">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 className="logo-title">KBeautyBuddy</h1>
        </Link>
      </div>
      <div className="2">
        <p>Welcome, Rana</p>
      </div>
    </div>
  );
};

export default NavBar;
