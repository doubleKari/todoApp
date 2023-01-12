import React, { useContext } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { ThemeContext } from "../Context/ThemeProvider";


const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <header
      className={`h-52 w-full ${
        darkMode ? "bg-mobile-dark-header-bg" : "bg-mobile-light-header-bg"
      } bg-no-repeat bg-cover bg-center px-5 pt-10`}
    >
      <div className="flex justify-between">
        <h1 className="uppercase text-3xl tracking-[0.375em] font-bold text-very-light-gray">
          Todo{" "}
        </h1>
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt="toggle theme"
          className="self-center"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
    </header>
  );
};

export default Header;
