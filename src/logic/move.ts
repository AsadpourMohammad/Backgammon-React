import { calcGettingOutOfOutMoves, calcPossibleMoves } from "./calc-moves";
import { calcEndingDiceBars, readyToEnd } from "./endgame";
import { calcMovesMade } from "./logic";
import Player from "./player";

export function settingFromEndBar(
  index: string,
  fromBarIdx: string,
  dices: number[],
  board: string[],
  turn: Player
) {
  if (readyToEnd(board, turn)) {
    const endingDiceBars = calcEndingDiceBars(board, turn, dices);

    if (endingDiceBars.length !== 0) {
      fromBarIdx = index;
      return [fromBarIdx, endingDiceBars];
    }
  }

  return [-1, []];
}

export function settingToBar(
  index: number,
  fromBarIdx: number,
  turn: Player,
  dices: string[],
  maxMoves: number,
  checkState: Function,
  changeTurn: Function
) {
  var rolledDice: boolean;

  var toBarIdx = index;
  checkState(fromBarIdx, toBarIdx);

  [rolledDice, dices, maxMoves] = calcMovesMade(
    fromBarIdx,
    toBarIdx,
    turn,
    dices,
    maxMoves,
    changeTurn
  );

  return [rolledDice, dices, maxMoves];
}

export function settingFromOutBar(
  index: string,
  board: string[],
  turn: Player,
  dices: number[]
) {
  var fromBarIdx = index;

  const canGoTo = calcGettingOutOfOutMoves(board, turn, dices);

  return [fromBarIdx, canGoTo];
}

export function settingFromBar(
  index: number,
  board: string[],
  turn: Player,
  opponent: Player,
  dices: string[]
) {
  const canGoTo = calcPossibleMoves(index, board, turn, opponent, dices);

  if (canGoTo.length !== 0) {
    var fromBarIdx = index;

    return [fromBarIdx, canGoTo];
  } else {
    return [-1, []];
  }
}
