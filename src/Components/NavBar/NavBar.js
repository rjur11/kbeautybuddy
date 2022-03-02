import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1 className="logo-title">KBeautyBuddy</h1>
      </Link>
      <p>Welcome, Rana</p>
    </div>
  );
};

export default NavBar;
