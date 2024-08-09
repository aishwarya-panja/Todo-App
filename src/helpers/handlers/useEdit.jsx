import { useContext } from "react";
import { TaskStateContext } from "../context/useContext";

export const useEdit = () => {
  const {
    edited,
    setEdited,
    currentItem,
    setCurrentItem,
    pendingTasks,
    setTasks,
  } = useContext(TaskStateContext);

  const handleEditTask = (index, item) => {
    setCurrentItem(index);
    setEdited(item);
  };

  const handleUpdateTitle = (value) => {
    setEdited((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleUpdateDesc = (value) => {
    setEdited((prev) => {
      return { ...prev, desc: value };
    });
  };
  const handleUpdateTask = () => {
    let newTask = [...pendingTasks];
    newTask[currentItem] = edited;
    setTasks(newTask);
    setCurrentItem("");
  };

  return {
    handleEditTask,
    handleUpdateDesc,
    handleUpdateTitle,
    handleUpdateTask,
  };
};
