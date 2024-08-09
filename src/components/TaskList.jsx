import React, { useContext, useEffect } from "react";
import { MdOutlineDeleteForever, MdOutlineEditNote } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";

import { TaskStateContext } from "../helpers/context/useContext";
import { useDelete } from "../helpers/handlers/useDelete";
import { useComplete } from "../helpers/handlers/useComplete";
import { useEdit } from "../helpers/handlers/useEdit";

const TaskList = () => {
  const {
    isComplete,
    pendingTasks,
    setTasks,
    doneTasks,
    setDoneTasks,
    edited,
    currentItem,
  } = useContext(TaskStateContext);

  const { handleDeleteTask, handleDeleteCompletedTask } = useDelete();

  const { handleCompleteTask } = useComplete();

  const {
    handleEditTask,
    handleUpdateDesc,
    handleUpdateTitle,
    handleUpdateTask,
  } = useEdit();

  useEffect(() => {
    let savedPendingTasks = JSON.parse(localStorage.getItem("PendingTaskList"));
    let savedDoneTasks = JSON.parse(localStorage.getItem("DoneTaskList"));
    if (savedPendingTasks) {
      setTasks(savedPendingTasks);
    }
    if (savedDoneTasks) {
      setDoneTasks(savedDoneTasks);
    }
  }, [setTasks, setDoneTasks]);

  return (
    <>
      <div className="todo-list">
        {isComplete === false &&
          pendingTasks.map((item, index) => {
            if (currentItem === index) {
              return (
                <div className="edit-wrapper" key={index}>
                  <input
                    placeholder="Updated Title"
                    value={edited.title}
                    onChange={(e) => {
                      handleUpdateTitle(e.target.value);
                    }}
                  />
                  <textarea
                    placeholder="Updated Description"
                    rows={4}
                    value={edited.desc}
                    onChange={(e) => {
                      handleUpdateDesc(e.target.value);
                    }}
                  />
                  <button className="primaryBtn" onClick={handleUpdateTask}>
                    <GrUpdate />
                  </button>
                </div>
              );
            } else {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div>
                    <MdOutlineEditNote
                      className="edit-icon"
                      title="Edit ..."
                      size={28}
                      onClick={() => handleEditTask(index, item)}
                    />
                    <MdOutlineDeleteForever
                      className="delete-icon"
                      title="Delete X"
                      size={28}
                      onClick={() => handleDeleteTask(index)}
                    />
                    <FaCheck
                      className="check-icon"
                      title="Complete !"
                      size={28}
                      onClick={() => handleCompleteTask(index)}
                    />
                  </div>
                </div>
              );
            }
          })}

        {isComplete === true &&
          doneTasks.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <p>
                    <small>
                      Completed On: <i>{item.completedOn}</i>
                    </small>
                  </p>
                </div>
                <div>
                  <MdOutlineDeleteForever
                    className="delete-icon"
                    title="Delete?"
                    size={28}
                    onClick={() => handleDeleteCompletedTask(index)}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TaskList;
