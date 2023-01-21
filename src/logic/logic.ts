import { toast } from "react-hot-toast";
import { toastStyle } from "../App";
import Player from "./player";

export function changingTurn(
  turn: Player,
  opponent: Player,
  whitePlayer: Player,
  blackPlayer: Player
) {
  turn = turn === whitePlayer ? blackPlayer : whitePlayer;
  opponent = turn === whitePlayer ? blackPlayer : whitePlayer;

  toast.success("Turn is now: " + turn.player, toastStyle(turn));

  return [turn, opponent];
}


export function calcMovesMade(
  fromBarIdx: number | string,
  toBarIdx: number,
  turn: Player,
  dices: number[],
  maxMoves: number,
  changeTurn: Function
) {
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
    if (fromBarIdx === turn.outBarIdx) {
      distance = turn.player === "White" ? 12 - toBarIdx : 24 - toBarIdx;
    }

    if (fromBarIdx === turn.endBarIdx) {
      var distance = turn.player === "White" ? 24 - toBarIdx : 12 - toBarIdx;
    }
  }

  var moves = distance;

  if (moves === maxMoves) {
    changeTurn();
    return [false, [], 0];
  } else if (moves === dices[0]) {
    maxMoves -= dices.shift() as number;
  } else if (moves === dices[1]) {
    maxMoves -= dices.pop() as number;
  }

  return [true, dices, maxMoves];
}
