import React from "react";
import Logo from "../assets/Movie.svg";
import Avatar from "../assets/Avatar.svg";
import Shape from "../assets/Shape.svg";
import Shape2 from "../assets/Shape2.svg";
import Tv from "../assets/tv.svg";
import Book from "../assets/Bookmark.svg";

function Nav() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-24 h-[90vh] bg-gray-800 text-white p-5 py-7 flex flex-col items-center justify-between mt-8 ml-8 rounded">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center">
          <img src={Logo} alt="logo" className="w-full" />
        </a>

        {/* Navigation */}
        <nav className="flex flex-col items-center mt-10 gap-8">
          {[Shape, Shape2, Tv, Book].map((icon, index) => (
            <a
              href={index === 3 ? "/save" : "#"}
              key={index}
              className="flex items-center justify-center hover:bg-gray-700 p-2 rounded"
            >
              <img src={icon} alt={`icon-${index}`} className="w-6 h-6" />
            </a>
          ))}
        </nav>

        {/* Avatar */}
        <a href="#">
          <img src={Avatar} alt="avatar" className="w-full" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
