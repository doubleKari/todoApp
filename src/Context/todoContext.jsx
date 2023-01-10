import { createContext } from "react";

const todoContext = (children) => {
  const [tasks, setTask] = useState([
    {
      id: 0,
      text: "Joke around the park 3x",
      completed: true,
    },
    {
      id: 1,
      text: "10 minutes meditation",
      completed: false,
    },
    {
      id: 2,
      text: "Read for 1 hour",
      completed: false,
    },
    {
      id: 3,
      text: "Pick up groceries",
      completed: false,
    },
    {
      id: 4,
      text: "Complete Todo App on Frontend  Mentor",
      completed: false,
    },
  ]);

  return (
    <todoContext.Provider value={{ tasks, setTask }}>
      {children}
    </todoContext.Provider>
  );
};

export default todoContext;
