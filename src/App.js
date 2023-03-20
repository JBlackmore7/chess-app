import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ChessHome from "./components/ChessHome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChessHome />} />
        <Route path="/contact" element={<div>Contact </div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
