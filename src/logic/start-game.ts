import { toast } from "react-hot-toast";
import { toastStyle } from "../App";
import Player from "./player";
import { dice } from "./roll-dice";

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

export function backgammon() {
  toast(
    `Backgammon...
  
  Is the oldest game in the world. Archaeologists found sets when 
  they excavated the ruins of 
  ancient Mesopotamia,
  five thousand years old. 

  That's older than Jesus Christ. 
  Their dice were made of bones.
  
  Two Players. Two Sides.

  One is Light, 
  One is Dark.

  -  John Locke. Lost.`,
    {
      duration: 9000,
      style: {
        borderRadius: "10px",
        background: "black",
        color: "#fff",
        border: "2px solid white",
      },
    }
  );
}

export function startingGame(whitePlayer: Player, blackPlayer: Player) {
  var turn: Player;
  var opponent: Player;

  while (true) {
    const [whiteFirst, whiteSecond] = dice();
    const [blackFirst, blackSecond] = dice();

    if (whiteFirst + whiteSecond > blackFirst + blackSecond) {
      turn = whitePlayer;
      opponent = blackPlayer;
      toast.success("The Game starts with ⚪ WHITE ⚪", toastStyle(turn));

      break;
    } else if (whiteFirst + whiteSecond < blackFirst + blackSecond) {
      turn = blackPlayer;
      opponent = whitePlayer;
      toast.success("The Game starts with ⚫ BLACK ⚫", toastStyle(turn));

      break;
    }
  }

  return [turn, opponent];
}
