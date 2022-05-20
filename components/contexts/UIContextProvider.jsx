// Dependencies
import { useState } from "react";

// Context
import UIContext from "./UIContext";

const UIContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [tasks, setTasks] = useState(null);
  const [tasksToFetch, setTasksToFetch] = useState(3);

  return (
    <UIContext.Provider
      value={{
        isLoading,
        setLoading,
        tasks,
        setTasks,
        tasksToFetch,
        setTasksToFetch,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
export default UIContextProvider;
