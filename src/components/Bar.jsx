import styles from "./Bar.module.css";

export default function Bar(props) {
  return (
    <div className={styles.barWrapper} {...props}>
      <div
        className={styles.bar}
        style={{ justifyContent: props.isTopRow ? "flex-end" : "initial" }}
      >
        {props.children}
      </div>
      <svg height="250" width="40">
        <polygon
          points={props.isTopRow ? "20,0 0,250 40,250" : "0,0 20,250 40,0"}
          className={styles.polygon}
        />
      </svg>
    </div>
  );
}
