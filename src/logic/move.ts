import { calcGettingOutOfOutMoves, calcPossibleMoves } from "./calc-moves";
import { calcEndingDiceBars, readyToEnd } from "./endgame";
import Game from "./game";
import { calcMovesMade } from "./logic";
import Player from "./player";

export function settingFromBar(
  game: Game,
  index: number,
  turn: Player,
  opponent: Player,
  dices: number[]
): [number, number[]] {
  const canGoTo = calcPossibleMoves(game, index, turn, opponent, dices);

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
  turn: Player,
  opponent: Player,
  dices: number[]
): [string, number[]] {
  var fromBarIdx = index;

  const canGoTo = calcGettingOutOfOutMoves(game, turn, opponent, dices);

  return [fromBarIdx, canGoTo];
}

export function settingFromEndBar(
  game: Game,
  index: string,
  fromBarIdx: number | string,
  dices: number[],
  turn: Player
): [number | string, number[]] {
  if (readyToEnd(game, turn)) {
    const endingDiceBars = calcEndingDiceBars(game, turn, dices);

    if (endingDiceBars.length !== 0) {
      fromBarIdx = index;
      return [fromBarIdx, endingDiceBars];
    }
  }

  return [-1, []];
}

export function settingToBar(
  game: Game,
  index: number,
  fromBarIdx: number | string,
  turn: Player,
  dices: number[],
  maxMoves: number,
  checkState: Function,
  changeTurn: Function
): [boolean, number[], number] {
  var rolledDice: boolean;

  var toBarIdx = index;
  checkState(fromBarIdx, toBarIdx);

  [rolledDice, dices, maxMoves] = calcMovesMade(
    game,
    fromBarIdx,
    toBarIdx,
    turn,
    dices,
    maxMoves,
    changeTurn
  );

  return [rolledDice, dices, maxMoves];
}
