import { useContext } from "react";
import { TaskStateContext } from "../context/useContext";
import { useDelete } from "./useDelete";
import { toast } from "react-toastify";

export const useComplete = () => {
  const { pendingTasks, doneTasks, setDoneTasks } =
    useContext(TaskStateContext);
  const { handleDeleteTask } = useDelete();

  try {
    const handleCompleteTask = (index) => {
      let now = new Date();
      let dd = now.getDate();
      let mm = now.getMonth() + 1;
      let yy = now.getYear() % 100;
      let hrs = now.getHours();
      let min = now.getMinutes();
      let sec = now.getSeconds();

      let completedOn =
        dd + "-" + mm + "-" + yy + " at " + hrs + ":" + min + ":" + sec;

      let filteredItem = {
        ...pendingTasks[index],
        completedOn: completedOn,
      };

      let newCompleteArr = [...doneTasks];
      newCompleteArr.push(filteredItem);
      setDoneTasks(newCompleteArr);
      handleDeleteTask(index);
      localStorage.setItem("DoneTaskList", JSON.stringify(newCompleteArr));
      toast.success(`Kudos! Task: ${filteredItem.title} completed!`)
    };

    return { handleCompleteTask };
  } catch (e) {
    toast.error(e);
  }
};
