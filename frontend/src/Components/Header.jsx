import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiNotificationFill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import bag from "/bag.png";
import bluebag from "/bluebag.png";
import { useEffect } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";

const Header = ({ color, textColor, bagUrl }) => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(1);
  const placeholderWords = [
    "Electronics",
    "Book",
    "Cycle",
    "Essential",
    "Mattress",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSearchBar = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholderWords.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      style={{ backgroundColor: color, color: textColor }}
      className={`flex text-black items-center justify-between pt-6 pb-3 sm:pl-10 md:pr-10 lg:pl-[4.6vw] lg:pr-[4.6vw] lg:pb-5 lg:pt-6`}
    >
      <div className="flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins">
        <Link to="/">
          <RiMenu2Line size={22} />
        </Link>
        <div className="flex items-center font-bold text-base gap-[1vw]">
          <img src={bluebag} className="size-4 lg:size-5" />

          <a href="/">Campus Mart</a>
        </div>
        <MdShoppingCart size={25} />
      </div>

      <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base sm:flex lg:text-xl xl:text-[1.4vw] font-poppins md:gap-[0.6vw] lg:gap-[0.5vw]">
        <img src={bagUrl} className="size-3 lg:size-5" />
        <a href="/">Campus Mart</a>
      </div>

      <div className="relative items-center bg-white rounded-md shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex cursor-pointer xl:py-[0.5vh] lg:pr-3 lg:mr-[2vw] xl:mr-[5vw] md:py-[1.2vh]">
        <input
          className="rounded-md px-3 outline-none w-[25vw] lg:w-[27vw] placeholder-transparent text-black sm:py-[0.4vh] lg:py-[0.1vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs lg:px-6 relative z-10 bg-transparent"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearchBar}
          aria-label="Search products"
        />

        {/* Animated Placeholder Text */}
        {search === "" && (
          <span
            className={`absolute left-4 lg:left-6 flex items-center gap-1 md:text-sm xl:text-base lg:text-sm`}
          >
            <span className="text-gray-500">Search for</span>
            <span
              className={` text-[#364EF2] pointer-events-none transition-opacity duration-500 z-0 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {placeholderWords[placeholderIndex]}
            </span>
          </span>
        )}

        <CiSearch
          size={22}
          className="text-black size-4 lg:size-5 mr-2 cursor-pointer"
        />
      </div>

      <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-7 lg:gap-11 font-medium xl:gap-14">
        <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            <IoIosSunny
              className={
                darkMode
                  ? "text-red-400  sm:size-4 lg:size-6 md:size-5"
                  : "text-black sm:size-4 lg:size-6 md:size-5"
              }
            />
          </button>
          <button className="relative" aria-label="Notifications">
            <RiNotificationFill className="sm:size-4 md:size-4 lg:size-6" />
            {notification > 0 && (
              <span className="absolute bg-red-500 text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                {notification}
              </span>
            )}
          </button>
        </div>
        <Link
          to="/"
          className="hover:text-blue-500 transition duration-200 md:text-[1.7vw] xl:text-[1.2vw] font-poppins font-medium"
        >
          Orders
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 transition duration-200 md:text-[1.7vw] xl:text-[1.2vw] font-poppins"
        >
          Chats
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 transition duration-200 md:text-[1.7vw] xl:text-[1.2vw] font-poppins"
        >
          Menu
        </Link>
      </div>
    </nav>
  );
};

export default Header;
