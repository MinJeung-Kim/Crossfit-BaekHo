import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  const toggleSearchMode = () => {
    setSearchMode(!searchMode); 
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <ModeContext.Provider
      value={{ darkMode, toggleDarkMode, searchMode, toggleSearchMode }}
    >
      {children}
    </ModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
export const useMode = () => useContext(ModeContext);
