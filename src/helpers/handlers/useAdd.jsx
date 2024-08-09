import { useContext } from "react";
import { TaskStateContext } from "../context/useContext";
import { toast } from "react-toastify";

export const useAdd = () => {
  const { newTitle, setNewTitle, newDesc, setNewDesc, pendingTasks, setTasks } =
    useContext(TaskStateContext);

  const handleAddTask = () => {
    let newTask;
    try {
      if (newTitle || newTitle !== "") {
        newTask = {
          title: newTitle,
          desc: newDesc,
        };
        let updatedTaskArr = [...pendingTasks];
        updatedTaskArr.push(newTask);
        setTasks(updatedTaskArr);
        localStorage.setItem("PendingTaskList", JSON.stringify(updatedTaskArr));
        toast.success(`Task: ${newTask.title} added!`);
      } else {
        toast.error("Task title cannot be empty!");
      }
    } catch (e) {
      toast.error(e);
    } finally {
      setNewTitle("");
      setNewDesc("");
    }
  };

  return { handleAddTask };
};
