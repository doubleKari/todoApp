import React, { useContext, useState } from "react";
import { BsCircle } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeProvider";
import close from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";

const Task = ({ task, onDelete, tasks, updateTask }) => {
  const [completed, setCompleted] = useState(task.completed);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCheckClick(id) {
    setCompleted(!completed);
    const updated = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !completed };
      } else {
        return item;
      }
    });
    updateTask(updated);
  }

  return (
    <li
      className={`py-5 pl-14 pr-5 relative flex justify-between ${
        darkMode ? "text-light-grayish-blue" : "text-very-dark-grayish-blue"
      } border-b ${
        darkMode && "border-b-very-dark-grayish-blue"
      } hover:cursor-pointer ${
        completed && "line-through text-dark-grayish-blue"
      } ${completed && "text-light-grayish-blue"}`}
    >
      {task.text}
      <span className="absolute top-5 left-5">
        <BsCircle
          onClick={() => handleCheckClick(task.id)}
          className={`${
            completed && "bg-gradient-to-r from-gradient-one to-gradient-two"
          }  w-6 h-6 ${
            darkMode
              ? "text-very-dark-grayish-blue"
              : "text-very-light-grayish-blue"
          }   font-bold rounded-full hover:text-gradient-two`}
        />
      </span>
      <span className="absolute left-7 top-7">
        {completed && (
          <img
            src={check}
            alt="checkmark"
            onClick={() => handleCheckClick(task.id)}
          />
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
