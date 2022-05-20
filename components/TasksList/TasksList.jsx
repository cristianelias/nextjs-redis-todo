// Components
import Counter from "../Counter/Counter";
import Task from "../Task/Task";

// Styles
import styles from "./TasksList.module.css";

const TasksList = ({ tasks }) => (
  <>
    <h1 className={styles["main-container__title"]}>Good evening,</h1>
    <p className={styles["main-container__description"]}>
      Please select how many tasks you want to fetch
    </p>

    <Counter />

    <section className={styles["section-cards"]}>
      {tasks &&
        tasks.map(({ id, title, status }, index) => (
          <Task
            id={id}
            title={title}
            status={status}
            index={index + 1}
            key={id}
          />
        ))}
    </section>
  </>
);

export default TasksList;
