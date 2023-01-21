import styles from "./Piece.module.css";

type Props = {
  color: string;
  border: string;
};

export default function Piece(props: Props) {
  return (
    <div
      className={styles.piece}
      style={{
        background: props.color !== "White" ? "black" : "#f8f7f3",
        border: props.border,
      }}
      {...props}
    />
  );
}
