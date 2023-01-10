import React, { useState } from "react";
import { createContext } from "react";

const ThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
