import styles from "./Board.module.css";

export default function Board(props) {
  return <div className={styles.board}>{props.children}</div>;
}
