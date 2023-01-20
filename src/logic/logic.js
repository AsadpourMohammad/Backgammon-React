import { toast } from "react-hot-toast";
import { toastStyle } from "../App";

export function changingTurn(
  turn,
  whiteOutBar,
  whiteEndBar,
  blackOutBar,
  blackEndBar
) {
  turn = turn === "White" ? "Black" : "White";
  var opponent = turn === "White" ? "Black" : "White";

  var turnOutBar = turn === "White" ? [...whiteOutBar] : [...blackOutBar];
  var turnOutBarIdx = turn === "White" ? "WhiteOutBar" : "BlackOutBar";

  var opponentOutBar =
    opponent === "White" ? [...whiteOutBar] : [...blackOutBar];

  var turnEndBar = turn === "White" ? [...whiteEndBar] : [...blackEndBar];
  var turnEndBarIdx = turn === "White" ? "WhiteEndBar" : "BlackEndBar";

  toast.success("Turn is now: " + turn, toastStyle(turn));

  return [
    turn,
    opponent,
    turnOutBar,
    turnOutBarIdx,
    turnEndBar,
    turnEndBarIdx,
    opponentOutBar,
  ];
}

export function calcMovesMade(
  fromBar,
  toBar,
  turnOutBarIdx,
  turnEndBarIdx,
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

  if (fromBar === turnOutBarIdx) {
    distance = turn === "White" ? 12 - toBar : 24 - toBar;
  }

  if (fromBar === turnEndBarIdx) {
    var distance = turn === "White" ? 24 - toBar : 12 - toBar;
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
