import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChessHome from "./components/ChessHome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="https://jblackmore7.github.io/chess-app/" element={<ChessHome />} />
        <Route path="/contact" element={<div>Contact </div>} />
      </Routes>
    </Router>
  );
}

export default App;
