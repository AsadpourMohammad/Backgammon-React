import { toast } from "react-hot-toast";
import { toastStyle } from "../App";
import Game from "./game";
import Player from "./player";

export function changingTurn(
  game: Game,
  turn: Player,
  opponent: Player
): [Player, Player] {
  turn =
    turn.player === game.blackPlayer.player
      ? game.whitePlayer
      : game.blackPlayer;
      
  opponent =
    opponent.player === game.whitePlayer.player
      ? game.blackPlayer
      : game.whitePlayer;

  toast.success("Turn is now: " + turn.player, toastStyle(turn));

  return [turn, opponent];
}

export function calcMovesMade(
  game:Game,
  fromBarIdx: number | string,
  toBarIdx: number,
  turn: Player,
  dices: number[],
  maxMoves: number,
  changeTurn: Function
): [boolean, number[], number] {
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
    changeTurn(game);
    return [false, [], 0];
  } else if (moves === dices[0]) {
    maxMoves -= dices.shift() as number;
  } else if (moves === dices[1]) {
    maxMoves -= dices.pop() as number;
  }

  return [true, dices, maxMoves];
}
