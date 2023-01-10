import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import { BsCircle } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";

const Tasks = ({ tasks, addNewTask }) => {
  const [addTask, setAddTask] = useState("");

  function handleOnChange(e) {
    setAddTask(e.target.value);
  }

  function handleDelete(id) {
    addNewTask(tasks.filter((task) => task.id !== id));
  }

  function handleAdd() {
    if (addTask) {
      addNewTask([...tasks, { id: uuidv4(), text: addTask }]);
      setAddTask("");
    }
  }

  return (
    <section className="absolute left-5 top-[110px] w-[90%] flex flex-col gap-6">
      <div className=" flex items-center ">
        <input
          type="text"
          placeholder="Create a new todo.."
          className=" h-12 w-[300px] rounded-md pl-14 shadow-md focus:outline-none"
          value={addTask}
          onChange={handleOnChange}
        />
        <i className="absolute top-2 left-5  ">
          <BsCircle className="w-6 h-6 text-very-light-grayish-blue font-bold" />
        </i>
        <span className="inline-block mx-1">
          <MdOutlineAddCircle
            onClick={handleAdd}
            className="h-12 w-12 text-white"
          />
        </span>
      </div>
      <ul className="rounded-md bg-white shadow-lg ">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              tasks={tasks}
              onDelete={handleDelete}
            />
          );
        })}
        <li className="flex justify-between px-6 py-5 text-light-grayish-blue">
          <p>{`${
            tasks.filter((task) => task.completed === false).length
          } items left`}</p>
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
