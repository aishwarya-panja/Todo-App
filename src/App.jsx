import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TaskStateContext } from "./helpers/context/useContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Tabs from "./components/Tabs";

const App = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [pendingTasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [doneTasks, setDoneTasks] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [edited, setEdited] = useState("");

  return (
    <>
      <div className="App">
        <a href="https://github.com/MainakMukherjee01/To-Do_App">
          <h1>My To-Do List</h1>
        </a>
        <TaskStateContext.Provider
          value={{
            isComplete,
            setIsComplete,
            pendingTasks,
            setTasks,
            newTitle,
            setNewTitle,
            newDesc,
            setNewDesc,
            doneTasks,
            setDoneTasks,
            edited,
            setEdited,
            currentItem,
            setCurrentItem,
          }}
        >
          <div className="todo-wrapper">
            <AddTask />
            <Tabs />
            <TaskList />
            <ToastContainer />
          </div>
        </TaskStateContext.Provider>
      </div>
    </>
  );
};

export default App;
