import React, { useContext } from "react";
import Task from "./Task";
import { ThemeContext } from "../Context/ThemeProvider";

const DisplayTasks = ({ tasks, addNewTask }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const numberOfItems = tasks.filter((task) => task.completed === false).length;

  function handleDelete(id) {
    addNewTask(tasks.filter((task) => task.id !== id));
  }

  //fired when clear completed is clicked
  function handleClear() {
    const complete = tasks.filter((item) => item.completed === false);
    addNewTask(complete);
  }

  return (
    <ul
      className={`rounded-md ${
        darkMode ? "bg-very-dark-destaturated-blue" : "bg-white "
      } shadow-lg  mx-5 -mt-12`}
    >
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            tasks={tasks}
            onDelete={handleDelete}
            updateTask={addNewTask}
          />
        );
      })}
      {tasks.length ? (
        <li className="flex justify-between px-6 py-5 text-light-grayish-blue">
          <p>{` ${numberOfItems} item${
            numberOfItems === 1 || numberOfItems === 0 ? "" : "s"
          } left`}</p>
          <p onClick={handleClear} className="hover:cursor-pointer">
            Clear completed
          </p>
        </li>
      ) : (
        <li
          className={`px-6 py-5 ${
            darkMode ? "text-dark-grayish-blue" : "text-light-grayish-blue"
          }`}
        >
          No task available
        </li>
      )}
    </ul>
  );
};

export default DisplayTasks;
