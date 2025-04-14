import React, { useState } from "react";
import Category from "../Components/Category";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Home = () => {

    const [search, setSearch] = useState("");
    const handleSearchBar = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className="w-full bg-white relative selection:bg-purple-400 selection:text-black">
            <Header />
            {/* search bar */}
            <div className="flex items-center bg-white rounded-md border border-slate-300 pr-2 shadow-sm shadow-slate-200 hover:shadow-md transition ease-in-out duration-200 sm:hidden mr-4 ml-4 mt-2">
                <input
                    className="rounded-xl px-5 outline-none w-full placeholder:text-[#AAB9C5] text-black py-2 text-base"
                    placeholder="Search Product"
                    type="text"
                    name="search"
                    id="search"
                    aria-label="Search products"
                />
                <CiSearch size={22} className='text-[#64707D] size-5 mr-3' />
            </div>

            <div>     
                {/* Blue banner animated code */}
                <motion.div
                    initial={{ opacity: 0,x:20 }}
                    animate={{ opacity: 1,x:0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:h-[47vh] h-44 bg-gradient-to-l from-[#364ef2] to-[#534ff2] rounded-lg ml-[4.5vw] mr-[4.5vw] mt-4 flex mb-4 relative shadow-lg shadow-gray-400"
                >
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="w-full h-full"
                    >
                        <SwiperSlide>
                            <div className="flex h-full w-full items-center justify-between lg:px-20 px-5 relative">
                                {/* Left Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    className="text-white lg:w-1/2"
                                >
                                    <h1 className="lg:text-[2.1vw] text-sm font-bold leading-tight">
                                        Unlock Deals, Share Essentials, <br />
                                        Simply Campus Living!
                                    </h1>
                                    <p className="lg:text-[1.4vw] text-[2.3vw] text-gray-200 mt-2">
                                        Your trusted platform to simplify student life.
                                        <br />
                                        Buy, sell, and connect with ease!
                                    </p>
                                    <Link
                                        to="/upload"
                                        className="bg-white text-[#364EF2] font-bold rounded-md lg:py-2 lg:px-4 lg:text-xl text-sm inline-flex lg:mt-4 mt-2 shadow-md transition-transform transform lg:hover:scale-105 py-[0.6vh] px-2"
                                    >
                                        Sell Now
                                    </Link>
                                </motion.div>

                                {/* Right Image Section */}
                                <div className="relative w-1/2 flex justify-center items-center">
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                        src="/assets/Group_115.png"
                                        alt="Background Shape"
                                        className="absolute lg:w-[400px] h-56 z-0"
                                    />
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                                        src="/assets/image_12.png"
                                        alt="Main Visual"
                                        className="absolute lg:w-[400px] size-36 z-10 mt-10"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex h-full items-center justify-center text-white text-3xl font-bold">
                                Slide 2
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex h-full items-center justify-center text-white text-3xl font-bold">
                                Slide 3
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex h-full items-center justify-center text-white text-3xl font-bold">
                                Slide 4
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>

                {/* Blue banner code
                <div className="h-[47vh] bg-gradient-to-l from-[#364ef2] to-[#534ff2] rounded-lg ml-[4.5vw] mr-[4.5vw] mt-4 flex mb-4 relative shadow-lg shadow-gray-400">
                    <img width={170} src=".\src\assets\circle.png" alt="image" className="absolute bottom-0 left-72" />
                    <div className="flex gap-1 absolute bottom-5 right-1/2">
                        <div className="rounded-full bg-white w-2 h-2"></div>
                        <div className="rounded-full bg-white w-2 h-2"></div>
                        <div className="rounded-full bg-white w-2 h-2"></div>
                    </div>
                    <div className="flex flex-col h-full w-1/2 text-white gap-4 pl-20 pt-12 pb-12 justify-centerst">
                        <h1 className="text-[2.1vw] font-bold"> 
                            Unlock Deals, Share Essentials, <br />
                            Simply Campus Living!
                        </h1>
                        <h1 className="text-[1.4vw] text-gray-200">
                            Your trusted platform to simplify student life.
                            <br />
                            Buy, sell and connect with ease!
                        </h1>
                        <Link to={"/upload"} className="bg-white w-44 text-[#364EF2] font-bold rounded-md py-2 px-2 text-xl justify-center flex">
                            Sell Now
                        </Link>
                    </div>

                    <div className="flex h-full w-1/2 overflow-hidden justify-center items-center relative">
                        <img height={420}
                            width={400} src=".\src\assets\Group_115.png" alt="image" className="z-0 absolute"/>
                        <img
                            className="mt-1 z-10 absolute"
                            height={420}
                            width={400}
                            src=".\src\assets\image_12.png"
                            alt="image"
                        />
                    </div>
                </div> */}

                <motion.div
                    initial={{ opacity: 0, x:10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:h-[16vh] h-[14vh] ml-[4.5vw] mr-[4.5vw] lg:rounded-xl rounded-lg text-white flex items-center justify-between relative overflow-hidden shadow-lg shadow-gray-300"
                >
                    {/* Background Image */}
                    <img
                        height={350}
                        width={350}
                        src="/assets/Group_114.png"
                        alt="background"
                        className="absolute lg:right-[-6vw] bottom-10 z-0 right-[-40vw]"
                    />

                    {/* White Banner Container */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full h-full bg-white shadow-md shadow-slate-300 text-black rounded-lg flex"
                    >
                        {/* Left Text Section */}
                        <div className="flex flex-col lg:pl-16 pl-6 w-2/3 justify-center">
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="font-semibold lg:text-xl text-xs"
                            >
                                Product of the Day
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-[#364EF2] font-bold lg:text-2xl text-xs"
                            >
                                ADVERTISE YOUR PRODUCT HERE
                            </motion.h1>
                            <motion.h3
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="lg:text-base text-xs text-slate-600 font-medium"
                            >
                                Boost your chances of selling faster!
                            </motion.h3>
                        </div>

                        {/* Right Price Section */}
                        <div className="flex items-end w-1/3 lg:p-4 lg:pb-0 lg:gap-3 gap-2 justify-end lg:pr-16 pr-2 pb-5">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-right"
                            >
                                <h1 className="text-slate-600 lg:text-lg text-sm">Only at</h1>
                                <span className="lg:text-4xl font-bold text-lg">₹49</span>
                            </motion.div>

                            {/* Arrow Button */}
                            <motion.div
                                initial={{ scale: 0.5, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                            >
                                <Link
                                    to={"/price"}
                                    className="rounded-full bg-[#394FF1] lg:p-[0.4vw] text-white lg:text-2xl flex justify-center items-center z-20 hover:scale-110 transition-transform p-1 text-sm"
                                >
                                    <IoIosArrowForward />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
                {/* white banner code
                <div className="h-[16vh] ml-[4.5vw] mr-[4.5vw] rounded-xl text-white flex  items-center justify-between relative overflow-hidden shadow-md shadow-gray-300">
                    <img height={350}
                        width={350} src=".\src\assets\Group_114.png" alt="image" className="absolute right-[-6vw] bottom-10 z-0" />
                    <div className="w-full h-full bg-white shadow-md shadow-slate-300 text-black rounded-lg flex">
                        <div className="flex flex-col pl-20 w-2/3 justify-center">
                            <h1 className="font-semibold text-xl">Product of the Day</h1>
                            <h1 className="text-[#364EF2] font-bold text-2xl">ADVERTISE YOUR PRODUCT HERE</h1>
                            <h3 className="text-base text-slate-600 font-medium">Boost your chances of selling faster!</h3>
                        </div>
                        <div className="flex items-end w-1/3 p-4 gap-3 justify-end pr-20">
                            <div className="text-right">
                                <h1 className="text-slate-600 text-lg">Only at</h1>
                                <span className="text-4xl font-bold">₹49</span>
                            </div>
                            <Link to={"/price"} className="rounded-full bg-[#394FF1] p-[0.4vw] text-white text-2xl flex justify-center items-center z-20">
                                <IoIosArrowForward />
                            </Link>
                        </div>
                    </div>
                </div> */}
                
            </div>

          
            <div className="w-full min-h-screen bg-white flex flex-col items-center pl-[4.5vw] pr-[4.5vw]">

                {/* Category section */}
                <div className="flex w-[90vw] flex-col gap-4 lg:mt-10 mt-8">
                    <div className="flex items-center lg:text-[1.7vw] text-sm gap-[0.4vw]">
                        <img src="/assets/fluent-mdl2_tiles.png" className="size-6 lg:size-8" alt="image" />
                        <h1 className="font-semibold">Categories</h1>
                   </div>
                    <div className="flex w-full lg:gap-6 gap-2 items-center justify-evenly overflow-auto">
                        <Category title="Electronics" imageSrc={"/assets/icons8-electronics-961.png"}/>
                        <Category title="Books" imageSrc={"/assets/icons8-books-961.png"} />
                        <Category title="Essentials" imageSrc={"/assets/Group_116.png"} />
                        <Category title="Cycles" imageSrc={"/assets/icons8-bicycle-961.png"} />
                        <Category title="Matress" imageSrc={"/assets/icons8-bed-961.png"} />
                    </div>
                </div>

                
                {/* Products section */}
                <div className="w-full lg:mt-12 mt-8 flex flex-col lg:gap-4 gap-3">
                    <h1 className="w-[90vw] lg:text-[1.7vw] text-sm font-semibold">Popular Products</h1>
                    <div className="w-full flex flex-wrap lg:shrink-0 mt-2 lg:gap-4 gap-1 ">
                        <ProductCard/>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard /> 
                    </div>
                </div>
            </div>
            {/* More section */}
            <div className="w-full lg:text-[1.1vw] tex-sm flex justify-center items-center lg:p-10 p-6 font-semibold">
                <button>More</button>
                <IoIosArrowDown className="size-4"/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
