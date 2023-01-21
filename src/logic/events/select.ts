import { toast } from "react-hot-toast";
import { toastStyle } from "../../App";
import { calcMovesMade } from "../calculations/calc-moves-made";
import {
  calcEndingDiceBars,
  calcGettingOutOfOutMoves,
  calcPossibleMoves,
  checkCantMove,
} from "../calculations/calc-possible-moves";
import Game from "../models/game";
import ThisMove from "../models/this-move";
import ThisTurn from "../models/this-turn";
import { changeTurn } from "./change-turn";
import { readyToEnd } from "./end-game";
import { movingPiece } from "./moving";

export function selecting(
  index: number | string,
  game: Game,
  thisTurn: ThisTurn,
  thisMove: ThisMove
): [Game, ThisTurn, ThisMove] {
  const newMove = () => new ThisMove();

  if (!game.gameOn) {
    toast.error("Begin a Game first!", toastStyle(thisTurn));
    return [game, thisTurn, thisMove];
  }

  if (!thisTurn.rolledDice) {
    toast.error("Roll a dice first!", toastStyle(thisTurn));
    return [game, thisTurn, thisMove];
  }

  if (
    thisTurn.turnPlayer.outBar.length !== 0 &&
    thisMove.fromBarIdx !== thisTurn.turnPlayer.outBarIdx &&
    index !== thisTurn.turnPlayer.outBarIdx
  ) {
    toast.error("You have to play you out pieces first.", toastStyle(thisTurn));
    return [game, thisTurn, thisMove];
  }

  // Deselecting 'from'
  if (index === thisMove.fromBarIdx) {
    thisMove = newMove();
    return [game, thisTurn, thisMove];
  }

  // Setting 'from' End Bar
  if (thisMove.fromBarIdx === -1 && index === thisTurn.turnPlayer.endBarIdx) {
    thisMove = settingFromEndBar(index, game, thisTurn, thisMove);
    return [game, thisTurn, thisMove];
  }

  // Setting 'from' Out Bar
  if (
    thisTurn.turnPlayer.outBar.length !== 0 &&
    index === thisTurn.turnPlayer.outBarIdx
  ) {
    thisMove = settingFromOutBar(index, game, thisTurn, thisMove);
    return [game, thisTurn, thisMove];
  }

  // Main Bars
  if (
    // Setting 'from' Main Bar
    thisMove.fromBarIdx === -1 &&
    game.board[index as number].includes(thisTurn.turnPlayer.player)
  ) {
    thisMove = settingFromBar(game, index as number, thisTurn, thisMove);
    return [game, thisTurn, thisMove];
  } else if (
    // Setting 'to' Bar for main, out, and end moves
    thisMove.toBarIdx === -1 &&
    thisMove.canGoTo.includes(index as number)
  ) {
    thisTurn = settingToBar(index as number, game, thisTurn, thisMove);
    thisMove = newMove();

    if (readyToEnd(game, thisTurn)) {
      toast(`You have moved all your pieces to the ending bars!
        You can now Select your ending bar to begin putting pieces out.`),
        toastStyle(thisTurn);
    }

    if (thisTurn.maxMoves === 0) {
      thisTurn = changeTurn(game, thisTurn);
      return [game, thisTurn, thisMove];
    }

    if (thisTurn.rolledDice) {
      thisTurn = checkCantMove(game, thisTurn);
      return [game, thisTurn, thisMove];
    }
  }

  console.log("Why are you here?");
  return [game, thisTurn, thisMove];
}

export function settingFromBar(
  game: Game,
  index: number,
  thisTurn: ThisTurn,
  thisMove: ThisMove
): ThisMove {
  const canGoTo = calcPossibleMoves(game, index, thisTurn);

  if (canGoTo.length !== 0) {
    thisMove.fromBarIdx = index;
    thisMove.canGoTo = canGoTo;
  }

  return thisMove;
}

export function settingFromOutBar(
  index: string,
  game: Game,
  thisTurn: ThisTurn,
  thisMove: ThisMove
): ThisMove {
  thisMove.fromBarIdx = index;

  const canGoTo = calcGettingOutOfOutMoves(game, thisTurn);
  thisMove.canGoTo = canGoTo;

  return thisMove;
}

export function settingFromEndBar(
  index: string,
  game: Game,
  thisTurn: ThisTurn,
  thisMove: ThisMove
): ThisMove {
  if (readyToEnd(game, thisTurn)) {
    const endingDiceBars = calcEndingDiceBars(game, thisTurn);

    if (endingDiceBars.length !== 0) {
      thisMove.fromBarIdx = index;
      thisMove.canGoTo = endingDiceBars;
      return thisMove;
    }
  }

  return thisMove;
}

export function settingToBar(
  index: number,
  game: Game,
  thisTurn: ThisTurn,
  thisMove: ThisMove
): ThisTurn {
  thisMove.toBarIdx = index;
  movingPiece(game, thisTurn, thisMove);

  thisTurn = calcMovesMade(thisTurn, thisMove);

  return thisTurn;
}
