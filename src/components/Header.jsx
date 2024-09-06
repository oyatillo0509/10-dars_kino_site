import React, { useContext } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../App";

function Header({ searchQuery, setSearchQuery }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      className={`w-full max-w-xs ml-9 mt-6 rounded ${
        theme === "dark" ? "bg-[#10141E]" : "bg-white"
      }`}
    >
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Type here"
          value={searchQuery}
          onChange={handleSearchChange}
          className={`input input-bordered w-full pl-10 ${
            theme === "dark"
              ? "bg-[#10141E] text-white"
              : "bg-gray-100 text-gray-800"
          } outline-none`}
        />
        <label className="swap swap-rotate absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            readOnly
          />
          <FaMoon
            className={`swap-off text-gray-500 ${
              theme === "dark" ? "hidden" : ""
            }`}
          />
          <FaSun
            className={`swap-on text-yellow-500 ${
              theme === "dark" ? "" : "hidden"
            }`}
          />
        </label>
      </div>
    </div>
  );
}

export default Header;
