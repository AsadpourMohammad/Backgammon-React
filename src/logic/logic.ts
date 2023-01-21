import { toast } from "react-hot-toast";
import { toastStyle } from "../App";
import Game from "./models/game";
import ThisTurn from "./models/this-turn";

export function changingTurn(oldTurn: ThisTurn): ThisTurn {
  const thisTurn = new ThisTurn(oldTurn.opponentPlayer, oldTurn.turnPlayer, []);

  const turnPlayer =
    thisTurn.turnPlayer.player === "White" ? "⚪ WHITE ⚪" : "⚫ BLACK ⚫";

  toast.success("Turn is now " + turnPlayer, toastStyle(thisTurn));

  return thisTurn;
}

export function calcMovesMade(
  fromBarIdx: number | string,
  toBarIdx: number,
  thisTurn: ThisTurn
): ThisTurn {
  var distance = 0;

  if (typeof fromBarIdx === "number") {
    if (fromBarIdx <= 11) {
      distance =
        toBarIdx <= 11
          ? Math.abs(fromBarIdx - toBarIdx)
          : fromBarIdx + (toBarIdx - 11);
    } else {
      distance =
        toBarIdx > 11
          ? Math.abs(fromBarIdx - toBarIdx)
          : fromBarIdx + (toBarIdx - 11);
    }
  } else {
    if (fromBarIdx === thisTurn.turnPlayer.outBarIdx) {
      distance =
        thisTurn.turnPlayer.player === "White" ? 12 - toBarIdx : 24 - toBarIdx;
    }

    if (fromBarIdx === thisTurn.turnPlayer.endBarIdx) {
      var distance =
        thisTurn.turnPlayer.player === "White" ? 24 - toBarIdx : 12 - toBarIdx;
    }
  }

  thisTurn.moves = distance;

  if (thisTurn.moves === thisTurn.dices[0]) {
    thisTurn.maxMoves -= thisTurn.dices.shift() as number;
  } else if (thisTurn.moves === thisTurn.dices[1]) {
    thisTurn.maxMoves -= thisTurn.dices.pop() as number;
  }

  return thisTurn;
}
