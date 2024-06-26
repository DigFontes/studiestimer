import Button from "../Button";
import Clock from "./Clock";
import styles from "./Timer.module.scss";

export default function Timer() {
  return (
    <div className={styles.timer}>
      <p className={styles.title}>Choose your card and play the timer</p>
      <div className={styles.clockWrapper}>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  );
}
