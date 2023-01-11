import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  });

  //always set theme to localStorage when value of darkMode changes
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
