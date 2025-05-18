import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductCard = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      onClick={handleClick}
      to={"/product"}
      className="lg:w-[21.3vw] w-[44.7vw] lg:h-[64vh] rounded-xl overflow-hidden shadow-[0px_4.115523815155029px_28.808666229248047px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1.03px] outline-zinc-300 hover:shadow-sm animation duration-300 ease-linear hover:scale-105"
    >
      <div className="p-3 w-full lg:h-[40vh] object-contain relative">
        <button
          className="absolute flex items-center justify-center lg:w-10 w-7 lg:h-10 h-7 right-5 top-5"
          aria-label="Add to wishlist"
        >
          <div className="relative lg:w-4 w-3 lg:h-4 h-3 transform rotate-45 bg-white group-hover:scale-110 transition-transform duration-300 ease-in-out shadow-md">
            <div className="absolute top-[-50%] left-0 lg:w-4 w-3 lg:h-4 h-3 bg-white rounded-full"></div>
            <div className="absolute top-0 left-[-50%] lg:w-4 w-3 lg:h-4 h-3 bg-white rounded-full"></div>
          </div>
        </button>

        <div className="bg-indigo-600 outline outline-1 outline-offset-[-1.14px] outline-black/10 text-white px-2 py-1 rounded lg:text-sm text-xs font-medium shadow-md font-poppins absolute bottom-6 left-6 lg:px-4">
          Electronics
        </div>

        <img
          className="rounded-lg w-full h-full"
          src="/assets/image10.png"
          alt="Product"
        />
      </div>

      <h1 className="pb-2 pl-4 lg:text-[1.3vw] text-xs font-medium text-[#313131] font-inter lg:mt-3">
        Classmate Notebook
      </h1>
      <div className="flex gap-2 pl-4">
        <div className="bg-green-100 px-2 py-1 rounded lg:text-sm text-xs text-green-600 font-semibold font-inter flex items-center lg:gap-2">
          <span>4.0</span>
          <span>
            <FaStar />
          </span>
        </div>
      </div>

      <div className="pl-3 pr-3 lg:mt-4 lg:pb-6 mt-2 pb-3 flex flex-col">
        <div className="flex items-center lg:gap-2">
          <h2 className="text-zinc-800 font-inter lg:text-2xl font-bold text-sm flex items-center justify-center tracking-tight">
            <span className="mr-[-0.2vw]">
              <MdOutlineCurrencyRupee />
            </span>
            <span>799</span>
          </h2>
          <h2 className="text-neutral-400 font-inter lg:text-sm font-medium text-sm flex items-center line-through justify-center tracking-tight">
            <span className="mr-[-0.2vw]">
              <MdOutlineCurrencyRupee />
            </span>
            <span>399</span>
          </h2>
        </div>
        <div className="flex items-center pl-1">
          <h2 className="text-[#06981E] font-inter lg:text-sm font-medium text-sm flex items-center">
            <h3>Save</h3>
            <div className="flex items-center">
              <span className="mr-[-0.2vw]">
                <MdOutlineCurrencyRupee />
              </span>
              <span>400</span>
            </div>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
