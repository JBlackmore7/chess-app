import "./App.css";
import { useState, useRef } from "react";
import { Chess } from "./Chess";
import ChessEngine from "./Engine";
import { useSize } from "./hooks";

function App() {
  const [game, setGame] = useState(new Chess());
  const [showGame, setShowGame] = useState(false);
  const containerRef = useRef();
  const { width } = useSize(containerRef);
  console.log(width);

  return (
    <div className="main">
      {!showGame ? (
        <button
          className="myButton"
          onClick={() => {
            setShowGame(true);
          }}
        >
          New Game
        </button>
      ) : null}
      <div ref={containerRef} className="board">
        {showGame ? <ChessEngine boardWidth={width} game={game} setGame={setGame} /> : null}
      </div>
    </div>
  );
}

export default App;
