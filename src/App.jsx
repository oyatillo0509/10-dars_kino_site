import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Save from "./Pages/Save";

// Mavzuni boshqarish uchun Context yaratish
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [searchQuery, setSearchQuery] = useState("");

  // Mavzu o'zgarishlarini mahalliy saqlashga yozish va o'qish
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Mavzuni o'zgartirish funksiyasi
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route
          path="/"
          element={
            <Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          }
        />
        <Route path="/save" element={<Save />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
