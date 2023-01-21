import styles from "./Card.module.css";

const DEFAULT_BORDER_RADIUS = 20;

export default function Card({
  children,
}) {
  return (
    <div
      className={styles.Card}
      style={{ borderRadius: DEFAULT_BORDER_RADIUS }}
    >
      {children}
    </div>
  );
}
