import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { ThemeContext } from "./Context/ThemeProvider";

const App = () => {
  const [tasks, setTask] = useState([]);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

  // let data = "";
  // useEffect(() => {
  //   const dataFromLocalStorage = window.localStorage.getItem("data");
  //   data = JSON.parse(dataFromLocalStorage);
  // }, [tasks]);

  return (
    <main
      className={`w-full h-full relative  font-josefin ${
        darkMode ? "bg-very-dark-blue" : "bg-very-light-gray"
      } flex flex-col `}
    >
      <Header />
      <Tasks tasks={tasks} addNewTask={setTask} />
    </main>
  );
};

export default App;
