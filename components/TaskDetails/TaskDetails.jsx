// Dependencies
import { useContext } from "react";
import axios from "axios";

// Context
import UIContext from "../contexts/UIContext";

// Styles
import styles from "./TaskDetails.module.css";

const TaskDetails = ({ status, title, id, index, setModalOpen }) => {
  const { setLoading, setTasks } = useContext(UIContext);

  const markAsDone = () => {
    setLoading(true);
    axios.put(`api/tasks/${id}`, { status: "done" }).then(({ data }) => {
      setLoading(false);
      setTasks(data);
    });
  };

  return (
    <div className={styles["card-modal"]}>
      <h2 className={styles["card-modal__title"]}>
        Task #{index} <span>( UUID: {id} )</span>
      </h2>
      <p className={styles["card-modal__text"]}>Status: {status}</p>
      <p className={styles["card-modal__text"]}>{title}</p>
      <div className={styles["card-modal__buttons"]}>
        {status === "todo" && (
          <button
            className={styles["card-modal__button"]}
            onClick={() => markAsDone()}
          >
            Complete
          </button>
        )}

        <button
          className={`${styles["card-modal__button"]} ${styles["card-modal__button--close"]}`}
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
