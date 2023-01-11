import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  });

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
