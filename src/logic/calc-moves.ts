import { toast } from "react-hot-toast";
import { toastStyle } from "../App";
import { calcEndingDiceBars } from "./endgame";
import Game from "./game";
import Player from "./player";

export function calcPossibleMoves(
  game: Game,
  fromBarIdx: number,
  turn: Player,
  opponent: Player,
  dices: number[]
): number[] {
  var [firstDice, secondDice] = dices;

  if (firstDice === null) firstDice = 0;
  if (secondDice === null) secondDice = 0;

  const canGoTo: number[] = [];

  for (let i = 0; i < game.board.length; i++) {
    var toBar = game.board[i];
    var toBarIdx = i;

    if (toBar.includes(opponent.player) && toBar.length > 1) {
      continue;
    }

    if (turn.player === "White") {
      if (
        (fromBarIdx <= 11 && toBarIdx <= 11 && toBarIdx >= fromBarIdx) ||
        (fromBarIdx > 11 && toBarIdx > 11 && toBarIdx <= fromBarIdx) ||
        (fromBarIdx > 11 && toBarIdx < 11)
      ) {
        continue;
      }
    } else {
      if (
        (fromBarIdx <= 11 && toBarIdx <= 11 && toBarIdx <= fromBarIdx) ||
        (fromBarIdx > 11 && toBarIdx > 11 && toBarIdx >= fromBarIdx) ||
        (fromBarIdx <= 11 && toBarIdx > 11)
      ) {
        continue;
      }
    }

    var distance = 0;

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

    if (distance === 0 || (distance !== firstDice && distance !== secondDice)) {
      continue;
    }

    canGoTo.push(toBarIdx);
  }
  return canGoTo;
}

export function calcGettingOutOfOutMoves(
  game: Game,
  turn: Player,
  opponent: Player,
  dices: number[]
): number[] {
  const canGoTo: number[] = [];
  const [firstDice, secondDice] = dices;

  if (turn.player === "White") {
    if (
      firstDice > 0 &&
      (!game.board[12 - firstDice].includes(opponent.player) ||
        (game.board[12 - firstDice].includes(opponent.player) &&
          game.board[12 - firstDice].length === 1))
    ) {
      canGoTo.push(12 - firstDice);
    }
    if (
      secondDice > 0 &&
      (!game.board[12 - secondDice].includes(opponent.player) ||
        (game.board[12 - secondDice].includes(opponent.player) &&
          game.board[12 - secondDice].length === 1))
    ) {
      canGoTo.push(12 - secondDice);
    }
  } else {
    if (
      firstDice > 0 &&
      (!game.board[24 - firstDice].includes(opponent.player) ||
        (game.board[24 - firstDice].includes(opponent.player) &&
          game.board[24 - firstDice].length === 1))
    ) {
      canGoTo.push(24 - firstDice);
    }
    if (
      secondDice > 0 &&
      (!game.board[24 - secondDice].includes(opponent.player) ||
        (game.board[24 - secondDice].includes(opponent.player) &&
          game.board[24 - secondDice].length === 1))
    ) {
      canGoTo.push(24 - secondDice);
    }
  }

  return canGoTo;
}

export function hasPossibleMove(
  game: Game,
  turn: Player,
  opponent: Player,
  dices: number[]
): boolean {
  const outPieces =
    turn === game.whitePlayer
      ? [...game.whitePlayer.outBar]
      : [...game.blackPlayer.outBar];
  if (outPieces.length !== 0) {
    const canGoTo = calcGettingOutOfOutMoves(game, turn, opponent, dices);
    return canGoTo.length !== 0;
  }

  const containing: number[] = [];
  game.board.map((bar, barIdx) => {
    if (bar.includes(turn.player)) containing.push(barIdx);
  });

  const allMoves: number[] = [];
  containing.map((barIdx) => {
    const canGoTo = calcPossibleMoves(game, barIdx, turn, opponent, dices);

    canGoTo.map((barIdx) => allMoves.push(barIdx));
  });

  const endingDiceBars = calcEndingDiceBars(game, turn, dices);
  endingDiceBars.map((barIdx) => allMoves.push(barIdx));

  return allMoves.length !== 0;
}

export function checkCantMove(
  game: Game,
  turn: Player,
  opponent: Player,
  dices: number[],
  changeTurn: Function,
  setToDefault: Function
): boolean {
  if (game.gameOn && !hasPossibleMove(game, turn, opponent, dices)) {
    toast.error(
      "You have no possible moves.\nTurn changes to opponent.",
      toastStyle(turn)
    );

    changeTurn(game);
    setToDefault();

    return true;
  } else return false;
}
