import React, { useState } from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiNotificationFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";

const Header = ({ color,textColor }) => {

    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [notification, setNotification] = useState(1);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const handleSearchBar = (e) => {
        setSearch(e.target.value);
    }


    return (
        <nav style={{ backgroundColor: color, color: textColor }} className={ `flex text-black items-center justify-between pl-14 pr-10 pt-5 pb-4`}>
            <div className="flex items-center font-bold text-2xl gap-[0.4vw]">
                <RiShoppingCartFill />
                <Link to="/"> <h1>Campus Mart</h1></Link>
            </div>
            <div className="flex items-center bg-white rounded-lg border border-slate-300 pr-2 mr-36 shadow-sm shadow-slate-200 hover:shadow-md transition ease-in-out duration-200">
                <input
                    className="rounded-lg px-4 py-[1vh] outline-none w-[25vw] placeholder:text-slate-600"
                    placeholder="Search Product"
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleSearchBar}
                    aria-label="Search products"
                />
                <CiSearch size={22}/>
            </div>
            <div className="flex items-center gap-12 font-semibold text-[1.1vw] pr-6">
                <div className="flex justify-center items-center text-[1.5vw] gap-8">
                    <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
                        <MdDarkMode className={darkMode ? 'text-yellow-400' : 'text-black'} />
                    </button>
                    <button className='relative' aria-label="Notifications">
                        <RiNotificationFill/>
                        {notification > 0 && (
                            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                                {notification}
                            </span>
                        )}
                    </button>
                </div>
                <Link to="/" className="hover:text-blue-500 transition duration-200">Orders</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200">Chats</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200">Menu</Link>
            </div>
        </nav>

    )
}

export default Header