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
  const [boardOrientation, setBoardOrientation] = useState("white");
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
          className="playAsWhite"
          onClick={() => {
            setShowGame(true);
            toggle();
          }}
        >
          <img src={require("./images/white-king.png")} alt=""></img>
          <br></br>
          Play as White
        </button>
        <button
          className="playAsBlack"
          onClick={() => {
            setShowGame(true);
            toggle();
            setBoardOrientation("black");
          }}
        >
          <img src={require("./images/black-king.png")} alt=""></img>
          <br></br>
          Play as Black
        </button>
      </Modal>
      <div ref={containerRef} className="board">
        {showGame ? (
          <ChessEngine boardWidth={width} game={game} setGame={setGame} boardOrientation={boardOrientation} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
