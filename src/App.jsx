import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

  let data = "";
  useEffect(() => {
    const dataFromLocalStorage = window.localStorage.getItem("data");
    data = JSON.parse(dataFromLocalStorage);
  }, [tasks]);

  return (
    <main className="w-full h-full font-josefin flex flex-col">
      <Header />
      <Tasks tasks={tasks} addNewTask={setTask} />
    </main>
  );
};

export default App;
