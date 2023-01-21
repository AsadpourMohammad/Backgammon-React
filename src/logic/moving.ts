import { calcGettingOutOfOutMoves, calcPossibleMoves } from "./calc-moves";
import { calcEndingDiceBars, readyToEnd } from "./endgame";
import Game from "./models/game";
import { calcMovesMade } from "./logic";
import ThisTurn from "./models/this-turn";

export function settingFromBar(
  game: Game,
  index: number,
  thisTurn: ThisTurn
): [number, number[]] {
  const canGoTo = calcPossibleMoves(game, index, thisTurn);

  if (canGoTo.length !== 0) {
    var fromBarIdx = index;

    return [fromBarIdx, canGoTo];
  } else {
    return [-1, []];
  }
}

export function settingFromOutBar(
  game: Game,
  index: string,
  thisTurn: ThisTurn
): [string, number[]] {
  var fromBarIdx = index;

  const canGoTo = calcGettingOutOfOutMoves(game, thisTurn);

  return [fromBarIdx, canGoTo];
}

export function settingFromEndBar(
  game: Game,
  index: string,
  fromBarIdx: number | string,
  thisTurn: ThisTurn
): [number | string, number[]] {
  if (readyToEnd(game, thisTurn)) {
    const endingDiceBars = calcEndingDiceBars(game, thisTurn);

    if (endingDiceBars.length !== 0) {
      fromBarIdx = index;
      return [fromBarIdx, endingDiceBars];
    }
  }

  return [-1, []];
}

export function settingToBar(
  index: number,
  fromBarIdx: number | string,
  thisTurn: ThisTurn,
  checkState: Function
): ThisTurn {
  var toBarIdx = index;
  checkState(fromBarIdx, toBarIdx);

  thisTurn = calcMovesMade(fromBarIdx, toBarIdx, thisTurn);

  return thisTurn;
}
