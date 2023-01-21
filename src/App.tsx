import { useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";
import { checkCantMove } from "./backend/calculations/calc-possible-moves";
import BoardTop from "./frontend/BoardTop";
import OutBar from "./frontend/components/OutBar";
import Piece from "./frontend/components/Piece";
import ThisTurn from "./backend/models/this-turn";
import Game from "./backend/models/game";
import ThisMove from "./backend/models/this-move";
import { backgammon, startingGame } from "./backend/events/start-game";
import { rollingDice } from "./backend/events/roll-dice";
import { selecting } from "./backend/events/select";
import BoardBottom from "./frontend/BoardBottom";

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
      <BoardTop game={game} thisMove={thisMove} select={select} />

      <BoardBottom
        game={game}
        thisMove={thisMove}
        rollDice={rollDice}
        startGame={startGame}
        select={select}
      />
    </>
  );
}

export default App;
