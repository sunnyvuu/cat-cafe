import CatFactCard from "../components/cat-fact-card";
import NavBar from "../components/nav-bar";
import "../style.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="body">
        <CatFactCard />
      </div>
    </div>
  );
}

export default App;
