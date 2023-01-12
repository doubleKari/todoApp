import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsCircle } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeProvider";
import DisplayTasks from "./DisplayTasks";

const Tasks = ({ tasks, addNewTask }) => {
  const [addTask, setAddTask] = useState("");
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleOnChange(e) {
    setAddTask(e.target.value);
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

  // fired when "All" is clicked
  function handleViewAll() {
    const allTask = tasks.slice();
    console.log();
  }

  //fired when "Active" is clicked
  function handleViewActive() {
    addNewTask(tasks.filter((item) => item.completed !== true));
  }

  //fired when "Completed is clicked"
  function handleViewCompleted() {
    if (tasks.filter((item) => item.completed).length !== 0) {
      addNewTask(tasks.filter((item) => item.completed));
    }
  }

  //focus on input element of page load (useEffect method)
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <>
      <div className=" flex items-center w-[90%]  absolute left-5  top-[110px]">
        <input
          autoFocus={true}
          type="text"
          placeholder="Create a new todo.."
          className={` h-12 w-[350px] block relative  ${
            darkMode && "bg-very-dark-destaturated-blue text-dark-grayish-blue"
          } rounded-md pl-14 shadow-md focus:outline-none`}
          value={addTask}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <i className="absolute left-5  ">
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

      {/* display task component */}
      <DisplayTasks tasks={tasks} addNewTask={addNewTask} />

      <div
        className={`flex justify-between px-8 py-5 mx-5 shadow-lg rounded-lg mb-8  ${
          darkMode && "bg-very-dark-destaturated-blue"
        } ${
          darkMode
            ? "text-dark-grayish-blue"
            : "text-light-grayish-blue-light-theme"
        } 
        font-bold z-10  ${tasks.length === 0 && "hidden"}`}
      >
        <span
          onClick={handleViewAll}
          className="hover:text-bright-blue inline-block hover:cursor-pointer"
        >
          All
        </span>
        <span
          onClick={handleViewActive}
          className="hover:text-bright-blue inline-block hover:cursor-pointer"
        >
          Active
        </span>
        <span
          onClick={handleViewCompleted}
          className="hover:text-bright-blue inline-block hover:cursor-pointer"
        >
          Completed
        </span>
      </div>
      {/* <p
        className={`text-center mx-auto w-full ${
          darkMode ? "text-light-grayish-blue" : "text-dark-grayish-blue"
        }  absolute bottom-4`}
      >
        &copy;Copyright 2023 &bull; Code by doubleKari
      </p> */}

      {/* <p className="text-center mx-auto mt-3 text-light-grayish-blue">
        {tasks.length > 0 && "Drag and drop to reorder list"}
      </p> */}
    </>
  );
};

export default Tasks;
