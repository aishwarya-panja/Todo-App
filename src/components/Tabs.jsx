import React, { useContext } from "react";
import { TaskStateContext } from "../helpers/context/useContext";
import { MdPending } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const Tabs = () => {
  const { isComplete, setIsComplete } = useContext(TaskStateContext);

  return (
    <>
      <div className="btn-area">
        <button
          className={`secondaryBtn ${isComplete === false && "active"}`}
          onClick={() => setIsComplete(false)}
        >
          <MdPending size={20} color={"#a0153e"} />
        </button>
        <button
          className={`secondaryBtn ${isComplete === true && "active"}`}
          onClick={() => setIsComplete(true)}
        >
          <IoCheckmarkDone size={20} color={"#005b41"} />
        </button>
      </div>
    </>
  );
};

export default Tabs;
