import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import { backgammon, initialState, startingGame } from "./logic/start-game";
import { celebrateGameEnd } from "./logic/endgame";
import { checkCantMove } from "./logic/calc-moves";
import { rollingDice } from "./logic/roll-dice";
import { changingTurn } from "./logic/logic";
import BoardTop from "./components/BoardTop";
import BoardBottom from "./components/BoardBottom";
import {
  settingFromBar,
  settingFromEndBar,
  settingFromOutBar,
  settingToBar,
} from "./logic/move";
import Player from "./logic/player";


export const toastStyle = (turn) => {
  return {
    style: {
      borderRadius: "10px",
      background: turn.player,
      color: turn.player == "White" ? "Black" : "White",
      border: turn.player === "White" ? "2px solid black" : "2px solid white",
    },
  };
};

export const BoardContext = createContext();

function App() {
  const [gameOn, setGameOn] = useState(false);
  const gameOver = useRef(false);
  const [board, setBoard] = useState(initialState());

  const [turn, setTurn] = useState(new Player("", "", ""));
  const [opponent, setOpponent] = useState(new Player("", "", ""));

  const [whitePlayer, setWhitePlayer] = useState(
    new Player("White", "WhiteOutBar", "WhiteEndBar")
  );
  const [blackPlayer, setBlackPlayer] = useState(
    new Player("Black", "BlackOutBar", "BlackEndBar")
  );

  const rolledDice = useRef(false);
  const dices = useRef([]);
  const moves = useRef(0);
  const maxMoves = useRef(0);

  const canGoToArray = useRef([]);
  const [canGoTo, setCanGoTo] = useState([]);

  const fromBarIdx = useRef(-1);
  const toBarIdx = useRef(-1);

  window.onload = () => backgammon();

  useEffect(() => {
    if (gameOver.current) {
      celebrateGameEnd(turn.current);
      setGameOn(false);
    }
  }, [gameOver.current]);

  useEffect(() => {
    turn === whitePlayer
      ? setWhitePlayer(whitePlayer)
      : setBlackPlayer(blackPlayer);
  }, [turn.outBar]);

  useEffect(() => {
    opponent === whitePlayer
      ? setWhitePlayer(whitePlayer)
      : setBlackPlayer(blackPlayer);
  }, [opponent.outBar]);

  useEffect(() => {
    turn === whitePlayer
      ? setWhitePlayer(whitePlayer)
      : setBlackPlayer(blackPlayer);
  }, [turn.endBar]);

  function startGame() {
    setGameOn(true);
    gameOver.current = false;
    setBoard(initialState());
    setToDefault();

    setWhitePlayer(new Player("White", "WhiteOutBar", "WhiteEndBar"));
    setBlackPlayer(new Player("Black", "BlackOutBar", "BlackEndBar"));

    const [theTurn, theOpponent] = startingGame(whitePlayer, blackPlayer);
    setTurn(theTurn);
    setOpponent(theOpponent);
  }

  function rollDice() {
    if (rolledDice.current) {
      toast.error(
        "Play your move before rolling again.\n" +
          `🎲 ${turn.player}: ${dices.current} 🎲`,
        toastStyle(turn)
      );

      return;
    }

    var theTurn;

    [rolledDice.current, dices.current, theTurn, maxMoves.current] =
      rollingDice(turn);

    setTurn(theTurn);

    if (rolledDice.current && canNoLongerMove()) return;
  }

  function setToDefault() {
    rolledDice.current = false;
    dices.current = [];
    moves.current = 0;
    maxMoves.current = 0;
  }

  function changeTurn() {
    const [theTurn, theOpponent] = changingTurn(
      turn,
      opponent,
      whitePlayer,
      blackPlayer
    );

    setTurn(theTurn);
    setOpponent(theOpponent);
  }

  function canNoLongerMove() {
    var cantMove = checkCantMove(
      board,
      dices.current,
      turn,
      opponent,
      whitePlayer,
      blackPlayer,
      changeTurn,
      setToDefault
    );

    return cantMove;
  }

  function checkState(fromIdx, toIdx) {
    const currBoard = [...board];

    // Throwing opponent piece out
    if (currBoard[toIdx].includes(opponent.player)) {
      opponent.outBar.push(currBoard[toIdx].pop());
    }

    // Returning an out piece
    if (fromIdx === turn.outBarIdx) {
      currBoard[toIdx].push(turn.outBar.pop());
      return;
    }

    // Taking a piece out to end bar
    if (fromIdx === turn.endBar) {
      turn.endBar.push(currBoard[toIdx].pop());

      if (turn.endBar.length === 15) {
        gameOver.current = true;
      }

      return;
    }

    // Moving from 'from' to 'to
    currBoard[toIdx].push(currBoard[fromIdx].pop());

    setBoard(currBoard);
  }

  function select(index) {
    function returnToDefault() {
      fromBarIdx.current = -1;
      toBarIdx.current = -1;
      canGoToArray.current = [];
      setCanGoTo(canGoToArray.current);
    }

    if (!gameOn) {
      toast.error("Begin a Game first!", toastStyle(turn));
      return;
    }

    if (!rolledDice.current) {
      toast.error("Roll a dice first!", toastStyle(turn));
      return;
    }

    if (index === fromBarIdx.current) {
      returnToDefault();
      return;
    }

    if (
      turn.outBar.length !== 0 &&
      fromBarIdx.current !== turn.outBarIdx &&
      index !== turn.outBarIdx
    ) {
      toast.error("You have to play you out pieces first.", toastStyle(turn));
      return;
    }

    // End Bar
    if (fromBarIdx.current === -1 && index === turn.endBarIdx) {
      [fromBarIdx.current, canGoToArray.current] = settingFromEndBar(
        index,
        fromBarIdx.current,
        dices.current,
        board,
        turn
      );
      setCanGoTo(canGoToArray.current);
      return;
    } else if (
      canGoToArray.current.includes(index) &&
      fromBarIdx.current === turn.endBarIdx
    ) {
      [rolledDice.current, dices.current, maxMoves.current] = settingToBar(
        index,
        fromBarIdx.current,
        turn,
        dices.current,
        maxMoves.current,
        checkState,
        changeTurn
      );

      returnToDefault();
      return;
    }

    // Out Bar
    if (turn.outBar.length !== 0 && index === turn.outBarIdx) {
      [fromBarIdx.current, canGoToArray.current] = settingFromOutBar(
        index,
        board,
        turn,
        dices.current
      );

      setCanGoTo(canGoToArray.current);
      return;
    }

    // Bar
    if (fromBarIdx.current === -1 && board[index].includes(turn.player)) {
      [fromBarIdx.current, canGoToArray.current] = settingFromBar(
        index,
        board,
        turn,
        opponent,
        dices.current
      );

      setCanGoTo(canGoToArray.current);
    } else if (
      toBarIdx.current === -1 &&
      canGoToArray.current.includes(index)
    ) {
      [rolledDice.current, dices.current, maxMoves.current] = settingToBar(
        index,
        fromBarIdx.current,
        turn,
        dices.current,
        maxMoves.current,
        checkState,
        changeTurn
      );

      returnToDefault();
    }

    if (rolledDice.current && canNoLongerMove()) {
      return;
    }
  }

  return (
    <>
      <BoardContext.Provider
        value={{
          select,
          board,
          canGoToArray: canGoTo,
          whitePlayer,
          blackPlayer,
          fromBarIdx: fromBarIdx.current,
        }}
      >
        <BoardTop />
      </BoardContext.Provider>

      <BoardBottom
        select={select}
        gameOn={gameOn}
        startGame={startGame}
        rollDice={rollDice}
        whitePlayer={whitePlayer}
        blackPlayer={blackPlayer}
        fromBarIdx={fromBarIdx.current}
      />
    </>
  );
}

export default App;
