import React from "react";
import moonIcon from "../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <header className="h-52 w-full bg-mobile-light-header-bg bg-no-repeat bg-cover bg-center px-5 pt-10 relative">
      <div className="flex justify-between">
        <h1 className="uppercase text-3xl tracking-[0.375em] font-bold text-very-light-gray">
          Todo{" "}
        </h1>
        <img src={moonIcon} alt="toggle theme" className="self-center" />
      </div>
    </header>
  );
};

export default Header;
