import { calcGettingOutOfOutMoves, calcPossibleMoves } from "./calc-moves";
import { calcEndingDiceBars, readyToEnd } from "./endgame";
import { calcMovesMade } from "./logic";

export function settingFromEndBar(index, fromBarIdx, dices, board, turn) {
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
  index,
  fromBarIdx,
  turn,
  dices,
  maxMoves,
  checkState,
  changeTurn
) {
  var rolledDice;
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

export function settingFromOutBar(index, board, turn, dices) {
  var fromBarIdx = index;

  const canGoTo = calcGettingOutOfOutMoves(board, turn, dices);

  return [fromBarIdx, canGoTo];
}

export function settingFromBar(index, board, turn, opponent, dices) {
  const canGoTo = calcPossibleMoves(index, board, turn, opponent, dices);

  if (canGoTo.length !== 0) {
    var fromBarIdx = index;

    return [fromBarIdx, canGoTo];
  } else {
    return [-1, []];
  }
}
