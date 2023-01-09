import React from "react";
import { BsCircle } from "react-icons/bs";
import close from "../assets/images/icon-cross.svg";

const Task = ({ task }) => {
  return (
    <li className="py-5 pl-14 pr-5 relative flex justify-between text-very-dark-grayish-blue border-b ">
      {task.text}
      <span>
        <BsCircle className="absolute top-5 left-5 w-6 h-6 text-very-light-grayish-blue  font-bold" />
      </span>
      <img
        src={close}
        alt="close"
        className="self-center w-4 text-dark-grayish-blue"
      />
    </li>
  );
};

export default Task;
