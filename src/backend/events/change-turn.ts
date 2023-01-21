import { toast } from "react-hot-toast";
import { toastStyle } from "../../App";
import Game from "../models/game";
import ThisTurn from "../models/this-turn";

export function changeTurn(game: Game, thisTurn: ThisTurn): ThisTurn {
  if (game.gameOn) {
    thisTurn = changingTurn(thisTurn);
  }

  return thisTurn;
}

export function changingTurn(oldTurn: ThisTurn): ThisTurn {
  const thisTurn = new ThisTurn(oldTurn.opponentPlayer, oldTurn.turnPlayer, []);

  const turnPlayer =
    thisTurn.turnPlayer.player === "White" ? "⚪ WHITE ⚪" : "⚫ BLACK ⚫";

  toast.success("Turn is now " + turnPlayer, toastStyle(thisTurn));

  return thisTurn;
}
