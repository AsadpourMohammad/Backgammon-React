import { useState } from "react";
import Board from "./components/Board";
import Bar from "./components/Bar";
import { toast } from "react-hot-toast";
import Piece from "./components/Piece";
import "./App.css";
import { initialState } from "./logic";

// https://salamdonya.com/fun/how-to-play-backgammon

function App() {
  const [board, setBoard] = useState(initialState);

  function rollDice() {
    const first = Math.floor(Math.random() * 6) + 1;
    const second = Math.floor(Math.random() * 6) + 1;

    // TODO
    toast.error("TODO");
  }

  function checkState(from, to) {
    const currBoard = [...board];

    // TODO

    setBoard(currBoard);
  }

  function select(index) {
    // TODO
  }

  return (
    <>
      <Board>
        {board.map((bar, barIdx) => (
          <Bar
            isTopRow={barIdx > 11}
            onClick={() => select(barIdx)}
            key={barIdx}
          >
            {bar.map((piece, pieceIdx) => (
              <Piece key={`${barIdx}-${pieceIdx}`} color={piece} />
            ))}
          </Bar>
        ))}
      </Board>
      <button onClick={rollDice}>🎲 Roll dice 🎲</button>
    </>
  );
}

export default App;
