import "./App.css";
import { useState } from "react";
import { Chess } from "./Chess";
import { Chessboard } from "react-chessboard";
import ChessEngine from "./Engine";

function App() {
  const [game, setGame] = useState(new Chess());

  console.log(game.pgn());
  return <ChessEngine game={game} setGame={setGame} />;
}

export default App;
