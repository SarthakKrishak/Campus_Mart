import React, { useState } from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiNotificationFill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import bag from '/bag.png'
import bluebag from '/bluebag.png'

const Header = ({ color,textColor }) => {

    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [notification, setNotification] = useState(1);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const handleSearchBar = (e) => {
        setSearch(e.target.value);
    }


    return (
        <nav style={{ backgroundColor: color, color: textColor }} className={`flex text-black items-center justify-between pt-6 pb-3 sm:pl-10 md:pr-10 lg:pl-16 lg:pr-16`}>
            <div className='flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins'>
                <Link to="/"><IoChevronBackOutline size={22} /></Link>
                <div className="flex items-center font-bold text-base gap-[1vw] ">
                    <img src={bluebag} className='size-4 lg:size-5' />
                    <a href="/">Campus Mart</a>
                </div>
                <IoIosMenu size={25}/>
            </div>

            <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base lg:gap-[0.6vw] sm:flex lg:text-xl xl:text-[1.4vw] font-poppins md:gap-[0.6vw]">
                <img src={bag}  className='size-3 lg:size-5'/>
                <a href="/">Campus Mart</a>
            </div>

            
            
            <div className="items-center bg-white rounded-sm shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-offset-[3px] md:outline-offset-[3px] outline-neutral-200 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex">
                <input
                    className="rounded-sm px-3 outline-none w-[25vw] placeholder:text-gray-500 text-black sm:py-[0.4vh] lg:py-[2vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs"
                    placeholder="Search for Product"
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleSearchBar}
                    aria-label="Search products"
                />
                <CiSearch size={22} className='sm:text-black size-4 lg:size-5 mr-2'/>
            </div>

            <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-7 lg:gap-11 font-medium xl:gap-14">
                <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
                    <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
                        <IoIosSunny className={darkMode ? 'text-red-400  sm:size-4 lg:size-6 md:size-5' : 'text-black sm:size-4 lg:size-6 md:size-5'} />
                    </button>
                    <button className='relative' aria-label="Notifications">
                        <RiNotificationFill className='sm:size-4 md:size-5 lg:size-6'/>
                        {notification > 0 && (
                            <span className="absolute bg-red-500 text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                                {notification}
                            </span>
                        )}
                    </button>
                </div>
                <Link to="/" className="hover:text-blue-500 transition duration-200 md:text-[1.6vw] lg:text-[1.7vw] xl:text-[1.2vw] font-poppins font-medium">Orders</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200 lg:text-[1.7vw] xl:text-[1.2vw] font-poppins md:text-[1.6vw]">Chats</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200 lg:text-[1.7vw] xl:text-[1.2vw] font-poppins md:text-[1.6vw]">Menu</Link>

            </div>

                
 
        </nav>

    )
}

export default Header