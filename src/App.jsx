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
      background: turn === "White" ? "White" : "Black",
      color: turn === "White" ? "black" : "white",
      border: turn === "White" ? "2px solid black" : "2px solid white",
    },
  };
};

export const BoardContext = createContext();

function App() {
  const [gameOn, setGameOn] = useState(false);
  const gameOver = useRef(false);
  const [board, setBoard] = useState(initialState());
  const turn = useRef("");
  const opponent = useRef("");
  const turnOutBar = useRef([]);
  const turnOutBarIdx = useRef("");
  const opponentOutBar = useRef([]);
  const turnEndBar = useRef([]);
  const turnEndBarIdx = useRef("");

  const [whitePlayer, setWhitePlayer] = useState();

  // const [whiteOutBar, setWhiteOutBar] = useState([]);
  const [blackOutBar, setBlackOutBar] = useState([]);
  const [whiteEndBar, setWhiteEndBar] = useState([]);
  const [blackEndBar, setBlackEndBar] = useState([]);
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
    
    turn.current === "White"
      ? whitePlayer.setPlayerOutBar(turnOutBar.current)
      : setBlackOutBar(turnOutBar.current);
      
    setWhitePlayer(whitePlayer);

  }, [turnOutBar.current]);

  useEffect(() => {
    opponent.current === "White"
      ? setWhiteOutBar(opponentOutBar.current)
      : setBlackOutBar(opponentOutBar.current);
  }, [opponentOutBar.current]);

  useEffect(() => {
    turn.current === "White"
      ? setWhiteEndBar(turnEndBar.current)
      : setBlackEndBar(turnEndBar.current);
  }, [turnEndBar.current]);

  function startGame() {
    setGameOn(true);
    gameOver.current = false;
    setBoard(initialState());
    // setWhiteEndBar([]);
    setBlackEndBar([]);
    // setWhiteOutBar([]);
    setBlackOutBar([]);
    setToDefault();

    setWhitePlayer(new Player("White", "WhiteOutBar", "WhiteEndBar"));

    [turn.current, opponent.current] = startingGame();
  }

  function rollDice() {
    if (rolledDice.current) {
      toast.error(
        "Play your move before rolling again.\n" +
          `🎲 ${turn.current}: ${dices.current} 🎲`,
        toastStyle(turn.current)
      );

      return;
    }

    [rolledDice.current, dices.current, turn.current, maxMoves.current] =
      rollingDice(turn.current);

    if (rolledDice.current && canNoLongerMove()) return;
  }

  function setToDefault() {
    rolledDice.current = false;
    dices.current = [];
    moves.current = 0;
    maxMoves.current = 0;
  }

  function changeTurn() {
    [
      turn.current,
      opponent.current,
      turnOutBar.current,
      turnOutBarIdx.current,
      turnEndBar.current,
      turnEndBarIdx.current,
      opponentOutBar.current,
    ] = changingTurn(
      turn.current,
      whitePlayer,
      whiteEndBar,
      blackOutBar,
      blackEndBar
    );
  }

  function canNoLongerMove() {
    var cantMove = checkCantMove(
      board,
      dices.current,
      turn.current,
      opponent.current,
      whiteOutBar,
      blackOutBar,
      changeTurn,
      setToDefault
    );

    return cantMove;
  }

  function checkState(fromIdx, toIdx) {
    const currBoard = [...board];

    // Throwing opponent piece out
    if (currBoard[toIdx].includes(opponent.current)) {
      opponentOutBar.current.push(currBoard[toIdx].pop());
    }

    // Returning an out piece
    if (fromIdx === turnOutBarIdx.current) {
      currBoard[toIdx].push(turnOutBar.current.pop());
      return;
    }

    // Taking a piece out to end bar
    if (fromIdx === turnEndBarIdx.current) {
      turnEndBar.current.push(currBoard[toIdx].pop());

      if (turnEndBar.current.length === 15) {
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
      toast.error("Begin a Game first!", toastStyle(turn.current));
      return;
    }

    if (!rolledDice.current) {
      toast.error("Roll a dice first!", toastStyle(turn.current));
      return;
    }

    if (index === fromBarIdx.current) {
      returnToDefault();
      return;
    }

    if (
      turnOutBar.current.length !== 0 &&
      fromBarIdx.current !== turnOutBarIdx.current &&
      index !== turnOutBarIdx.current
    ) {
      toast.error(
        "You have to play you out pieces first.",
        toastStyle(turn.current)
      );
      return;
    }

    // End Bar
    if (fromBarIdx.current === -1 && index === turnEndBarIdx.current) {
      [fromBarIdx.current, canGoToArray.current] = settingFromEndBar(
        index,
        fromBarIdx.current,
        dices.current,
        board,
        turn.current
      );
      setCanGoTo(canGoToArray.current);
      return;
    } else if (
      canGoToArray.current.includes(index) &&
      fromBarIdx.current === turnEndBarIdx.current
    ) {
      [rolledDice.current, dices.current, maxMoves.current] = settingToBar(
        index,
        fromBarIdx.current,
        turn.current,
        turnOutBarIdx.current,
        turnEndBarIdx.current,
        dices.current,
        maxMoves.current,
        checkState,
        changeTurn
      );

      returnToDefault();
      return;
    }

    // Out Bar
    if (turnOutBar.current.length !== 0 && index === turnOutBarIdx.current) {
      [fromBarIdx.current, canGoToArray.current] = settingFromOutBar(
        index,
        board,
        turn.current,
        dices.current
      );

      setCanGoTo(canGoToArray.current);
      return;
    }

    // Bar
    if (fromBarIdx.current === -1 && board[index].includes(turn.current)) {
      [fromBarIdx.current, canGoToArray.current] = settingFromBar(
        index,
        board,
        turn.current,
        opponent.current,
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
        turn.current,
        turnOutBarIdx.current,
        turnEndBarIdx.current,
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
          whiteEndBar,
          blackEndBar,
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
        whiteOutBar={whiteOutBar}
        blackOutBar={blackOutBar}
        fromBarIdx={fromBarIdx.current}
      />
    </>
  );
}

export default App;
