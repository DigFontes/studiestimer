import styles from "./Clock.module.scss";

export default function Clock() {
  return (
    <>
      <span className={styles.numberClock}>0</span>
      <span className={styles.numberClock}>0</span>
      <span className={styles.limitClock}>:</span>
      <span className={styles.numberClock}>0</span>
      <span className={styles.numberClock}>0</span>
    </>
  );
}
