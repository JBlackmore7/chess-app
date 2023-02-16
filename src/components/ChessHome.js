import "../App.css";
import styles from "./ChessHome.module.css";
import { useState, useRef } from "react";
import { Chess } from "../Chess";
import ChessEngine from "../Engine";
import { useSize } from "./hooks";
import { useModal } from "./hooks";
import Modal from "./Modal";

function ChessHome() {
  const [game, setGame] = useState(new Chess());
  const [showGame, setShowGame] = useState(false);
  const containerRef = useRef();
  // const { undo } = takeback();
  const { width } = useSize(containerRef);
  const { isShowing, toggle } = useModal();
  const [boardOrientation, setBoardOrientation] = useState("white");
  const [gameEndModal, setGameEndModal] = useState(null);

  function takeBack() {
    const gameCopy = { ...game };
    gameCopy.undo();
    setGame(gameCopy);
  }

  return (
    <div className={!showGame ? styles.mainEnd : styles.mainCenter}>
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
            setBoardOrientation("white");
            setGame(new Chess());
          }}
        >
          <img src={require("../images/white-king.png")} alt=""></img>
          <br></br>
          Play as White
        </button>
        <button
          className="playAsBlack"
          onClick={() => {
            setShowGame(true);
            toggle();
            setBoardOrientation("black");
            setGame(new Chess());
          }}
        >
          <img src={require("../images/black-king.png")} alt=""></img>
          <br></br>
          Play as Black
        </button>
      </Modal>
      {gameEndModal}
      {showGame ? (
        <>
          <div ref={containerRef} className="board">
            <ChessEngine
              boardWidth={width}
              game={game}
              setGame={setGame}
              boardOrientation={boardOrientation}
              setGameEndModal={setGameEndModal}
            />
          </div>
          <button className="undo" onClick={takeBack}>
            Undo
          </button>
          <button className="newGame" onClick={toggle}>
            New Game
          </button>
        </>
      ) : null}
    </div>
  );
}

export default ChessHome;
