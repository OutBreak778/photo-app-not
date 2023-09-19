"use client";

import React from "react";
import { SunIcon, MoonIcon } from "./ThemeIcon";
import ThemeSwitcher from "./ThemeSwitcher";
const ToggleMode = () => {
  const [mode, setMode] = ThemeSwitcher();
  return (
    <div>
      <li
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="relative right-0 bottom-4 cursor-pointer px-4 py-2 border-solid rounded-lg flex flex-col items-center justify-center "
      >
        {mode === "dark" ? (
          <MoonIcon className={"fill-white"} />
        ) : (
          <SunIcon className={"fill-black "} />
        )}
      </li>
    </div>
  );
};

export default ToggleMode;
