import Piece from "./components/Piece";
import PieceOutBar from "./components/PieceOutBar";

export default function BoardBottom(props) {
  return (
    <div className="board-bottom">
      {createPieceOutBar(
        props.select,
        props.whitePlayer,
        true,
        true,
        "#e0ded7",
        props.fromBarIdx
      )}

      {createButton(props.gameOn, props.rollDice, props.startGame)}

      {createPieceOutBar(
        props.select,
        props.blackPlayer,
        false,
        false,
        "#232937",
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
    player,
    isLeft,
    isWhite,
    fill,
    fromBarIdx
  ) {
    return (
      <PieceOutBar
        isLeft={isLeft}
        onClick={() => select(player.outBarIdx)}
        isWhite={isWhite}
        key={player.outBarIdx}
        fill={fill}
      >
        {player.outBar.map((piece, pieceIdx) =>
          createPieces(
            player.outBarIdx,
            piece,
            pieceIdx,
            fromBarIdx === player.outBarIdx,
            (pieceIdx === player.outBar.length - 1 && player.outBarIdx === "WhiteOutBar") ||
              (pieceIdx === 0 && player.outBarIdx === "BlackOutBar")
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
