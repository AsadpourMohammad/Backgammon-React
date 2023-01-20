import styles from "./Piece.module.css";

export default function Piece(props) {
  return (
    <div
      className={styles.piece}
      style={{
        background: props.color !== "White" ? "black" : "#f8f7f3",
        // border: props.color !== "White" ? "1px solid white" : "1px solid black",
        border: props.border,
      }}
      {...props}
    />
  );
}
