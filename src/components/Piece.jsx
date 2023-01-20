import styles from "./Piece.module.css";

export default function Piece(props) {
  return (
    <div
      className={styles.piece}
      style={{ background: props.color }}
      {...props}
    />
  );
}
