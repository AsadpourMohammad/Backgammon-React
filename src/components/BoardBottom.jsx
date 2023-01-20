import Piece from "./components/Piece";
import PieceOutBar from "./components/PieceOutBar";

export default function BoardBottom(props) {
  return (
    <div className="board-bottom">
      {createPieceOutBar(
        props.select,
        true,
        true,
        "WhiteOutBar",
        "#e0ded7",
        props.whiteOutBar,
        props.fromBarIdx
      )}

      {createButton(props.gameOn, props.rollDice, props.startGame)}

      {createPieceOutBar(
        props.select,
        false,
        false,
        "BlackOutBar",
        "#232937",
        props.blackOutBar,
        props.fromBarIdx
      )}
    </div>
  );

  function createButton(gameOn, rollDice, startGame) {
    return gameOn ? (
      <button onClick={rollDice}>🎲 roll Dice 🎲</button>
    ) : (
      <button onClick={startGame}>⚪ Begin Game ⚫</button>
    );
  }

  function createPieceOutBar(
    select,
    isLeft,
    isWhite,
    outBarIdx,
    fill,
    outBar,
    fromBarIdx
  ) {
    return (
      <PieceOutBar
        isLeft={isLeft}
        onClick={() => select(outBarIdx)}
        isWhite={isWhite}
        key={outBarIdx}
        fill={fill}
      >
        {outBar.map((piece, pieceIdx) =>
          createPieces(
            outBarIdx,
            piece,
            pieceIdx,
            fromBarIdx === outBarIdx,
            (pieceIdx === outBar.length - 1 && outBarIdx === "WhiteOutBar") ||
              (pieceIdx === 0 && outBarIdx === "BlackOutBar")
          )
        )}
      </PieceOutBar>
    );
  }

  function createPieces(barIdx, piece, pieceIdx, included, rightPiece) {
    return (
      <Piece
        key={`${barIdx}-${pieceIdx}`}
        border={
          (included && rightPiece && "3px solid #671010") ||
          (piece !== "White" ? "1px solid white" : "1px solid black")
        }
        color={piece}
      />
    );
  }
}
