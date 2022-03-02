import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shelf from "./Components/Shelf/Shelf";
import Quiz from "./Components/Quiz/Quiz";
import quizQuestions from "./Utils/quizQuestions";
import LandingPage from "./Components/LandingPage/LandingPage";
import Profile from "./Components/Profile/Profile";
import "./index.css";
import { Route, useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const [quizResult, setQuizResult] = useState(null);
  const history = useHistory();
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        {quizResult ? JSON.stringify(quizResult) : "nothing"}
        <LandingPage />
      </Route>

      <Route exact path="/quiz">
        <Quiz
          questions={quizQuestions}
          onComplete={(answers, obj) => {
            setQuizResult(obj);
            history.push("/");
          }}
        />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </div>
  );
}

export default App;
