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
import { getAllSkincare } from "./apiCalls";

const chooseRandom = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
};

function App() {
  const [quizResult, setQuizResult] = useState(null);
  const [shelfState, setShelfState] = useState(null);
  const history = useHistory();

  const onQuizComplete = (obj) => {
    setQuizResult(obj);
    history.push("/");
    getAllSkincare().then((skincare) => {
      const productsForUser = skincare
        .filter((product) => product.skinTypes.includes(obj.skinType))
        .filter((product) => product.benefits.includes(obj.skinConcerns));
      console.log(productsForUser);
      const routine = obj.steps.map((productType) => {
        const hasProductType = (product) =>
          product.productType.toLowerCase() === productType;
        let productsOfType = productsForUser.filter(hasProductType);
        if (productsOfType.length === 0) {
          productsOfType = skincare.filter(hasProductType);
        }
        return chooseRandom(productsOfType);
      });
      setShelfState(routine);
    });
  };

  const replaceOnShelf = (product) => {
    console.log(product);
    setShelfState(
      shelfState.map((shelfProduct) =>
        shelfProduct.productType === product.productType
          ? product
          : shelfProduct
      )
    );
  };

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/quiz">
        <Quiz questions={quizQuestions} onComplete={onQuizComplete} />
      </Route>
      <Route exact path="/profile">
        <Profile results={quizResult} products={shelfState} />
      </Route>
      <Route exact path="/shelf">
        <Shelf products={shelfState} onProductClick={replaceOnShelf} />
      </Route>
    </div>
  );
}

export default App;
