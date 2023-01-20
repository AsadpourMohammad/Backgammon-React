export function readyToEnd(board, turn) {
    const containing = [];
    board.map((bar, barIdx) => {
      if (bar.includes(turn)) containing.push(barIdx);
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

  