import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-buttons">
        <button>Take Skincare Quiz</button>
        <button>See Skin Profile</button>
        <button>Check Your Skincare Shelf</button>
      </div>
    </div>
  );
}

export default App;
