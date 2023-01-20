import { toast } from "react-hot-toast";
import { toastStyle } from "../App";

export function changingTurn(turn, opponent, whitePlayer, blackPlayer) {
  turn = turn === whitePlayer ? blackPlayer : whitePlayer;
  opponent = turn === whitePlayer ? blackPlayer : whitePlayer;

  toast.success("Turn is now: " + turn.player, toastStyle(turn));

  return [turn, opponent];
}

export function calcMovesMade(
  fromBar,
  toBar,
  turn,
  dices,
  maxMoves,
  changeTurn
) {
  var distance = 0;

  if (fromBar <= 11) {
    distance = toBar <= 11 ? Math.abs(fromBar - toBar) : fromBar + (toBar - 11);
  } else {
    distance = toBar > 11 ? Math.abs(fromBar - toBar) : fromBar + (toBar - 11);
  }

  if (fromBar === turn.outBarIdx) {
    distance = turn.player === "White" ? 12 - toBar : 24 - toBar;
  }

  if (fromBar === turn.endBarIdx) {
    var distance = turn.player === "White" ? 24 - toBar : 12 - toBar;
  }

  var moves = distance;

  if (moves === maxMoves) {
    changeTurn();
    return [false, [], 0];
  } else if (moves === dices[0]) {
    maxMoves -= dices.shift();
  } else if (moves === dices[1]) {
    maxMoves -= dices.pop();
  }

  return [true, dices, maxMoves];
}
