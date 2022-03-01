import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "./index.css";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar />
          <div className="main-buttons">
            <button onClick={() => console.log("Quiz")}>
              Take Skincare Quiz
            </button>
            <button onClick={() => console.log("Profile")}>
              See Skin Profile
            </button>
            <button onClick={() => console.log("Shelf")}>
              Check Your Skincare Shelf
            </button>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
