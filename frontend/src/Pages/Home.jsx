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
    <div className="w-full bg-white dark:bg-[#131313] relative">
      <Header bagUrl={"/bag.png"} />
      {/* search bar */}
      <div className="flex items-center bg-white rounded-md  pr-2 shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 hover:shadow-md transition ease-in-out duration-200 sm:hidden mr-4 ml-4 mt-2 font-poppins">
        <input
          className="rounded-xl px-5 outline-none w-full placeholder:text-[#AAB9C5] text-black py-[1.4vh] text-sm placeholder-transparent relative z-10 bg-transparent"
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
            className={`absolute left-9 lg:left-6 flex items-center gap-1 text-sm`}
          >
            <span className="text-slate-400">Search for</span>
            <span
              className={` text-[#364EF2] pointer-events-none transition-opacity duration-500 z-0 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {placeholderWords[placeholderIndex]}
            </span>
          </span>
        )}
        <CiSearch size={22} className="text-[#64707D] size-6 mr-3" />
      </div>

      <div className="flex flex-col">
        {/* Blue banner code */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-auto min-h-[22vh] md:min-h-[24vh] md:h-auto lg:min-h-[22vh] lg:h-auto xl:min-h-[48vh] xl:h-auo bg-gradient-to-l from-blue-600 to-indigo-600 rounded-md md:rounded-xl ml-[4.5vw] mr-[4.5vw] mt-4 flex mb-4 relative shadow-[0px_8.196179389953613px_8.196179389953613px_0px_rgba(0,0,0,0.12)]"
        >
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={900}
            className="dark:bg-zinc-900 rounded-md md:rounded-xl"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <img
                width={170}
                src="\assets\circle.png"
                alt="image"
                className="absolute bottom-0 xl:left-72 lg:left-48 md:left-40 md:bottom-[-1.3vh] lg:bottom-0 hidden md:block "
              />

              <div className="flex h-full w-full items-center justify-between xl:px-20 lg:px-14 md:px-10 px-5 relative">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-white w-1/2"
                >
                  <h1 className="lg:text-[2.5vw] xl:text-[2.2vw] md:text-[2.7vw] text-[2.98vw] font-bold leading-tight font-figtree">
                    Unlock Deals, Share Essentials,{" "}
                    <br className="hidden md:block" />
                    Simplify Campus Living!
                  </h1>
                  <p className="lg:text-[1.7vw] xl:text-[1.4vw] md:text-[2vw] text-[2.7vw] lg:leading-7 md:leading-5  text-gray-200 font-medium mt-2 font-figtree">
                    Your trusted platform to simplify student life
                    <br className="hidden sm:block" /> Buy, sell & connect
                    easily.
                  </p>
                  <Link
                    to="/upload"
                    className="bg-white text-[#364EF2] font-bold rounded-md md:py-2 xl:py-2 lg:py-[0.5vh] xl:px-11 lg:px-7 xl:text-xl lg:text-lg md:text-base text-xs inline-flex lg:mt-4 xl:mt-6 md:mt-4 mt-3 shadow-md transition-transform transform lg:hover:scale-105 py-[0.8vh] px-4 font-robotoFlex duration-500 ease-in-out dark:bg-gradient-to-r from-blue-600 to-indigo-600 dark:text-white"
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
                    className="absolute md:size-[32vw] xl:size-[25vw] lg:size-[25vw] size-[30vw] md:h-80 lg:h-[28vh] h-56 z-0"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src={bannerRight}
                    alt="Main Visual"
                    className="absolute xl:size-[26vw] lg:size-[33vw] md:size-[35vw] xl:mt-20 lg:mt-16 size-[45vw] z-10 mt-10"
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
                className="absolute bottom-0 xl:left-72 lg:left-48 md:left-40 md:bottom-[-1.3vh] lg:bottom-0 hidden md:block"
              />

              <div className="flex h-full w-full items-center justify-between xl:px-20 lg:px-14 md:px-10 px-5 relative">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-white w-1/2"
                >
                  <h1 className="lg:text-[2.5vw] xl:text-[2.2vw] md:text-[2.7vw] text-[2.98vw] font-bold leading-tight font-figtree">
                    Find What You Need, <br />
                    Sell What You Don't!
                  </h1>
                  <p className="lg:text-[1.7vw] xl:text-[1.4vw] md:text-[2vw] text-[2.7vw] lg:leading-7 md:leading-5  text-gray-200 font-medium mt-2 font-figtree">
                    The perfect place to buy, sell, and discover
                    <br className="hidden sm:block" /> amazing deals all in one
                    spot!
                  </p>
                  <Link
                    to="/upload"
                    className="bg-white text-[#364EF2] font-bold rounded-md md:py-2 xl:py-2 lg:py-[0.5vh] xl:px-11 lg:px-7 xl:text-xl lg:text-lg md:text-base text-xs inline-flex lg:mt-4 xl:mt-6 md:mt-4 mt-3 shadow-md transition-transform transform lg:hover:scale-105 py-[0.8vh] px-5 font-robotoFlex duration-500 ease-in-out dark:bg-gradient-to-r from-blue-600 to-indigo-600 dark:text-white"
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
                    className="absolute md:size-[32vw] xl:size-[25vw] lg:size-[25vw] size-[30vw] md:h-80 lg:h-[28vh] h-56 z-0"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src={bannerRight}
                    alt="Main Visual"
                    className="absolute xl:size-[26vw] lg:size-[33vw] md:size-[35vw] xl:mt-20 lg:mt-16 size-[45vw] z-10 mt-10"
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
                className="absolute bottom-0 xl:left-72 lg:left-48 md:left-40 md:bottom-[-1.3vh] lg:bottom-0 hidden md:block"
              />

              <div className="flex h-full w-full items-center justify-between xl:px-20 lg:px-14 md:px-10 px-5 relative">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-white w-1/2"
                >
                  <h1 className="lg:text-[2.5vw] xl:text-[2.2vw] md:text-[2.7vw] text-[2.98vw] font-bold leading-tight font-figtree">
                    Buy Smart, Share Freely <br />
                    Simplified Campus Life!
                  </h1>
                  <p className="lg:text-[1.7vw] xl:text-[1.4vw] md:text-[2vw] text-[2.7vw] lg:leading-7 md:leading-5  text-gray-200 font-medium mt-2 font-figtree">
                    Where Students Connect
                    <br className="hidden sm:block" /> Trade & Save Together
                  </p>
                  <Link
                    to="/upload"
                    className="bg-white text-[#364EF2] font-bold rounded-md md:py-2 xl:py-2 lg:py-[0.5vh] xl:px-11 lg:px-7 xl:text-xl lg:text-lg md:text-base text-xs inline-flex lg:mt-4 xl:mt-6 md:mt-4 mt-3 shadow-md transition-transform transform lg:hover:scale-105 py-[0.8vh] px-5 font-robotoFlex duration-500 ease-in-out dark:bg-gradient-to-r from-blue-600 to-indigo-600 dark:text-white"
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
                    className="absolute md:size-[32vw] xl:size-[25vw] lg:size-[25vw] size-[30vw] md:h-80 lg:h-[28vh] h-56 z-0"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    src={bannerRight}
                    alt="Main Visual"
                    className="absolute xl:size-[26vw] lg:size-[33vw] md:size-[35vw] xl:mt-20 lg:mt-16 size-[45vw] z-10 mt-10"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* White banner*/}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-2 pb-2 md:pb-4 md:pt-4 lg:pb-5 lg:pt-5 pr-[2vw] lg:pr-0 ml-[4.5vw] mr-[4.5vw] rounded-md md:rounded-xl text-white flex items-center justify-between relative overflow-hidden shadow-[14.361501693725586px_10.258214950561523px_30px_0px_rgba(0,0,0,0.06)] dark:bg-[#1A1D20]"
        >
          {/* Background Image */}
          <img
            src="/assets/Group_114.png"
            alt="background"
            className="absolute bottom-8 right-[-14vw] lg:right-[-7vw] z-0 w-[50vw] md:w-[40vw] lg:w-[32vw] xl:w-[24vw] h-auto md:bottom-12 lg:bottom-14 md:right-[-12vw]"
          />

          {/* White Banner Container */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full text-black rounded-lg flex"
          >
            {/* Left Text Section */}
            <div className="flex flex-col lg:pl-14 pl-6 w-3/4 justify-center md:pl-10">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-extrabold lg:text-[1.7vw] xl:text-[1.5vw] md:text-base text-black text-xs font-figtree tracking-wide dark:text-[#B2B2B2]"
              >
                Product of the Day
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-blue-600 font-extrabold md:font-bold md:text-lg lg:text-[2.2vw] xl:text-[1.8vw] text-[3vw] font-inter lg:mt-1 dark:text-white"
              >
                ADVERTISE YOUR PRODUCT HERE
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:text-base xl:text-lg md:text-sm text-[2.5vw] text-black font-medium font-inter dark:text-[#C9C9C9]"
              >
                Boost your chances of selling faster!
              </motion.h3>
            </div>

            {/* Right Price Section */}
            <div className="flex items-end w-1/3 lg:gap-6 xl:gap-7 gap-2 justify-end lg:pr-12 pr-2 pt-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-right flex flex-col"
              >
                <h1 className="text-slate-400 lg:text-base xl:text-lg text-[2.5vw] font-medium font-inter md:text-sm dark:text-[#CBCBCB]">
                  Only at
                </h1>
                <span className="lg:text-3xl xl:text-4xl font-bold text-lg font-firaSans md:text-2xl mt-[-0.7vh] dark:text-white">
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
                  className="rounded-full bg-indigo-600 lg:p-[0.5vw] xl:p-[0.4vw] md:p-[0.8vw] text-white lg:text-2xl flex justify-center items-center z-20 hover:scale-110 transition-transform p-1 mb-[0.2vh] lg:mb-0 md:mb-[0.3vh] text-sm dark:bg-gradient-to-r from-blue-600 to-indigo-600 dark:text-white"
                >
                  <IoIosArrowForward />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full min-h-screen bg-white flex flex-col items-center pl-[4.5vw] pr-[4.5vw] dark:bg-[#131313]">
        {/* Category section */}
        <div className="flex w-[90vw] flex-col gap-4 lg:gap-4 xl:gap-6 lg:mt-12 mt-8">
          <div className="lg:text-[2vw] xl:text-[1.7vw] md:text-[2.1vw] text-sm gap-[0.4vw]">
            <h1 className="font-semibold font-poppins tracking-wide dark:text-white">
              Categories
            </h1>
          </div>
          <div
            ref={sliderRef}
            className="flex w-full gap-2 md:gap-4 lg:gap-6 items-center overflow-x-auto no-scrollbar cursor-grab select-none"
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
            <Category title="Others" imageSrc={"/others.png"} />
          </div>
        </div>

        {/* Products section */}
        <div className="w-full lg:mt-12 mt-8 flex flex-col lg:gap-4 xl:gap-6 gap-2">
          <h1 className="w-[90vw] lg:text-[2vw] xl:text-[1.7vw] md:text-[2.1vw] text-sm font-bold font-poppins dark:text-white">
            Popular Products
          </h1>
          <div className="w-full flex flex-wrap lg:shrink-0 mt-2 lg:gap-4 xl:gap-4 md:gap-2 gap-1">
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
      <div className="w-full lg:text-[1.1vw] text-sm flex justify-center items-center lg:p-10 p-6 font-semibold font-poppins dark:text-white">
        <button>More</button>
        <IoIosArrowDown className="size-4" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
