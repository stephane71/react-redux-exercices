import styles from "./Card.module.css";

const DEFAULT_BORDER_RADIUS = 20;

export default function Card({
  children,
  borderRadius = DEFAULT_BORDER_RADIUS,
  onClick,
}) {
  return (
    <div className={styles.Card} style={{ borderRadius }} onClick={onClick}>
      {children}
    </div>
  );
}
