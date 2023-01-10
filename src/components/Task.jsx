import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import close from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";

const Task = ({ task, onDelete, tasks }) => {
  const [completed, setCompleted] = useState(task.completed);

  function handleCheckClick() {
    setCompleted(!completed);

    tasks.map((item) => {
      if (item.id === task.id) {
        return { ...item, completed: !completed };
      }
    });
  }

  console.log(tasks);

  return (
    <li className="py-5 pl-14 pr-5 relative flex justify-between text-very-dark-grayish-blue border-b ">
      {task.text}
      <span>
        <BsCircle
          onClick={handleCheckClick}
          className={`absolute ${
            completed && "bg-gradient-to-r from-gradient-one to-gradient-two"
          } top-5 left-5 w-6 h-6 text-very-light-grayish-blue  font-bold rounded-full`}
        />
      </span>
      <span>
        {completed && (
          <img
            src={check}
            alt="checkmark"
            onClick={handleCheckClick}
            className="absolute left-7 top-7"
          />
        )}
      </span>
      <img
        src={close}
        alt="close"
        className="self-center w-4 text-dark-grayish-blue"
        onClick={() => onDelete(task.id)}
      />
    </li>
  );
};

export default Task;
