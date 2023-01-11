import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import { BsCircle } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeProvider";

const Tasks = ({ tasks, addNewTask }) => {
  const [addTask, setAddTask] = useState("");
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleOnChange(e) {
    setAddTask(e.target.value);
  }

  function handleDelete(id) {
    addNewTask(tasks.filter((task) => task.id !== id));
  }

  function handleAdd() {
    if (addTask) {
      addNewTask([...tasks, { id: uuidv4(), text: addTask, completed: false }]);
      setAddTask("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  //fired when clear is clicked
  function handleClear() {
    const complete = tasks.filter((item) => item.completed === false);
    addNewTask(complete);
  }

  //focus on input element of page load (useEffect method)
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <section className="absolute left-5 top-[110px] w-[90%]  flex flex-col gap-6 ">
      <div className=" flex items-center ">
        <input
          autoFocus={true}
          type="text"
          placeholder="Create a new todo.."
          className={` h-12 w-[350px] ${
            darkMode && "bg-very-dark-destaturated-blue text-dark-grayish-blue"
          } rounded-md pl-14 shadow-md focus:outline-none`}
          value={addTask}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <i className="absolute top-2 left-5  ">
          <BsCircle
            className={`w-6 h-6 ${
              darkMode
                ? "text-very-dark-grayish-blue"
                : "text-very-light-grayish-blue"
            } font-bold `}
          />
        </i>
        <span className="inline-block mx-1">
          <MdOutlineAddCircle
            onClick={handleAdd}
            className={`h-10 w-10 ${
              darkMode ? "text-very-dark-destaturated-blue" : "text-white"
            } `}
          />
        </span>
      </div>
      <ul
        className={`rounded-md ${
          darkMode ? "bg-very-dark-destaturated-blue" : "bg-white "
        } shadow-lg `}
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
            <p>{` ${
              tasks.filter((task) => task.completed === false).length
            } items left`}</p>
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
      <div
        className={`flex justify-between px-8 py-5 shadow-lg rounded-lg ${
          darkMode && "bg-very-dark-destaturated-blue"
        } ${darkMode ? "text-dark-grayish-blue" : "text-light-grayish-blue"} 
          font-bold  ${tasks.length === 0 && "hidden"}`}
      >
        <span className="inline-block hover:cursor-pointer">All</span>
        <span className="inline-block hover:cursor-pointer">Active</span>
        <span className="inline-block hover:cursor-pointer">Completed</span>
      </div>

      <p className="text-center mx-auto mt-3 text-light-grayish-blue">
        {tasks.length > 0 && "Drag and drop to reorder list"}
      </p>
    </section>
  );
};

export default Tasks;
