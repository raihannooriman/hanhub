"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";
type ThemeContextProviderProps = { children: React.ReactNode };
type ThemeContextType = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextType | null>(null);
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  const toggleTheme = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      updateTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      updateTheme("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
