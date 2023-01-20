export const initialState = () => {
  return [
    ["White", "White", "White", "White", "White"],
    [],
    [],
    [],
    ["Black", "Black", "Black"],
    [],
    ["Black", "Black", "Black", "Black", "Black"],
    [],
    [],
    [],
    [],
    ["White", "White"],
    ["Black", "Black", "Black", "Black", "Black"],
    [],
    [],
    [],
    ["White", "White", "White"],
    [],
    ["White", "White", "White", "White", "White"],
    [],
    [],
    [],
    [],
    ["Black", "Black"],
  ];
};

export function calcPossibleMoves(
  fromBarIdx,
  board,
  turn,
  firstDice,
  secondDice
) {
  if (firstDice === null) firstDice = 0;
  if (secondDice === null) secondDice = 0;

  const canGoTo = [];
  const opponent = turn === "White" ? "Black" : "White";

  for (let i = 0; i < board.length; i++) {
    var toBar = board[i];
    var toBarIdx = i;

    if (toBar.includes(opponent) && toBar.length > 1) {
      continue;
    }

    if (turn === "White") {
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

export function calcGettingOutOfOutMoves(board, turn, firstDice, secondDice) {
  const canGoTo = [];
  const opponent = turn === "White" ? "Black" : "White";

  if (turn === "White") {
    if (
      firstDice > 0 &&
      (!board[12 - firstDice].includes(opponent) ||
        (board[12 - firstDice].includes(opponent) &&
          board[12 - firstDice].length === 1))
    ) {
      canGoTo.push(12 - firstDice);
    }
    if (
      secondDice > 0 &&
      (!board[12 - secondDice].includes(opponent) ||
        (board[12 - secondDice].includes(opponent) &&
          board[12 - secondDice].length === 1))
    ) {
      canGoTo.push(12 - secondDice);
    }
  } else {
    if (
      firstDice > 0 &&
      (!board[24 - firstDice].includes(opponent) ||
        (board[24 - firstDice].includes(opponent) &&
          board[24 - firstDice].length === 1))
    ) {
      canGoTo.push(24 - firstDice);
    }
    if (
      secondDice > 0 &&
      (!board[24 - secondDice].includes(opponent) ||
        (board[24 - secondDice].includes(opponent) &&
          board[24 - secondDice].length === 1))
    ) {
      canGoTo.push(24 - secondDice);
    }
  }

  return canGoTo;
}

export function readyToEnd(board, turn) {
  const containing = [];
  board.map((bar, barIdx) => {
    if (bar.includes(turn.current)) containing.push(barIdx);
  });

  if (turn === "White") {
    for (let i = 0; i < containing.length; i++) {
      const barIdx = containing[i];

      if (barIdx < 6 || barIdx > 11) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < containing.length; i++) {
      const barIdx = containing[i];

      if (barIdx < 18) {
        return false;
      }
    }
  }

  return true;
}

export function calcEndingDiceBars(board, turn, firstDice, secondDice) {
  const canGoFrom = [];
  if (turn === "White") {
    if (firstDice > 0 && board[24 - firstDice].includes(turn)) {
      canGoFrom.push(24 - firstDice);
    }

    if (
      secondDice > 0 &&
      firstDice !== secondDice &&
      board[24 - secondDice].includes(turn)
    ) {
      canGoFrom.push(24 - secondDice);
    }
  } else {
    if (firstDice > 0 && board[12 - firstDice].includes(turn)) {
      canGoFrom.push(12 - firstDice);
    }

    if (
      secondDice > 0 &&
      firstDice !== secondDice &&
      board[12 - secondDice].includes(turn)
    ) {
      canGoFrom.push(12 - secondDice);
    }
  }
  return canGoFrom;
}
