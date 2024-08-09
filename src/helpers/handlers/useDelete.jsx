import { useContext } from "react";
import { TaskStateContext } from "../context/useContext";
import { toast } from "react-toastify";

export const useDelete = () => {
  const { pendingTasks, setTasks, doneTasks, setDoneTasks } =
    useContext(TaskStateContext);
try{
  const handleDeleteTask = (index) => {
    let reducedTasks = [...pendingTasks];
    reducedTasks.splice(index, 1);
    localStorage.setItem("PendingTaskList", JSON.stringify(reducedTasks));
    setTasks(reducedTasks);
  };

  const handleDeleteCompletedTask = (index) => {
    let reducedTasks = [...doneTasks];
    reducedTasks.splice(index, 1);
    localStorage.setItem("DoneTaskList", JSON.stringify(reducedTasks));
    setDoneTasks(reducedTasks);
  };

  return { handleDeleteTask, handleDeleteCompletedTask };
}catch(e){
  toast.error(e);
}
};
