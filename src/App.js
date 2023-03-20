import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChessHome from "./components/ChessHome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chess-app" element={<ChessHome />} />
        <Route path="/chess-app/contact" element={<div>Contact </div>} />
      </Routes>
    </Router>
  );
}

export default App;
