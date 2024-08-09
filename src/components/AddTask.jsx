import React, { useContext, useEffect } from "react";
import { TaskStateContext } from "../helpers/context/useContext";
import { useAdd } from "../helpers/handlers/useAdd";

const AddTask = () => {
  const { newTitle, setNewTitle, newDesc, setNewDesc, setTasks } =
    useContext(TaskStateContext);

  const { handleAddTask } = useAdd();

  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem("PendingTaskList"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, [setTasks]);

  return (
    <>
      <div>
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title: </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Name your task"
            />
          </div>

          <div className="todo-input-item">
            <label>Description: </label>
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Describe your task"
            />
          </div>

          <div className="todo-input-item">
            <button className="primaryBtn" onClick={handleAddTask}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
