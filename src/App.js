import "./App.css";
import { useState, useRef } from "react";
import { Chess } from "./Chess";
import ChessEngine from "./Engine";
import { useSize } from "./components/hooks";
import { useModal } from "./components/hooks";
import Modal from "./components/Modal";

function App() {
  const [game, setGame] = useState(new Chess());
  const [showGame, setShowGame] = useState(false);
  const containerRef = useRef();
  const { width } = useSize(containerRef);
  const { isShowing, toggle } = useModal();
  console.log(width);

  return (
    <div className="main">
      {!showGame ? (
        <button
          className="myButton"
          onClick={() => {
            toggle();
          }}
        >
          New Game
        </button>
      ) : null}
      <Modal isShowing={isShowing} hide={toggle}>
        <button
          className="myButton"
          onClick={() => {
            setShowGame(true);
            toggle();
          }}
        >
          Play as White
        </button>
      </Modal>
      <div ref={containerRef} className="board">
        {showGame ? <ChessEngine boardWidth={width} game={game} setGame={setGame} /> : null}
      </div>
    </div>
  );
}

export default App;
