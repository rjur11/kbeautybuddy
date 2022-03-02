import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shelf from "./Components/Shelf/Shelf";
import Quiz from "./Components/Quiz/Quiz";
import quizQuestions from "./Utils/quizQuestions";
import Profile from "./Components/Profile/Profile";
import "./index.css";
import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [quizResult, setQuizResult] = useState(null);
  return (
    <div className="App">
      <NavBar />
      {quizResult === null ? (
        <Quiz
          questions={quizQuestions}
          onComplete={(answers, obj) => setQuizResult(obj)}
        />
      ) : (
        <>
          <div className="main-buttons">
            <button onClick={() => setQuizResult(null)}>
              {quizResult === null ? "Take " : "Retake "} Skincare Quiz
            </button>
            <button onClick={() => console.log("Profile")}>
              See Skin Profile
            </button>
            <button onClick={() => console.log("Shelf")}>
              Check Your Skincare Shelf
            </button>
          </div>
        </>
      )}
      <Profile />
    </div>
  );
}

export default App;
