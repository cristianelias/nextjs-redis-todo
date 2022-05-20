// Dependencies
import { useState } from "react";

// Styles
import styles from "./Task.module.css";

// Components
import TaskDetails from "../TaskDetails/TaskDetails";

const Task = ({ id, title, index, status }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article
        className={styles.card}
        key={id}
        onClick={() => setModalOpen(true)}
      >
        <h2 className={styles.card__title}>Task #{index}</h2>
        <p className={styles.card__text}>{title}</p>
      </article>

      {isModalOpen && (
        <TaskDetails
          index={index}
          title={title}
          status={status}
          setModalOpen={setModalOpen}
          id={id}
        />
      )}
    </>
  );
};

export default Task;
