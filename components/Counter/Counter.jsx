// Dependencies
import { useContext, useState } from "react";
import UIContext from "../contexts/UIContext";

// Styles
import styles from "./Counter.module.css";

const Counter = () => {
  const { setLoading, tasksToFetch, setTasksToFetch } = useContext(UIContext);
  const MAX = 100;
  const MIN = 0;

  const decrease = () => {
    if (tasksToFetch === MIN) {
      return;
    }

    setLoading(true);
    setTasksToFetch(tasksToFetch - 1);
  };

  const increase = () => {
    if (tasksToFetch === MAX) {
      return;
    }

    setLoading(true);
    setTasksToFetch(tasksToFetch + 1);
  };

  return (
    <article className={styles.container}>
      <div className={styles.button} onClick={decrease}>
        -
      </div>
      <div className={styles["number-wrapper"]}>
        <span className={styles.number}>{tasksToFetch}</span>
      </div>
      <div className={styles.button} onClick={increase}>
        +
      </div>
    </article>
  );
};
export default Counter;
