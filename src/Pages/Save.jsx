import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Save = ({ searchQuery, setSearchQuery }) => {
  const [savedMovies, setSavedMovies] = useState([]);

  // Mahalliy saqlashdan bookmarklarni olish
  useEffect(() => {
    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setSavedMovies(bookmarks);
  }, []);

  // Bookmarkni o'chirish funksiyasi
  const handleRemoveBookmark = (movie) => {
    if (window.confirm(`Are you sure you want to remove "${movie.name}"?`)) {
      const updatedBookmarks = savedMovies.filter(
        (item) => item.id !== movie.id
      );
      setSavedMovies(updatedBookmarks);
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarks)
      );

      toast.success(`${movie.name} removed from bookmarks`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  // Bookmark qilingan filmlar ro'yxatini yaratish
  const renderSavedMovies = () => {
    if (savedMovies.length === 0) {
      return <p className="text-xl">No saved movies</p>;
    }

    return savedMovies.map((movie) => (
      <div key={movie.id} className="cards relative mt-10 w-[280px] h-[200px]">
        <span
          className="absolute left-[230px] cursor-pointer top-4 w-10 h-10 bg-yellow-500 rounded-full"
          onClick={() => handleRemoveBookmark(movie)}
        >
          <i className="fa-regular fa-bookmark ml-[14px] mt-[12px] text-white"></i>
        </span>
        {movie.poster?.url ? (
          <img
            src={movie.poster.url}
            alt={movie.name || "Movie Poster"}
            className="rounded-xl w-full h-[174px]"
          />
        ) : (
          <div className="bg-gray-700 rounded-xl w-full h-[174px] flex items-center justify-center">
            <p>No Image</p>
          </div>
        )}
        <h3 className="font-bold">{movie.year} Movie PG</h3>
        <h3 className="font-bold">{movie.name || "No Title Available"}</h3>
      </div>
    ));
  };

  return (
    <div>
      <div className="flex container mx-auto">
        <Nav />
        <div className="h-[100vh] w-full">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="overflow-auto h-[90vh] flex flex-col justify-between pb-5">
            <div className="grid grid-cols-4 gap-12 ml-9 mt-8">
              {renderSavedMovies()}
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Save;
