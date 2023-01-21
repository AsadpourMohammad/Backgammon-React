import Game from "../backend/models/game";
import Player from "../backend/models/player";
import ThisMove from "../backend/models/this-move";
import Bar from "./components/Bar";
import Board from "./components/Board";
import EndBar from "./components/EndBar";
import Piece from "./components/Piece";

interface BoardProps {
  game: Game;
  thisMove: ThisMove;
  select: any;
}

export default function BoardTop(props: BoardProps) {
  return (
    <div className="board-top">
      <CreateEndBar player={props.game.whitePlayer} {...props} />

      <CreateBoard />

      <CreateEndBar player={props.game.blackPlayer} {...props} />
    </div>
  );

  function CreateBoard() {
    return (
      <Board>
        {props.game.board.map((bar, barIdx) => (
          <CreateBar bar={bar} barIdx={barIdx} {...props} />
        ))}
      </Board>
    );
  }

  interface BarProps extends BoardProps {
    bar: string[];
    barIdx: number;
  }

  function CreateBar(props: BarProps) {
    return (
      <Bar
        isTopRow={props.barIdx > 11}
        onClick={() => props.select(props.barIdx)}
        key={props.barIdx}
        fill={
          (props.thisMove.canGoTo.includes(props.barIdx) && "#671010") ||
          (props.barIdx % 2 === 0 && props.barIdx > 11 && "#232937") ||
          (props.barIdx % 2 !== 0 && props.barIdx <= 11 && "#232937") ||
          (props.barIdx % 2 === 0 && props.barIdx <= 11 && "#e0ded7") ||
          (props.barIdx % 2 !== 0 && props.barIdx > 11 && "#e0ded7") ||
          "Red"
        }
      >
        {props.bar.map((piece, pieceIdx) => (
          <CreatePiece
            piece={piece}
            pieceIdx={pieceIdx}
            border={
              (props.thisMove.fromBarIdx === props.barIdx &&
                ((pieceIdx === 0 && props.barIdx > 11) ||
                  (pieceIdx === props.bar.length - 1 && props.barIdx <= 11)) &&
                "2px solid #671010") ||
              (piece == "White"
                ? props.game.whitePlayer.pieceBorderColor
                : props.game.blackPlayer.pieceBorderColor)
            }
            {...props}
          />
        ))}
      </Bar>
    );
  }

  interface EndBarProps extends BoardProps {
    player: Player;
  }

  function CreateEndBar(props: EndBarProps) {
    return (
      <EndBar
        onClick={() => props.select(props.player.endBarIdx)}
        key={props.player.endBarIdx}
        fill={"#e0ded7"}
      >
        {props.player.endBar.map((piece, pieceIdx) => (
          <CreatePiece
            piece={piece}
            pieceIdx={pieceIdx}
            border={props.player.pieceBorderColor}
            barIdx={props.player.endBarIdx}
          />
        ))}
      </EndBar>
    );
  }

  interface PieceProps {
    barIdx: number | string;
    piece: string;
    pieceIdx: number;
    border: string;
  }

  function CreatePiece(props: PieceProps) {
    return (
      <Piece
        key={`${props.barIdx}-${props.pieceIdx}`}
        border={props.border}
        color={props.piece}
      />
    );
  }
}
