// Dependencies
import { useEffect, useContext } from "react";
import axios from "axios";

// Context
import UIContext from "../components/contexts/UIContext";

// Components
import Loading from "../components/Loading/Loading";
import TasksList from "../components/TasksList/TasksList";

export default function Home() {
  const { isLoading, setLoading, tasks, setTasks, tasksToFetch } =
    useContext(UIContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get("api/tasks", { params: { quantity: tasksToFetch } })
      .then(({ data }) => {
        setTasks(data);
        setLoading(false);
      });
  }, [setLoading, setTasks, tasksToFetch]);

  return isLoading ? <Loading /> : <TasksList tasks={tasks} />;
}
