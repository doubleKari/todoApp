import React from "react";
import Task from "./Task";
import { BsCircle } from "react-icons/bs";

const Tasks = ({ tasks }) => {
  return (
    <section className="absolute left-5 top-[110px] w-[90%] flex flex-col gap-6">
      <div>
        <input
          type="text"
          placeholder="Create a new todo.."
          className=" h-12 w-full rounded-md pl-14 shadow-md focus:outline-none"
        />
        <i>
          <BsCircle className="absolute top-3 left-5 w-6 h-6 text-very-light-grayish-blue font-bold" />
        </i>
      </div>
      <ul className="rounded-md bg-white shadow-lg ">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
        <li className="flex justify-between px-6 py-5 text-light-grayish-blue">
          <p>5 items left</p>
          <p>Clear completed</p>
        </li>
      </ul>
      <div className="flex justify-between px-20 py-5 shadow-lg rounded-lg bg-white text-light-grayish-blue font-bold">
        <span className="inline-block">All</span>
        <span className="inline-block">Active</span>
        <span className="inline-block">Completed</span>
      </div>

      <p className="text-center mx-auto mt-3 text-light-grayish-blue">
        Drag and drop to reorder list
      </p>
    </section>
  );
};

export default Tasks;
