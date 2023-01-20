import React, { createContext, useContext } from "react";
import Bar from "./components/Bar";
import Board from "./components/Board";
import CollectionBar from "./components/CollectionBar";
import Piece from "./components/Piece";
import { BoardContext } from "../App";

const BarContext = createContext();

export default function BoardTop() {
  const { select, board, canGoToArray, whiteEndBar, blackEndBar, fromBarIdx } =
    useContext(BoardContext);

  return (
    <div className="board-top">
      {CreateCollectionBar({
        endBar: whiteEndBar,
        endBarIdx: "WhiteEndBar",
        fill: "#e0ded7",
      })}

      {CreateBoard()}

      {CreateCollectionBar({
        endBar: blackEndBar,
        endBarIdx: "BlackEndBar",
        fill: "#232937",
      })}
    </div>
  );

  function CreateBoard() {
    return (
      <Board>
        {board.map((bar, barIdx) => (
          <BarContext.Provider
            value={{
              bar,
              barIdx,
            }}
          >
            <CreateBars></CreateBars>
          </BarContext.Provider>
        ))}
      </Board>
    );
  }

  function CreateBars() {
    const { bar, barIdx } = useContext(BarContext);

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
        {bar.map((piece, pieceIdx) => (
          <CreatePieces
            piece={piece}
            pieceIdx={pieceIdx}
            included={fromBarIdx === barIdx}
            rightPiece={
              (pieceIdx === 0 && barIdx > 11) ||
              (pieceIdx === bar.length - 1 && barIdx <= 11)
            }
          ></CreatePieces>
        ))}
      </Bar>
    );
  }

  function CreateCollectionBar(props) {
    const { select } = useContext(BoardContext);

    return (
      <CollectionBar
        onClick={() => select(props.endBarIdx)}
        isWhite={true}
        key={props.endBarIdx}
        fill={props.fill}
      >
        {props.endBar.map((piece, pieceIdx) =>
          CreatePieces(props.endBarIdx, piece, pieceIdx, false, false)
        )}
      </CollectionBar>
    );
  }

  function CreatePieces(props) {
    const { barIdx } = useContext(BarContext);

    return (
      <Piece
        key={`${barIdx}-${props.pieceIdx}`}
        border={
          (props.included && props.rightPiece && "2px solid #671010") ||
          (props.piece !== "White" ? "1px solid #e9e2d6" : "1px solid black")
        }
        color={props.piece}
      />
    );
  }
}
