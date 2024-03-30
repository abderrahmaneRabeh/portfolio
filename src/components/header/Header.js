import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => setShowModel(!showModel)}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Article">Article</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Speaking">Speaking</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentMode"));
        }}
        className={theme === "dark"? "icon-moon flex": "icon-sun flex"}
      ></button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                onClick={() => setShowModel(false)}
                className="icon-remove"
              ></button>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Article">Article</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Speaking">Speaking</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
