import { createContext, useState } from "react";

export const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
