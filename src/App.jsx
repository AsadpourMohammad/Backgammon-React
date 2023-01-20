import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import { backgammon, initialState, startingGame } from "./logic/start-game";
import { readyToEnd, calcEndingDiceBars } from "./logic/endgame";
import {
  calcPossibleMoves,
  calcGettingOutOfOutMoves,
  checkCantMove,
} from "./logic/calc-moves";
import { rollingDice } from "./logic/roll-dice";
import { calcMovesMade, changingTurn } from "./logic/logic";
import BoardTop from "./components/BoardTop";
import BoardBottom from "./components/BoardBottom";

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
  const [whiteOutBar, setWhiteOutBar] = useState([]);
  const [blackOutBar, setBlackOutBar] = useState([]);
  const [whiteEndBar, setWhiteEndBar] = useState([]);
  const [blackEndBar, setBlackEndBar] = useState([]);
  const rolledDice = useRef(false);
  const dices = useRef([]);
  const moves = useRef(0);
  const maxMoves = useRef(0);
  const [canGoToArray, setCanGoToArray] = useState([]);
  const fromBar = useRef(-1);
  const toBar = useRef(-1);

  window.onload = () => backgammon();

  useEffect(() => {
    turn.current === "White"
      ? setWhiteOutBar(turnOutBar.current)
      : setBlackOutBar(turnOutBar.current);
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
    setWhiteEndBar([]);
    setBlackEndBar([]);
    setWhiteOutBar([]);
    setBlackOutBar([]);
    setToDefault();

    [turn.current, opponent.current] = startingGame();
  }

  function rollDice() {
    [rolledDice.current, dices.current, turn.current, maxMoves.current] =
      rollingDice(
        rolledDice.current,
        dices.current,
        turn.current,
        maxMoves.current
      );

    if (canNoLongerMove()) return;
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
      whiteOutBar,
      whiteEndBar,
      blackOutBar,
      blackEndBar
    );
  }

  function canNoLongerMove() {
    var cantMove = checkCantMove(
      board,
      rolledDice.current,
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

  function checkState(from, to) {
    const currBoard = [...board];

    // Throwing opponent piece out
    if (currBoard[to].includes(opponent.current)) {
      opponentOutBar.current.push(currBoard[to].pop());
    }

    // Returning an out piece
    if (from === turnOutBarIdx.current) {
      currBoard[to].push(turnOutBar.current.pop());

      return;
    }

    // Taking a piece out to end bar
    if (from === turnEndBarIdx.current) {
      turnEndBar.current.push(currBoard[to].pop());

      if (turnEndBar.current.length === 15) {
        gameOver.current = true;
      }

      return;
    }

    // Moving from 'from' to 'to
    currBoard[to].push(currBoard[from].pop());

    setBoard(currBoard);
  }

  function select(index) {
    if (!gameOn) {
      toast.error("Begin a game first!", toastStyle(turn.current));
      return;
    }
    if (!rolledDice.current) {
      toast.error("Roll a dice first!", toastStyle(turn.current));
      return;
    }

    if (canNoLongerMove()) return;

    if (
      rolledDice &&
      fromBar.current === -1 &&
      readyToEnd(board, turn.current) &&
      index === turnEndBarIdx.current
    ) {
      const endingDiceBars = calcEndingDiceBars(
        board,
        turn.current,
        dices.current[0],
        dices.current[1]
      );

      if (endingDiceBars.length !== 0) {
        fromBar.current = index;
        setCanGoToArray(endingDiceBars);
      }
      return;
    } else if (
      rolledDice &&
      fromBar.current === turnEndBarIdx.current &&
      index !== fromBar.current &&
      toBar.current === -1 &&
      canGoToArray.includes(index)
    ) {
      toBar.current = index;
      checkState(fromBar.current, toBar.current);

      if (gameOver.current) {
        if (turn.current === "White") {
          toast(
            `Game Over!
            ⚪ WHITE ⚪ has Won the Game!`,
            toastStyle(turn.current)
          );
        } else {
          toast(
            `Game Over!
            ⚫ BLACK ⚫ has Won the Game!`,
            toastStyle(turn.current)
          );
        }

        setGameOn(false);

        fromBar.current = -1;
        toBar.current = -1;
        setCanGoToArray([]);

        if (canNoLongerMove()) return;

        return;
      }

      [rolledDice.current, dices.current, maxMoves.current] = calcMovesMade(
        fromBar.current,
        toBar.current,
        turnOutBarIdx.current,
        turnEndBarIdx.current,
        turn.current,
        dices.current,
        maxMoves.current,
        changeTurn
      );

      // return to default for next turn
      fromBar.current = -1;
      toBar.current = -1;
      setCanGoToArray([]);

      if (canNoLongerMove()) return;
      return;
    }

    if (
      rolledDice.current &&
      turnOutBar.current.length !== 0 &&
      index === fromBar.current
    ) {
      fromBar.current = -1;
      setCanGoToArray([]);
      return;
    } else if (
      rolledDice.current &&
      turnOutBar.current.length !== 0 &&
      index === turnOutBarIdx.current
    ) {
      fromBar.current = index;

      const canGoTo = calcGettingOutOfOutMoves(
        board,
        turn.current,
        dices.current[0],
        dices.current[1]
      );

      setCanGoToArray(canGoTo);
      return;
    }

    if (
      rolledDice.current &&
      fromBar.current === -1 &&
      board[index].length != 0 &&
      board[index].includes(turn.current)
    ) {
      if (turnOutBar.current.length !== 0 && index !== turnOutBarIdx.current) {
        toast.error(
          "You have to play you out pieces first.",
          toastStyle(turn.current)
        );
        return;
      }

      const canGoTo = calcPossibleMoves(
        index,
        board,
        turn.current,
        opponent.current,
        dices.current[0],
        dices.current[1]
      );

      if (canGoTo.length !== 0) {
        fromBar.current = index;
        setCanGoToArray(canGoTo);
      } else {
        return;
      }
    } else if (
      rolledDice.current &&
      index !== fromBar.current &&
      toBar.current === -1 &&
      (!board[index].includes(opponent.current) ||
        (board[index].includes(opponent.current) &&
          board[index].length === 1)) &&
      canGoToArray.includes(index)
    ) {
      toBar.current = index;
      checkState(fromBar.current, toBar.current);

      [rolledDice.current, dices.current, maxMoves.current] = calcMovesMade(
        fromBar.current,
        toBar.current,
        turnOutBarIdx.current,
        turnEndBarIdx.current,
        turn.current,
        dices.current,
        maxMoves.current,
        changeTurn
      );

      // return to default for next turn
      fromBar.current = -1;
      toBar.current = -1;

      setCanGoToArray([]);
    } else if (rolledDice.current && index === fromBar.current) {
      fromBar.current = -1;
      setCanGoToArray([]);
    }

    console.log(fromBar.current);
    if (canNoLongerMove()) return;
  }

  return (
    <>
      <BoardTop
        select={select}
        board={board}
        canGoToArray={canGoToArray}
        whiteEndBar={whiteEndBar}
        blackEndBar={blackEndBar}
        fromBarIdx={fromBar.current}
      />

      <BoardBottom
        select={select}
        gameOn={gameOn}
        startGame={startGame}
        rollDice={rollDice}
        whiteOutBar={whiteOutBar}
        blackOutBar={blackOutBar}
        fromBarIdx={fromBar.current}
      />
    </>
  );
}

export default App;
