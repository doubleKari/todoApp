import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { ThemeContext } from "./Context/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [tasks, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("data")) || [];
  });

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main
      className={`w-full h-full relative  font-josefin ${
        darkMode ? "bg-very-dark-blue" : "bg-very-light-gray"
      } flex flex-col `}
    >
      <Header />
      <BrowserRouter>
        <Tasks tasks={tasks} addNewTask={setTask} />
      </BrowserRouter>
    </main>
  );
};

export default App;
