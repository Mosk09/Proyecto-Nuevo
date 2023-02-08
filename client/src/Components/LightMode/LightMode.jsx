import React, { useState } from "react";
import s from "./LightMode.module.css";

export default function LightMode() {
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  const [dark, setDark] = useState(true)
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === darkTheme || theme === lightTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      setDark(false)
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      setDark(true)
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button  defaultValue={dark}
      className={dark ? s.negro : s.blanco}  
      onClick={(e) => switchTheme(e)}
    >
      {dark?<i className="bi bi-sun-fill"></i>:<i className="bi bi-moon-fill"></i>}
      {/* <i className="bi bi-brightness-low"></i> */}

    </button>
  );
}
