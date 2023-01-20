import React from "react";
import Bar from "./components/Bar";
import Board from "./components/Board";
import CollectionBar from "./components/CollectionBar";
import Piece from "./components/Piece";

export default function BoardTop(props) {
  return (
    <div className="board-top">
      <CreateCollectionBar
        select={props.select}
        endBar={props.whiteEndBar}
        endBarIdx={"WhiteEndBar"}
        fill={"#e0ded7"}
      />

      {createBoard(
        props.board,
        props.canGoToArray,
        props.select,
        props.fromBarIdx
      )}

      <CreateCollectionBar
        select={props.select}
        endBar={props.blackEndBar}
        endBarIdx={"BlackEndBar"}
        fill={"#232937"}
      />
    </div>
  );

  function createBoard(board, canGoToArray, select, fromBarIdx) {
    return (
      <Board>
        {board.map((bar, barIdx) =>
          createBars(bar, barIdx, canGoToArray, select, fromBarIdx)
        )}
      </Board>
    );
  }

  function createBars(bar, barIdx, canGoToArray, select, fromBarIdx) {
    return (
      <Bar
        isTopRow={barIdx > 11}
        onClick={() => select(barIdx)}
        key={barIdx}
        fill={
          (canGoToArray.includes(barIdx) && "#671010") ||
          (barIdx % 2 === 0 && barIdx > 11 && "#232937") ||
          (barIdx % 2 !== 0 && barIdx <= 11 && "#232937") ||
          (barIdx % 2 === 0 && barIdx <= 11 && "#e0ded7") ||
          (barIdx % 2 !== 0 && barIdx > 11 && "#e0ded7")
        }
        isWhite={
          (barIdx % 2 === 0 && barIdx > 11 && false) ||
          (barIdx % 2 !== 0 && barIdx <= 11 && false) ||
          (barIdx % 2 === 0 && barIdx <= 11 && true) ||
          (barIdx % 2 !== 0 && barIdx > 11 && true)
        }
      >
        {bar.map((piece, pieceIdx) =>
          createPieces(
            barIdx,
            piece,
            pieceIdx,
            fromBarIdx === barIdx,
            (pieceIdx === 0 && barIdx > 11) ||
              (pieceIdx === bar.length - 1 && barIdx <= 11)
          )
        )}
      </Bar>
    );
  }

  function CreateCollectionBar(props) {
    return (
      <CollectionBar
        onClick={() => props.select(props.endBarIdx)}
        isWhite={true}
        key={props.endBarIdx}
        fill={props.fill}
      >
        {props.endBar.map((piece, pieceIdx) =>
          createPieces(props.endBarIdx, piece, pieceIdx, false, false)
        )}
      </CollectionBar>
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
