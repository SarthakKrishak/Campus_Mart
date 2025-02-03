import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full h-[75vh] bg-gradient-to-l from-[#4d4ef2] to-[#005df5] pl-16 pr-16">
            <div className="flex justify-between h-[30vh] pt-10">
                {/* top left section */}
                <div className="flex flex-col text-white h-full w-1/2 gap-3">
                    <div className="flex gap-2 items-center font-semibold  text-2xl">
                        <RiShoppingCartFill />
                        <h1>Campus Mart</h1>
                    </div>
                    <h1 className="text-2xl leading-snug">
                        The Ultimate Marketplace for <br />
                        Students to Buy, Sell, and Trade with Ease!
                    </h1>
                </div>
                {/* top right section */}
                <div className="pr-16 text-white text-xl h-full w-1/2 flex flex-col gap-3 pl-72">
                    <h1 className="text-2xl">Feedback ? We're Listening!🤍</h1>
                    <div className="relative">
                        <button className=" rounded-3xl absolute z-10 py-3 bg-white text-black px-32 font-semibold">
                            Send us
                        </button>
                        <div className="border border-slate-200 bg-transparent rounded-3xl py-6 absolute px-40 top-3"></div>
                    </div>
                </div>
            </div>
            {/* middle section */}
            <div className="w-full h-[10vh] flex items-center">
                <button className=" rounded-3xl absolute z-10 py-3 bg-white text-black text-xl font-semibold px-12">
                    Share with friends
                </button>
               <img src="./src/assets/Line_11.png" alt="image"/>
            </div>
            {/* bottom section */}
            <div className="h-[25vh] w-full flex">
                {/* bottom left section */}
                <div className="flex w-1/2 h-full gap-2 justify-start items-end pb-4">
                    <div className="rounded-full p-3 bg-[#2653DA] text-white text-2xl border-[1px] border-slate-400 hover:shadow-lg shadow-slate-300"><FaInstagram /></div>
                    <div className="rounded-full p-3 bg-[#2653DA] text-white text-2xl border-[1px] border-slate-400 hover:shadow-lg shadow-slate-300"><FaLinkedin /></div>
                    <div className="rounded-full p-3 bg-[#2653DA] text-white text-2xl border-[1px] border-slate-400 hover:shadow-lg shadow-slate-300"><FaXTwitter /></div>
                </div>
                {/* bottom right section */}
                <div className="flex w-1/2 h-full text-2xl text-white gap-24 items-end justify-end">
                    <ul className="text-right">
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Orders</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Chats</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Dev team</Link></li>
                    </ul>
                    <ul className="text-right">
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Sell a product</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Notification</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Contact us</Link></li>
                    </ul>
                </div>
            </div>
            {/* bottom most section */}
            <div className="h-[5vh] w-full pt-2">
                <hr />
                <div className="flex items-center justify-between mt-4 text-white">
                    <h3 className="font-light text-lg">© 2025 All rights reserved</h3>
                    <h1 className="text-lg">Designed and developed by <a href="https://www.linkedin.com/in/sarthakkrishak/" className="font-semibold hover:text-black transition ease-in-out blac">Sarthak</a>, <a href="" className="font-semibold hover:text-black transition ease-in-out">Kamal</a>, and <a href="" className="font-semibold hover:text-black transition ease-in-out">Anurag</a>.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;
