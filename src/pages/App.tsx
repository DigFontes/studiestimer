import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import styles from "./App.module.scss";
import Timer from "../components/Timer";

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
