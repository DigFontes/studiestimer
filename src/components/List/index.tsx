import React from "react";
import Item from "./Item";
import styles from "./List.module.scss";

function List() {
  const tasks = [
    { task: "React", time: "02:00:00" },
    { task: "JavaScript", time: "01:00:00" },
    { task: "TypeScript", time: "03:00:00" },
  ];
  return (
    <aside className={styles.tasksList}>
      <h2> Today's Study </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} task={item.task} time={item.time} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
