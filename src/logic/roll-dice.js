import { toast } from "react-hot-toast";
import { toastStyle } from "../App";

export function dice() {
  const first = Math.floor(Math.random() * 6) + 1;
  const second = Math.floor(Math.random() * 6) + 1;

  return [first, second];
}

export function rollingDice(rolledDice, dices, turn, maxMoves) {
  if (rolledDice) {
    toast.error(
      "Play your move before rolling again.\n" + `🎲 ${turn}: ${dices} 🎲`,
      toastStyle(turn)
    );

    return [rolledDice, dices, turn, maxMoves];
  }

  dices = dice();

  if (dices[0] === dices[1]) {
    dices.push(dices[0]);
    dices.push(dices[0]);

    toast.success(`🎲 ${turn}: Rolled a Double: ${dices} 🎲`, toastStyle(turn));
  } else {
    toast.success(`🎲 ${turn}: ${dices} 🎲`, toastStyle(turn));
  }

  rolledDice = true;
  maxMoves = dices.reduce((a, b) => a + b, 0);

  return [rolledDice, dices, turn, maxMoves];
}
