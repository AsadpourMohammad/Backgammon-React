import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import { backgammon, initialState, startingGame } from "./logic/start-game";
import { celebrateGameEnd } from "./logic/endgame";
import { checkCantMove } from "./logic/calc-moves";
import { rollingDice } from "./logic/roll-dice";
import { changingTurn } from "./logic/logic";
import {
  settingFromBar,
  settingFromEndBar,
  settingFromOutBar,
  settingToBar,
} from "./logic/move";
import Player from "./logic/player";
import CollectionBar from "./components//CollectionBar";
import Piece from "./components/Piece";
import Board from "./components/Board";
import Bar from "./components/Bar";
import PieceOutBar from "./components/PieceOutBar";
import Game from "./logic/game";

export const toastStyle = (turn: Player) => {
  return {
    style: {
      borderRadius: "10px",
      background: turn.player,
      color: turn.player == "White" ? "Black" : "White",
      border: turn.player === "White" ? "2px solid black" : "2px solid white",
    },
  };
};

function App() {
  const newGame = () => new Game();

  const [game, setGame] = useState(newGame);

  const [turn, setTurn] = useState<Player>({} as Player);
  const [opponent, setOpponent] = useState<Player>({} as Player);

  const rolledDice = useRef<boolean>(false);
  const dices = useRef<number[]>([]);
  const moves = useRef(0);
  const maxMoves = useRef(0);

  const canGoToArray = useRef<number[]>([]);
  const [canGoTo, setCanGoTo] = useState<number[]>([]);

  const fromBarIdx = useRef<number | string>(-1);
  const toBarIdx = useRef<number | string>(-1);

  window.onload = () => {
    backgammon();
  };

  function startGame() {
    const tempGame = newGame();
    tempGame.gameOn = true;
    setGame(tempGame);
    
    setToDefault();

    const [theTurn, theOpponent] = startingGame(game);

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

    var theTurn: Player;

    [theTurn, rolledDice.current, dices.current, maxMoves.current] =
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

  function changeTurn(game: Game) {
    if (game.gameOn) {
      const [theTurn, theOpponent] = changingTurn(game, turn, opponent);

      setTurn(theTurn);
      setOpponent(theOpponent);
    }
  }

  function canNoLongerMove() {
    const cantMove = checkCantMove(
      game,
      turn,
      opponent,
      dices.current,
      changeTurn,
      setToDefault
    );

    return cantMove;
  }

  function checkState(fromIdx: number | string, toIdx: number | string) {
    const tempGame = game;
    const [tempTurn, tempOpponent] = [turn, opponent];

    // Throwing opponent piece out
    if (tempGame.board[toIdx as number].includes(tempOpponent.player)) {
      tempOpponent.outBar.push(tempGame.board[toIdx as number].pop() as string);

      tempOpponent.player === tempGame.whitePlayer.player
        ? (tempGame.whitePlayer = tempOpponent)
        : (tempGame.blackPlayer = tempOpponent);

      setGame(tempGame);
    }

    // Returning an out piece
    if (fromIdx === turn.outBarIdx) {
      tempGame.board[toIdx as number].push(tempTurn.outBar.pop() as string);

      tempTurn.player === tempGame.whitePlayer.player
        ? (tempGame.whitePlayer = tempTurn)
        : (tempGame.blackPlayer = tempTurn);

      setGame(tempGame);
      return;
    }

    // Taking a piece out to end bar
    if (fromIdx === tempTurn.endBarIdx) {
      tempTurn.endBar.push(tempGame.board[toIdx as number].pop() as string);

      tempTurn.player === tempGame.whitePlayer.player
        ? (tempGame.whitePlayer = tempTurn)
        : (tempGame.blackPlayer = tempTurn);

      if (tempTurn.endBar.length === 15) {
        tempGame.gameOn = false;
        setGame(tempGame);
        celebrateGameEnd(turn);
      }

      setGame(tempGame);
      return;
    }

    // Moving from 'from' to 'to'
    tempGame.board[toIdx as number].push(
      tempGame.board[fromIdx as number].pop() as string
    );

    setGame(tempGame);
  }

  function select(index: number | string) {
    const tempGame = game;

    function returnToDefault() {
      fromBarIdx.current = -1;
      toBarIdx.current = -1;
      canGoToArray.current = [];
      setCanGoTo(canGoToArray.current);
    }

    if (!tempGame.gameOn) {
      toast.error("Begin a Game first!", toastStyle(turn));
      return;
    }

    if (!rolledDice.current) {
      toast.error("Roll a dice first!", toastStyle(turn));
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

    // Deselecting 'from'
    if (index === fromBarIdx.current) {
      returnToDefault();
      return;
    }

    // Setting 'from' End Bar
    if (fromBarIdx.current === -1 && index === turn.endBarIdx) {
      [fromBarIdx.current, canGoToArray.current] = settingFromEndBar(
        tempGame,
        index,
        fromBarIdx.current,
        dices.current,
        turn
      );

      setCanGoTo(canGoToArray.current);
      return;
    }

    // Setting 'from' Out Bar
    if (turn.outBar.length !== 0 && index === turn.outBarIdx) {
      [fromBarIdx.current, canGoToArray.current] = settingFromOutBar(
        tempGame,
        index,
        turn,
        opponent,
        dices.current
      );

      setCanGoTo(canGoToArray.current);
      return;
    }

    // Bar
    if (
      fromBarIdx.current === -1 &&
      tempGame.board[index as number].includes(turn.player)
    ) {
      [fromBarIdx.current, canGoToArray.current] = settingFromBar(
        tempGame,
        index as number,
        turn,
        opponent,
        dices.current
      );

      setCanGoTo(canGoToArray.current);
    } else if (
      toBarIdx.current === -1 &&
      canGoToArray.current.includes(index as number)
    ) {
      [rolledDice.current, dices.current, maxMoves.current] = settingToBar(
        tempGame,
        index as number,
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
      <div className="board-top">
        <CollectionBar
          onClick={() => select(game.whitePlayer.endBarIdx)}
          key={game.whitePlayer.endBarIdx}
          fill={"#e0ded7"}
        >
          {game.whitePlayer.endBar.map((piece, pieceIdx) => (
            <Piece
              key={`${game.whitePlayer.endBarIdx}-${pieceIdx}`}
              border={"1px solid black"}
              color={piece}
            />
          ))}
        </CollectionBar>

        <Board>
          {game.board.map((bar, barIdx) => (
            <Bar
              isTopRow={barIdx > 11}
              onClick={() => select(barIdx)}
              key={barIdx}
              fill={
                (canGoTo.includes(barIdx) && "#671010") ||
                (barIdx % 2 === 0 && barIdx > 11 && "#232937") ||
                (barIdx % 2 !== 0 && barIdx <= 11 && "#232937") ||
                (barIdx % 2 === 0 && barIdx <= 11 && "#e0ded7") ||
                (barIdx % 2 !== 0 && barIdx > 11 && "#e0ded7") ||
                "red"
              }
            >
              {bar.map((piece, pieceIdx) => (
                <Piece
                  key={`${barIdx}-${pieceIdx}`}
                  border={
                    (fromBarIdx.current === barIdx &&
                      ((pieceIdx === 0 && barIdx > 11) ||
                        (pieceIdx === bar.length - 1 && barIdx <= 11)) &&
                      "2px solid #671010") ||
                    (piece !== "White"
                      ? "1px solid #e9e2d6"
                      : "1px solid black")
                  }
                  color={piece}
                />
              ))}
            </Bar>
          ))}
        </Board>

        <CollectionBar
          onClick={() => select(game.blackPlayer.endBarIdx)}
          key={game.blackPlayer.endBarIdx}
          fill={"#232937"}
        >
          {game.blackPlayer.endBar.map((piece, pieceIdx) => (
            <Piece
              key={`${game.blackPlayer.endBarIdx}-${pieceIdx}`}
              border={"1px solid #e9e2d6"}
              color={piece}
            />
          ))}
        </CollectionBar>
      </div>

      <div className="board-bottom">
        <PieceOutBar
          isLeft={true}
          onClick={() => select(game.whitePlayer.outBarIdx)}
          key={game.whitePlayer.outBarIdx}
          fill={"#e0ded7"}
        >
          {game.whitePlayer.outBar.map((piece, pieceIdx) => (
            <Piece
              key={`${game.whitePlayer.outBarIdx}-${pieceIdx}`}
              border={
                (fromBarIdx.current === game.whitePlayer.outBarIdx &&
                  pieceIdx === game.whitePlayer.outBar.length - 1 &&
                  "3px solid #671010") ||
                "1px solid black"
              }
              color={piece}
            />
          ))}
        </PieceOutBar>

        {console.log(game.gameOn)}
        {game.gameOn ? (
          <button onClick={rollDice}>🎲 roll Dice 🎲</button>
        ) : (
          <button onClick={startGame}>⚪ Begin Game ⚫</button>
        )}

        <PieceOutBar
          isLeft={false}
          onClick={() => select(game.blackPlayer.outBarIdx)}
          key={game.blackPlayer.outBarIdx}
          fill={"#232937"}
        >
          {game.blackPlayer.outBar.map((piece, pieceIdx) => (
            <Piece
              key={`${game.blackPlayer.outBarIdx}-${pieceIdx}`}
              border={
                (fromBarIdx.current === game.blackPlayer.outBarIdx &&
                  pieceIdx === 0 &&
                  "3px solid #671010") ||
                "1px solid #e9e2d6"
              }
              color={piece}
            />
          ))}
        </PieceOutBar>
      </div>
    </>
  );
}

export default App;
