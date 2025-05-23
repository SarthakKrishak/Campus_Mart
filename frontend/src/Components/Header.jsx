import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useEffect } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import LoggedImage from "/LoggedImage.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

const Header = ({ color, textColor, bagUrl }) => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [notification, setNotification] = useState(1);
  const [showmenu, setShowmenu] = useState(false);

  const placeholderWords = [
    "Electronics",
    "Book",
    "Cycle",
    "Essential",
    "Mattress",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

  const handleLogin = () => {
    setLoggedin(true);
  };

  const handleMenu = () => {
    setShowmenu((prev) => !prev);
  };

  return (
    <>
      {loggedin ? (
        <nav
          style={{ backgroundColor: color, color: textColor }}
          className={`flex text-black items-center justify-between pt-6 pb-3 md:pb-4 sm:pl-10 md:pr-10 lg:pl-[4.6vw] lg:pr-[4.6vw] lg:pb-4 lg:pt-5 xl:pb-4 xl:pt-5 relative dark:bg-[#1A1D20]`}
        >
          {/* menu */}
          {showmenu ? (
            <div className="menus absolute right-20 z-20 top-20 text-white rounded-xl border border-[#BBC2C9] bg-white xl:w-[18vw] font-outfit">
              <Link
                to={"/"}
                className="flex items-center xl:px-4 xl:pt-3 xl:pb-2 xl:gap-4 transition-all duration-200 hover:bg-gray-100 rounded-t-xl"
              >
                <img src={LoggedImage} className="xl:size-14" alt="image" />
                <div className="flex flex-col">
                  <h1 className="text-black font-medium">Sanjay Srinivasan</h1>
                  <h2 className="text-[#64707D] text-xs font-medium">
                    sanjaysrinivasan@gmail.com
                  </h2>
                </div>
              </Link>
              <div className="flex flex-col text-[#1A1D20] border-t border-b border-b-[#DEDEDE] border-t-[#DEDEDE]">
                <Link className="flex items-center xl:gap-3 h-full transition-all duration-200 hover:bg-gray-100 xl:pt-3 xl:pb-2 xl:px-4">
                  <span>
                    <LuUserRound />
                  </span>
                  <h1>Profile</h1>
                </Link>
                <Link className="flex items-center xl:gap-3 transition-all duration-200 hover:bg-gray-100 xl:pt-2 xl:pb-2 xl:px-4">
                  <span>
                    <BsBoxSeam />
                  </span>
                  <h1>Orders</h1>
                </Link>
                <Link className="flex items-center xl:gap-3 transition-all duration-200 hover:bg-gray-100 xl:pt-2 xl:pb-2 xl:px-4">
                  <span>
                    <IoNotificationsOutline />
                  </span>
                  <h1>Chat</h1>
                </Link>
                <Link className="flex items-center xl:gap-3 transition-all duration-200 hover:bg-gray-100 xl:pt-2 xl:pb-2 xl:px-4">
                  <span>
                    <IoIosHeartEmpty />
                  </span>
                  <h1>Wishlist</h1>
                </Link>
                <Link className="flex items-center xl:gap-3 transition-all duration-200 hover:bg-gray-100 xl:pt-2 xl:pb-3 xl:px-4">
                  <span>
                    <CiMail />
                  </span>
                  <h1>Contact Us</h1>
                </Link>
              </div>
              <Link className="flex items-center xl:gap-3 xl:px-4 text-[#F20000] xl:pt-3 xl:pb-3 transition-all duration-200  hover:bg-red-100 rounded-b-xl">
                <span>
                  <MdOutlineLogout />
                </span>
                <h1>Logout</h1>
              </Link>
            </div>
          ) : (
            <div className="hidden absolute right-20 z-20 top-20 text-white rounded-xl border border-[#BBC2C9] bg-white xl:w-[18vw] font-outfit">
              <div className="flex items-center xl:px-4 xl:pt-3 xl:pb-2 xl:gap-4">
                <img src={LoggedImage} className="xl:size-14" alt="image" />
                <div className="flex flex-col">
                  <h1 className="text-black font-medium">Sanjay Srinivasan</h1>
                  <h2 className="text-[#64707D] text-xs font-medium">
                    sanjaysrinivasan@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex flex-col xl:gap-4 text-[#1A1D20] border-t border-b border-b-[#DEDEDE] border-t-[#DEDEDE] xl:px-4 xl:pt-3 xl:pb-3">
                <Link className="flex items-center xl:gap-2 ">
                  <span>
                    <LuUserRound />
                  </span>
                  <h1>Profile</h1>
                </Link>
                <Link className="flex items-center xl:gap-2">
                  <span>
                    <LuUserRound />
                  </span>
                  <h1>Orders</h1>
                </Link>
                <Link className="flex items-center xl:gap-2">
                  <span>
                    <LuUserRound />
                  </span>
                  <h1>Chat</h1>
                </Link>
                <Link className="flex items-center xl:gap-2">
                  <span>
                    <LuUserRound />
                  </span>
                  <h1>Wishlist</h1>
                </Link>
                <Link className="flex items-center xl:gap-2">
                  <span>
                    <LuUserRound />
                  </span>
                  <h1>Contact Us</h1>
                </Link>
              </div>
              <Link className="flex items-center xl:gap-2 xl:px-4 text-[#F20000] xl:pt-3 xl:pb-3">
                <span>
                  <LuUserRound />
                </span>
                <h1>Logout</h1>
              </Link>
            </div>
          )}

          <div className="flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins dark:text-white">
            <Link to="/">
              <RiMenu2Line size={25} />
            </Link>
            <div className="flex items-center font-bold text-lg gap-[1vw] dark:text-white">
              {darkMode ? (
                <img src={"/whitebag.png"} className="size-4 lg:size-5" />
              ) : (
                <img src={bagUrl} className="size-4 lg:size-5" />
              )}

              <a href="/">Campus Mart</a>
            </div>
            <MdShoppingCart size={25} />
          </div>

          <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base sm:flex lg:text-xl xl:text-[1.4vw] font-poppins md:gap-[0.6vw] lg:gap-[0.5vw] dark:text-white">
            {darkMode ? (
              <img src={"/bluebag.png"} className="size-3 lg:size-5" />
            ) : (
              <img src={"/bag.png"} className="size-3 lg:size-5" />
            )}
            <a
              href="/"
              className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:text-white"
            >
              Campus Mart
            </a>
          </div>

          <div className="relative items-center bg-white dark:bg-[#1A1D20] rounded-full shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 dark:outline-[#848484] dark:outline-1 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex cursor-pointer xl:py-[0.5vh] lg:pr-3 lg:mr-[2vw] xl:mr-[7vw]">
            <input
              className="rounded-md px-3 outline-none w-[25vw] lg:w-[27vw] placeholder-transparent text-black sm:py-[0.4vh]  md:py-[0.9vh] lg:py-[0.5vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs lg:px-6 relative z-10 bg-transparent"
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
                <span className="text-gray-500 dark:text-[#64707D]">
                  Search for
                </span>
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
              className="text-black size-4 lg:size-5 mr-2 cursor-pointer dark:text-[#64707D]"
            />
          </div>

          <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-7 lg:gap-11 font-medium xl:gap-10">
            <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
              <Link
                className="flex items-center text-white bg-gradient-to-l from-blue-600 to-indigo-600 xl:px-5 xl:text-base xl:py-[1.1vh] rounded-full xl:gap-2"
                to={"/upload"}
              >
                <IoIosAddCircleOutline className="xl:size-5" />
                <h1>Sell Now</h1>
              </Link>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="transition duration-500 ease-in-out"
              >
                {darkMode ? (
                  <IoIosSunny className="text-[#FFD119] sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                ) : (
                  <IoMdMoon className="text-[#323232] sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                )}
              </button>

              <button
                className="relative dark:text-white"
                aria-label="Notifications"
              >
                <IoNotificationsOutline className="sm:size-4 text-[#323232] md:size-4 lg:size-6 dark:text-[#848484]" />
                {notification > 0 && (
                  <span className="absolute bg-[#FF0F0F] text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                    {notification}
                  </span>
                )}
              </button>
              <button
                className="relative dark:text-white"
                aria-label="Notifications"
              >
                <FiMessageSquare className="sm:size-4 text-[#323232] md:size-4 lg:size-6 dark:text-[#848484]" />
                {notification > 0 && (
                  <span className="absolute bg-[#09C712] text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                    {notification}
                  </span>
                )}
              </button>
            </div>
            <div
              onClick={handleMenu}
              className="rounded-full object-contain xl:size-10 bg-red-600 cursor-pointer transition-all duration-200 hover:scale-105"
            >
              <img src={LoggedImage} alt="image" />
            </div>
          </div>
        </nav>
      ) : (
        <nav
          style={{ backgroundColor: color, color: textColor }}
          className={`flex text-black items-center justify-between pt-6 pb-3 md:pb-4 sm:pl-10 md:pr-10 lg:pl-[4.6vw] lg:pr-[4.6vw] lg:pb-4 lg:pt-5 xl:pb-4 xl:pt-5 dark:bg-[#1A1D20]`}
        >
          <div className="flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins dark:text-white">
            <Link to="/">
              <RiMenu2Line size={25} />
            </Link>
            <div className="flex items-center font-bold text-lg gap-[1vw] dark:text-white">
              {darkMode ? (
                <img src={"/whitebag.png"} className="size-4 lg:size-5" />
              ) : (
                <img src={bagUrl} className="size-4 lg:size-5" />
              )}

              <a href="/">Campus Mart</a>
            </div>
            <MdShoppingCart size={25} />
          </div>

          <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base sm:flex lg:text-xl xl:text-[1.4vw] font-poppins md:gap-[0.6vw] lg:gap-[0.5vw] dark:text-white">
            {darkMode ? (
              <img src={"/bluebag.png"} className="size-3 lg:size-5" />
            ) : (
              <img src={"/bag.png"} className="size-3 lg:size-5" />
            )}
            <a
              href="/"
              className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:text-white"
            >
              Campus Mart
            </a>
          </div>

          <div className="relative items-center bg-white dark:bg-[#1A1D20] rounded-full shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 dark:outline-[#848484] dark:outline-1 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex cursor-pointer xl:py-[0.5vh] lg:pr-3 lg:mr-[2vw] xl:mr-[18vw]">
            <input
              className="rounded-md px-3 outline-none w-[25vw] lg:w-[27vw] placeholder-transparent text-black sm:py-[0.4vh]  md:py-[0.9vh] lg:py-[0.5vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs lg:px-6 relative z-10 bg-transparent"
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
                <span className="text-gray-500 dark:text-[#64707D]">
                  Search for
                </span>
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
              className="text-black size-4 lg:size-5 mr-2 cursor-pointer dark:text-[#64707D]"
            />
          </div>

          <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-7 lg:gap-11 font-medium xl:gap-7">
            <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="transition duration-500 ease-in-out"
              >
                {darkMode ? (
                  <IoIosSunny className="text-[#FFD119] sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                ) : (
                  <IoMdMoon className="text-[#323232] sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                )}
              </button>
            </div>

            <div className="flex items-center xl:gap-6">
              <Link
                to="/"
                className="md:text-[1.7vw] xl:text-base font-poppins dark:text-white"
              >
                Sign up
              </Link>
              <button
                onClick={handleLogin}
                className="transition duration-200 md:text-[1.7vw] xl:text-base font-poppins bg-black text-white xl:px-6 xl:py-[1.1vh] rounded-full dark:bg-white dark:text-black"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
