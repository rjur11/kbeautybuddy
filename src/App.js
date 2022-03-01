import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shelf from "./Components/Shelf/Shelf";
import Quiz from "./Components/Quiz/Quiz";
import quizQuestions from "./Utils/quizQuestions";
import "./index.css";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Quiz
            questions={quizQuestions}
            onComplete={(answers, obj) => console.log(answers, obj)}
          />
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
          <Shelf />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
