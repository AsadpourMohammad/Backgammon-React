import styles from "./CollectionBar.module.css";

export default function CollectionBar(props) {
  return (
    <div className={styles.barWrapper} {...props}>
      <div className={styles.bar} style={{ justifyContent: "initial" }}>
        {props.children}
      </div>
      <svg height="600" width="40">
        <polygon
          points={"0,300 20,0 40,300 20,600"}
          className={styles.polygon}
          style={{
            fill: props.fill,
          }}
        />
      </svg>
    </div>
  );
}
