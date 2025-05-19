import React, { useEffect, useState } from "react";
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
import bannerRight from "/bannerRight.png";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

const Home = () => {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let isDragging = false;

  const onMouseDown = (e) => {
    isDown = true;
    isDragging = false;
    sliderRef.current.classList.add("active");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove("active");
  };

  const onMouseUp = (e) => {
    isDown = false;
    sliderRef.current.classList.remove("active");

    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) {
      isDragging = true;
    }
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const [search, setSearch] = useState("");

  const placeholderWords = [
    "Electronics",
    "Book",
    "Cycle",
    "Essential",
    "Mattress",
  ];

  const handleSearchBar = (e) => {
    setSearch(e.target.value);
  };

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);
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
    <div className="w-full bg-white relative">
      <Header bagUrl={"/bag.png"} />
      {/* search bar */}
      <div className="flex items-center bg-white rounded-md  pr-2 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.20)] border border-stone-300 hover:shadow-md transition ease-in-out duration-200 sm:hidden mr-4 ml-4 mt-2 font-poppins">
        <input
          className="rounded-xl px-5 outline-none w-full placeholder:text-[#AAB9C5] text-black py-[1.9vh] text-sm placeholder-transparent relative z-10 bg-transparent"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearchBar}
          aria-label="Search products"
        />
        {/* Animated Placeholder Text */}
        {search === "" && (
          <span className={`absolute left-9 lg:left-6 flex items-center gap-1 text-sm`}>
            <span className="text-slate-400">Search for</span>
            <span
              className={` text-[#364EF2] pointer-events-none transition-opacity duration-500 z-0 ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
              {placeholderWords[placeholderIndex]}
            </span>
          </span>
        )}
        <CiSearch size={22} className="text-[#64707D] size-6 mr-3" />
      </div>

      <div>
        {/* Blue banner animated code */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:h-[48vh] bg-gradient-to-l from-blue-600 to-indigo-600 rounded-md md:rounded-xl ml-[4.5vw] mr-[4.5vw] mt-4 flex mb-4 relative shadow-[0px_8.196179389953613px_8.196179389953613px_0px_rgba(0,0,0,0.12)]"
        >
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="w-full h-full"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={900}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <img
                width={170}
                src="\assets\circle.png"
                alt="image"
                className="absolute bottom-0 lg:left-72 md:left-36 hidden md:block"
              />

              <div className="flex h-full w-full items-center justify-between lg:px-20 md:px-10 px-5 relative">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-white lg:w-1/2"
                >
                  <h1 className="lg:text-[2.2vw] md:text-[3vw] text-sm font-bold leading-tight font-figtree">
                    Unlock Deals, Share Essentials, <br />
                    Simplify Campus Living!
                  </h1>
                  <p className="lg:text-[1.4vw] md:text-[2vw] text-[3vw] lg:leading-7 md:leading-5  text-gray-200 font-medium mt-2 font-figtree">
                    Your trusted platform to simplify student life
                    <br />
                    Buy, sell & connect easily.
                  </p>
                  <Link
                    to="/upload"
                    className="bg-white text-[#364EF2] font-bold rounded-md lg:py-2 lg:px-11 lg:text-xl md:text-base text-xs inline-flex lg:mt-6 md:mt-4 mt-3 shadow-md transition-transform transform lg:hover:scale-105 py-[0.8vh] px-5 font-robotoFlex duration-500 ease-in-out"
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
                    className="absolute lg:size-[25vw] size-[30vw] h-56 z-0"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src={bannerRight}
                    alt="Main Visual"
                    className="absolute lg:size-[26vw] md:size-[30vw] lg:mt-20 size-[39vw] z-10 mt-10"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <img
                width={170}
                src="\assets\circle.png"
                alt="image"
                className="absolute bottom-0 left-72"
              />
              <div className="flex h-full w-full items-center justify-between lg:px-20 md:px-10 px-5 relative">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-white lg:w-1/2"
                >
                  <h1 className="lg:text-[2.2vw] md:text-[3vw] text-sm font-bold leading-tight font-figtree">
                    Find What You Need, <br />
                    Sell What You Don't!
                  </h1>
                  <p className="lg:text-[1.4vw] md:text-[2vw] text-[3vw] lg:leading-7 md:leading-5  text-gray-200 font-medium mt-2 font-figtree">
                    The perfect place to buy, sell, and discover
                    <br />
                    amazing deals all in one spot!
                  </p>
                  <Link
                    to="/upload"
                    className="bg-white text-[#364EF2] font-bold rounded-md lg:py-2 lg:px-7 lg:text-xl md:text-base text-xs inline-flex lg:mt-6 md:mt-4 mt-3 shadow-md transition-transform transform lg:hover:scale-105 py-[0.8vh] px-5 font-robotoFlex duration-500 ease-in-out"
                  >
                    Explore Now
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
                    className="absolute lg:size-[25vw] size-[30vw] h-56 z-0"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src={bannerRight}
                    alt="Main Visual"
                    className="absolute lg:size-[26vw] md:size-[30vw] lg:mt-20 size-[39vw] z-10 mt-10"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <img
                width={170}
                src="\assets\circle.png"
                alt="image"
                className="absolute bottom-0 left-72"
              />
              <div className="flex h-full w-full items-center justify-between lg:px-20 md:px-10 px-5 relative">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-white lg:w-1/2"
                >
                  <h1 className="lg:text-[2.2vw] md:text-[3vw] text-sm font-bold leading-tight font-figtree">
                    Buy Smart, Share Freely <br />
                    Simplified Campus Life!
                  </h1>
                  <p className="lg:text-[1.4vw] md:text-[2vw] text-[3vw] lg:leading-7 md:leading-5  text-gray-200 font-medium mt-2 font-figtree">
                    Where Students Connect
                    <br />
                    Trade & Save Together
                  </p>
                  <Link
                    to="/upload"
                    className="bg-white text-[#364EF2] font-bold rounded-md lg:py-2 lg:px-7 lg:text-xl md:text-base text-xs inline-flex lg:mt-6 md:mt-4 mt-3 shadow-md transition-transform transform lg:hover:scale-105 py-[0.8vh] px-5 font-robotoFlex duration-500 ease-in-out"
                  >
                    Trade Now
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
                    className="absolute lg:size-[25vw] size-[30vw] h-56 z-0"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src={bannerRight}
                    alt="Main Visual"
                    className="absolute lg:size-[26vw] md:size-[30vw] lg:mt-20 size-[39vw] z-10 mt-10"
                  />
                </div>
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

        {/* White banner*/}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-2 pb-2 md:pb-3 md:pt-3 lg:pb-6 lg:pt-6 pl-[2vw] pr-[2vw] lg:pl-[0.2vw] lg:pr-[0.2vw] ml-[4.5vw] mr-[4.5vw] rounded-md md:rounded-xl text-white flex items-center justify-between relative overflow-hidden shadow-[14.361501693725586px_10.258214950561523px_36.9295768737793px_0px_rgba(0,0,0,0.16)]"
        >
          {/* Background Image */}
          <img
            src="/assets/Group_114.png"
            alt="background"
            className="absolute bottom-12 right-[-22vw] lg:right-[-7vw] z-0 w-[60vw] max-w-[400px] h-auto md:bottom-10 lg:bottom-12 md:right-[-21vw]"
          />

          {/* White Banner Container */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full text-black rounded-lg flex"
          >
            {/* Left Text Section */}
            <div className="flex flex-col lg:pl-20 pl-6 w-2/3 justify-center">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-extrabold lg:text-[1.5vw] md:text-base text-black text-xs font-figtree tracking-wide"
              >
                Product of the Day
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-blue-600 font-bold md:text-lg lg:text-[1.8vw] text-xs font-inter lg:mt-1"
              >
                ADVERTISE YOUR PRODUCT HERE
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:text-lg md:text-sm text-[2.5vw] text-black font-medium font-inter"
              >
                Boost your chances of selling faster!
              </motion.h3>
            </div>

            {/* Right Price Section */}
            <div className="flex items-end w-1/3 lg:gap-8 gap-2 justify-end lg:pr-20 pr-2 pt-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-right flex flex-col"
              >
                <h1 className="text-slate-400 lg:text-lg text-xs font-medium font-inter md:text-sm">
                  Only at
                </h1>
                <span className="lg:text-4xl font-bold text-lg font-firaSans md:text-2xl">
                  ₹49
                </span>
              </motion.div>

              {/* Arrow Button */}
              <motion.div
                initial={{ scale: 0.5, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  to={"/price"}
                  className="rounded-full bg-indigo-600 lg:p-[0.4vw] md:p-[0.8vw] text-white lg:text-2xl flex justify-center items-center z-20 hover:scale-110 transition-transform p-1 mb-[0.2vh] lg:mb-0 md:mb-[0.3vh] text-sm"
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
        <div className="flex w-[90vw] flex-col gap-4 lg:gap-6 lg:mt-12 mt-8">
          <div className="flex items-center lg:text-[1.7vw] md:text-[2.1vw] text-sm gap-[0.4vw]">
            <img
              src="/assets/fluent-mdl2_tiles.png"
              className="size-6 lg:size-8"
              alt="image"
            />
            <h1 className="font-semibold font-poppins tracking-wide">
              Categories
            </h1>
          </div>
          <div
            ref={sliderRef}
            className="flex w-full gap-2 md:gap-4 lg:gap-6 items-center overflow-x-auto no-scrollbar cursor-grab"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            <Category
              title="Electronics"
              imageSrc="/assets/icons8-electronics-961.png"
            />
            <Category title="Books" imageSrc="/assets/icons8-books-961.png" />
            <Category title="Essentials" imageSrc="/assets/Group_116.png" />
            <Category
              title="Cycles"
              imageSrc="/assets/icons8-bicycle-961.png"
            />
            <Category title="Matress" imageSrc="/assets/icons8-bed-961.png" />
            <Category title="Others" />
          </div>
        </div>

        {/* Products section */}
        <div className="w-full lg:mt-12 mt-8 flex flex-col lg:gap-6 gap-3">
          <h1 className="w-[90vw] lg:text-[1.7vw] md:text-[2.1vw] text-sm font-bold font-poppins">
            Popular Products
          </h1>
          <div className="w-full flex flex-wrap lg:shrink-0 mt-2 lg:gap-4 gap-1 ">
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
            <ProductCard />
          </div>
        </div>
      </div>

      {/* More section */}
      <div className="w-full lg:text-[1.1vw] tex-sm flex justify-center items-center lg:p-10 p-6 font-semibold font-poppins">
        <button>More</button>
        <IoIosArrowDown className="size-4" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
