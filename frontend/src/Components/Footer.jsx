import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import whitebag from '/whitebag.png'

const Footer = () => {
    return (
        <div className="w-full h-[72vh] bg-gradient-to-l from-[#4d4ef2] to-[#005df5] pl-[4.5vw] pr-[4.5vw] relative overflow-hidden">
            <img width={250} height={250} className="absolute bottom-[-2vh] left-44" src="/assets/circle45.png" alt="image" />
            
            <img width={250} height={250} className="absolute right-[-3vh] top-[-2vh] " src="/assets/footer_circle.png" alt="image" />
            {/* top section */}
            <div className="flex justify-between h-[15vh] pt-9 w-full">
                {/* top left section */}
                <div className="flex flex-col text-white h-full gap-3">
                    <a href={"/"} className="flex items-center font-semibold text-xl gap-[0.4vw]">
                        <img src={whitebag} className='size-4 lg:size-5' />
                        <h1>Campus Mart</h1>
                    </a>
                    <h1 className="text-[4vw] leading-snug">
                        The Ultimate Marketplace for <br />
                        Students to Buy, Sell, and Trade with Ease!
                    </h1>
                </div>
                {/* top right section */}
                <div className="text-white h-full hidden flex-col gap-2 mt-9">
                    <h1 className="text-[1.4vw]">Feedback ? We're Listening!</h1>
                    <div className="relative">
                        <a href="mailto:sarthakkrishak1234@gmail.com" className=" rounded-3xl absolute z-10 py-3 bg-white text-black text-xl font-semibold px-[6.1vw]">
                            Send Us
                        </a>
                        <div className="border border-slate-200 bg-transparent rounded-3xl py-6 absolute px-32 top-2"></div>
                    </div>
                </div>
            </div>

            {/* middle section */}
            <div className="w-full h-[7vh] flex items-center">
                <button className=" rounded-3xl absolute z-10 py-2 bg-white text-black text-lg font-semibold px-7">
                    Share with friends
                </button>
               <img src="/assets/Line_11.png" alt="image"/>
            </div>

            {/* mobile top right section */}
            <div className="text-white flex flex-col gap-2 mt-5 w-full mb-10">
                <h1 className="text-[4vw] mb-1">Feedback ? We're Listening!</h1>
                <div className="relative">
                    <a href="mailto:sarthakkrishak1234@gmail.com" className=" rounded-3xl absolute z-1 py-2 bg-white text-black text-lg font-semibold px-[16vw]">
                        Send Us
                    </a>
                    <div className="border border-slate-200 bg-transparent rounded-3xl py-5 absolute px-[24vw] top-2"></div>
                </div>
            </div>

            {/* bottom section */}
            <div className="h-[30vh] w-full flex flex-col-reverse">
                {/* bottom left section */}
                <div className="flex h-1/3 gap-2 justify-start items-end pb-4">
                    <div className="rounded-full p-3 bg-[#2653DA] text-white text-2xl border-[1px] border-slate-400 hover:shadow-lg shadow-slate-300"><FaInstagram /></div>
                    <div className="rounded-full p-3 bg-[#2653DA] text-white text-2xl border-[1px] border-slate-400 hover:shadow-lg shadow-slate-300"><FaLinkedin /></div>
                    <div className="rounded-full p-3 bg-[#2653DA] text-white text-2xl border-[1px] border-slate-400 hover:shadow-lg shadow-slate-300"><FaXTwitter /></div>
                </div>
                {/* bottom right section */}
                <div className="flex h-1/2 text-lg text-white gap-24 justify-start">
                    <ul className="text-left">
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Orders</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Chats</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Dev team</Link></li>
                    </ul>
                    <ul className="text-left">
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Sell a product</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Notification</Link></li>
                        <li className="pb-5 hover:text-black transition ease-in-out duration-300"><Link>Contact us</Link></li>
                    </ul>
                </div>
            </div>

            {/* bottom most section */}
            <div className="h-[5vh] w-full pt-2">
                <hr />
                <div className="flex flex-col mt-4 text-white w-full">
                    <h3 className="font-light text-base">© 2025 All rights reserved</h3>
                    <h1 className="text-[3.5vw]">Designed and developed by <a href="https://www.linkedin.com/in/sarthakkrishak/" className="font-semibold hover:text-black transition ease-in-out blac">Sarthak</a>, <a href="" className="font-semibold hover:text-black transition ease-in-out">Kamal</a>, and <a href="" className="font-semibold hover:text-black transition ease-in-out">Anurag</a>.</h1>
                </div>
            </div>

        </div>
    );
};

export default Footer;
