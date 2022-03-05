import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shelf from "./Components/Shelf/Shelf";
import Catalog from "./Components/Catalog/Catalog";
import ShelfPage from "./Components/ShelfPage/ShelfPage";
import Quiz from "./Components/Quiz/Quiz";
import quizQuestions from "./Utils/quizQuestions";
import LandingPage from "./Components/LandingPage/LandingPage";
import Profile from "./Components/Profile/Profile";
import "./index.css";
import { Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "./apiCalls";

const chooseRandom = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
};

const filterBySkinProfile = (products, skinProfile) =>
  products
    .filter((product) => product.skinTypes.includes(skinProfile.skinType))
    .filter((product) => product.benefits.includes(skinProfile.skinConcerns));

const buildRoutine = (steps, productsForUser, allProducts) => {
  return steps.map((productType) => {
    const hasProductType = (product) =>
      product.productType.toLowerCase() === productType;
    let productsOfType = productsForUser.filter(hasProductType);
    if (productsOfType.length === 0) {
      productsOfType = allProducts.filter(hasProductType);
    }
    return chooseRandom(productsOfType);
  });
};

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [quizResult, setQuizResult] = useState(null);
  const [shelfState, setShelfState] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getAllProducts().then((products) => setAllProducts(products));
  }, []);

  const onQuizComplete = (skinProfile) => {
    setQuizResult(skinProfile);
    history.push("/");
    const productsForUser = filterBySkinProfile(allProducts, skinProfile);
    const routine = buildRoutine(
      skinProfile.steps,
      productsForUser,
      allProducts
    );
    setShelfState(routine);
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
        <ShelfPage
          userProducts={shelfState}
          allProducts={allProducts}
          onProductClick={replaceOnShelf}
        />
      </Route>
    </div>
  );
}

export default App;
