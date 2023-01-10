import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import close from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";

const Task = ({ task, onDelete, tasks }) => {
  const [completed, setCompleted] = useState(task.completed);

  function handleCheckClick() {
    setCompleted(!completed);
  }

  return (
    <li className="py-5 pl-14 pr-5 relative flex justify-between text-very-dark-grayish-blue border-b hover:cursor-pointer">
      {task.text}
      <span className="absolute top-5 left-5">
        <BsCircle
          onClick={handleCheckClick}
          className={` ${
            completed && "bg-gradient-to-r from-gradient-one to-gradient-two"
          }  w-6 h-6 text-very-light-grayish-blue  font-bold rounded-full`}
        />
      </span>
      <span className="absolute left-7 top-7">
        {completed && (
          <img src={check} alt="checkmark" onClick={handleCheckClick} />
        )}
      </span>
      <img
        src={close}
        alt="close"
        className="self-center w-4 text-dark-grayish-blue inline-block "
        onClick={() => onDelete(task.id)}
      />
    </li>
  );
};

export default Task;
