import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import todoContext from "./Context/todoContext";

const App = () => {
  // const [tasks, setTask] = useState([
  //   {
  //     id: 0,
  //     text: "Joke around the park 3x",
  //     completed: true,
  //   },
  //   {
  //     id: 1,
  //     text: "10 minutes meditation",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     text: "Read for 1 hour",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     text: "Pick up groceries",
  //     completed: false,
  //   },
  //   {
  //     id: 4,
  //     text: "Complete Todo App on Frontend  Mentor",
  //     completed: false,
  //   },
  // ]);

  return (
    <main className="w-full h-full font-josefin flex flex-col">
      <Header />
      <todoContext>
        <Tasks tasks={tasks} addNewTask={setTask} />
      </todoContext>
    </main>
  );
};

export default App;
