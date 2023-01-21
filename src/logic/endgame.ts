import { toast } from "react-hot-toast";
import { toastStyle } from "../App";
import Game from "./models/game";
import Player from "./models/player";
import ThisTurn from "./models/this-turn";

export function readyToEnd(game: Game, thisTurn: ThisTurn): boolean {
  const containing: number[] = [];

  game.board.map((bar, barIdx) => {
    if (bar.includes(thisTurn.turnPlayer.player)) containing.push(barIdx);
  });

  if (thisTurn.turnPlayer.player === "White") {
    for (let i = 0; i < containing.length; i++) {
      const barIdx = containing[i];

      if (barIdx < 18) return false;
    }
  } else {
    for (let i = 0; i < containing.length; i++) {
      const barIdx = containing[i];

      if (barIdx < 6 || barIdx > 11) return false;
    }
  }

  return true;
}

export function calcEndingDiceBars(game: Game, thisTurn: ThisTurn): number[] {
  const turnPlayer = thisTurn.turnPlayer.player;

  function includesPlayer(bar: number) {
    return game.board[bar].includes(turnPlayer);
  }

  const canGoFrom: number[] = [];
  const [firstDice, secondDice] = thisTurn.dices;

  if (turnPlayer === "White") {
    if (firstDice > 0 && includesPlayer(24 - firstDice)) {
      canGoFrom.push(24 - firstDice);
    }

    if (
      secondDice > 0 &&
      firstDice !== secondDice &&
      includesPlayer(24 - secondDice)
    ) {
      canGoFrom.push(24 - secondDice);
    }
  } else {
    if (firstDice > 0 && includesPlayer(12 - firstDice)) {
      canGoFrom.push(12 - firstDice);
    }

    if (
      secondDice > 0 &&
      firstDice !== secondDice &&
      includesPlayer(12 - secondDice)
    ) {
      canGoFrom.push(12 - secondDice);
    }
  }
  return canGoFrom;
}

export function celebrateGameEnd(thisTurn: ThisTurn): void {
  toast(
    thisTurn.turnPlayer.player === "White"
      ? `⚪ WHITE ⚪ has Won the Game!`
      : `⚫ BLACK ⚫ has Won the Game!`,
    toastStyle(thisTurn)
  );
}
