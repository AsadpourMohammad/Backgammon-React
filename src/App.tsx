import { useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import { backgammon, startingGame } from "./logic/events/start-game";
import Board from "./components/Board";
import Bar from "./components/Bar";
import Piece from "./components/Piece";
import CollectionBar from "./components//CollectionBar";
import PieceOutBar from "./components/PieceOutBar";
import Game from "./logic/models/game";
import ThisTurn from "./logic/models/this-turn";
import ThisMove from "./logic/models/this-move";
import { selecting } from "./logic/events/select";
import { rollingDice } from "./logic/events/roll-dice";
import { checkCantMove } from "./logic/calculations/calc-possible-moves";

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
  const [thisMove, setThisMove] = useState(new ThisMove());

  window.onload = () => backgammon();

  function startGame() {
    const tempGame = newGame();
    tempGame.gameOn = true;
    setGame(tempGame);

    const tempThisTurn = startingGame(game.clone());
    setThisTurn(tempThisTurn);
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

    var returnedThisTurn = rollingDice(thisTurn.clone());

    if (returnedThisTurn.rolledDice)
      returnedThisTurn = checkCantMove(game, returnedThisTurn.clone());

    setThisTurn(returnedThisTurn);
  }

  function select(index: number | string) {
    const [returnedGame, returnedThisTurn, returnedThisMove] = selecting(
      index,
      game.clone(),
      thisTurn.clone(),
      thisMove.clone()
    );

    setGame(returnedGame);
    setThisTurn(returnedThisTurn);
    setThisMove(returnedThisMove);
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
                (thisMove.canGoTo.includes(barIdx) && "#671010") ||
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
                    (thisMove.fromBarIdx === barIdx &&
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
                (thisMove.fromBarIdx === game.whitePlayer.outBarIdx &&
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
                (thisMove.fromBarIdx === game.blackPlayer.outBarIdx &&
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
