import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import { backgammon, startingGame } from "./logic/start-game";
import { celebrateGameEnd } from "./logic/endgame";
import { checkCantMove } from "./logic/calc-moves";
import { rollingDice } from "./logic/roll-dice";
import { changingTurn } from "./logic/logic";
import {
  settingFromBar,
  settingFromEndBar,
  settingFromOutBar,
  settingToBar,
} from "./logic/moving";
import CollectionBar from "./components//CollectionBar";
import Piece from "./components/Piece";
import Board from "./components/Board";
import Bar from "./components/Bar";
import PieceOutBar from "./components/PieceOutBar";
import Game from "./logic/models/game";
import ThisTurn from "./logic/models/this-turn";

export const toastStyle = (thisTurn: ThisTurn) => {
  return {
    style: {
      borderRadius: "10px",
      background: thisTurn.turnPlayer.player,
      color: thisTurn.opponentPlayer.player,
      border:
        thisTurn.turnPlayer.player === "White"
          ? "2px solid black"
          : "2px solid white",
    },
  };
};

function App() {
  const newGame = () => new Game();

  const [game, setGame] = useState(newGame);

  const [thisTurn, setThisTurn] = useState({} as ThisTurn);

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

    const tempTurn = startingGame(game);
    setThisTurn(tempTurn);
  }

  function rollDice() {
    if (thisTurn.rolledDice) {
      toast.error(
        "Play your move before rolling again.\n" +
          `🎲 ${thisTurn.turnPlayer.player}: ${thisTurn.dices} 🎲`,
        toastStyle(thisTurn)
      );

      return;
    }

    const tempThisTurn = rollingDice(thisTurn);

    setThisTurn(tempThisTurn);

    if (tempThisTurn.rolledDice && canNoLongerMove(tempThisTurn)) return;
  }

  function changeTurn(game: Game): void {
    if (game.gameOn) {
      const tempThisTurn = changingTurn(thisTurn);
      setThisTurn(tempThisTurn);
    }
  }

  function canNoLongerMove(thisTurn: ThisTurn) {
    const cantMove = checkCantMove(game, thisTurn, changeTurn);

    return cantMove;
  }

  function checkState(fromIdx: number | string, toIdx: number | string) {
    const tempGame = game;
    const tempThisTurn = thisTurn;

    // Throwing opponent piece out
    if (
      tempGame.board[toIdx as number].includes(
        tempThisTurn.opponentPlayer.player
      )
    ) {
      tempThisTurn.opponentPlayer.outBar.push(
        tempGame.board[toIdx as number].pop() as string
      );

      tempThisTurn.opponentPlayer.player === tempGame.whitePlayer.player
        ? (tempGame.whitePlayer = tempThisTurn.opponentPlayer)
        : (tempGame.blackPlayer = tempThisTurn.opponentPlayer);

      setGame(tempGame);
    }

    // Returning an out piece
    if (fromIdx === tempThisTurn.turnPlayer.outBarIdx) {
      tempGame.board[toIdx as number].push(
        tempThisTurn.turnPlayer.outBar.pop() as string
      );

      tempThisTurn.turnPlayer.player === tempGame.whitePlayer.player
        ? (tempGame.whitePlayer = tempThisTurn.turnPlayer)
        : (tempGame.blackPlayer = tempThisTurn.turnPlayer);

      setGame(tempGame);
      return;
    }

    // Taking a piece out to end bar
    if (fromIdx === tempThisTurn.turnPlayer.endBarIdx) {
      tempThisTurn.turnPlayer.endBar.push(
        tempGame.board[toIdx as number].pop() as string
      );

      tempThisTurn.turnPlayer.player === tempGame.whitePlayer.player
        ? (tempGame.whitePlayer = tempThisTurn.turnPlayer)
        : (tempGame.blackPlayer = tempThisTurn.turnPlayer);

      if (tempThisTurn.turnPlayer.endBar.length === 15) {
        tempGame.gameOn = false;
        setGame(tempGame);
        celebrateGameEnd(tempThisTurn);
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
    const tempThisTurn = thisTurn;

    function returnToDefault() {
      fromBarIdx.current = -1;
      toBarIdx.current = -1;
      canGoToArray.current = [];
      setCanGoTo(canGoToArray.current);
    }

    if (!tempGame.gameOn) {
      toast.error("Begin a Game first!", toastStyle(tempThisTurn));
      return;
    }

    if (!tempThisTurn.rolledDice) {
      toast.error("Roll a dice first!", toastStyle(tempThisTurn));
      return;
    }

    if (
      tempThisTurn.turnPlayer.outBar.length !== 0 &&
      fromBarIdx.current !== tempThisTurn.turnPlayer.outBarIdx &&
      index !== tempThisTurn.turnPlayer.outBarIdx
    ) {
      toast.error(
        "You have to play you out pieces first.",
        toastStyle(tempThisTurn)
      );
      return;
    }

    // Deselecting 'from'
    if (index === fromBarIdx.current) {
      returnToDefault();
      return;
    }

    // Setting 'from' End Bar
    if (
      fromBarIdx.current === -1 &&
      index === tempThisTurn.turnPlayer.endBarIdx
    ) {
      [fromBarIdx.current, canGoToArray.current] = settingFromEndBar(
        tempGame,
        index,
        fromBarIdx.current,
        tempThisTurn
      );

      setCanGoTo(canGoToArray.current);
      return;
    }

    // Setting 'from' Out Bar
    if (
      tempThisTurn.turnPlayer.outBar.length !== 0 &&
      index === tempThisTurn.turnPlayer.outBarIdx
    ) {
      [fromBarIdx.current, canGoToArray.current] = settingFromOutBar(
        tempGame,
        index,
        tempThisTurn
      );

      setCanGoTo(canGoToArray.current);
      return;
    }

    // Bar
    if (
      fromBarIdx.current === -1 &&
      tempGame.board[index as number].includes(tempThisTurn.turnPlayer.player)
    ) {
      [fromBarIdx.current, canGoToArray.current] = settingFromBar(
        tempGame,
        index as number,
        tempThisTurn
      );

      setCanGoTo(canGoToArray.current);
    } else if (
      toBarIdx.current === -1 &&
      canGoToArray.current.includes(index as number)
    ) {
      const returnedThisTurn = settingToBar(
        index as number,
        fromBarIdx.current,
        tempThisTurn,
        checkState
      );
      setThisTurn(returnedThisTurn);

      returnToDefault();

      if (returnedThisTurn.maxMoves === 0) {
        changeTurn(tempGame);
        return;
      }

      if (returnedThisTurn.rolledDice && canNoLongerMove(returnedThisTurn)) {
        return;
      }
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
