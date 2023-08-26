"use client";
import { FC } from "react";
import { useState, useEffect } from "react";
interface useThemeSwitcherProps {}

const useThemeSwitcher: FC<useThemeSwitcherProps> = ({}) => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  });
  return <div>useThemeSwitcher</div>;
};

export default useThemeSwitcher;
