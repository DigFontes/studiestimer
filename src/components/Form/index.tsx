import React from "react";
import Button from "../Button";
import styles from "./Form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <form className={styles.newTask}>
        <div className={styles.inpuContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="taks"
            id="taks"
            placeholder="What do you want to study"
            required
          />
        </div>
        <div className={styles.inpuContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Add" />
      </form>
    );
  }
}

export default Form;
