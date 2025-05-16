import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCard = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Link onClick={handleClick} to={"/product"} className="lg:w-[21.3vw] w-[44.7vw] lg:h-[56vh] rounded-xl overflow-hidden shadow-[0px_4.115523815155029px_28.808666229248047px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1.03px] outline-zinc-300 hover:shadow-sm animation duration-150">
      <div className="p-2 w-full lg:h-64 object-contain relative">
        <button
          className="absolute flex items-center justify-center lg:w-10 w-7 lg:h-10 h-7 right-3 top-3"
          aria-label="Add to wishlist">
          <div className="relative lg:w-4 w-3 lg:h-4 h-3 transform rotate-45 bg-white group-hover:scale-110 transition-transform duration-300 ease-in-out shadow-md">
            <div className="absolute top-[-50%] left-0 lg:w-4 w-3 lg:h-4 h-3 bg-white rounded-full"></div>
            <div className="absolute top-0 left-[-50%] lg:w-4 w-3 lg:h-4 h-3 bg-white rounded-full"></div>
          </div>
        </button>
        <img
          className="rounded-lg w-full h-full object-cover"
          src="/assets/image10.png"
          alt="Product"
        />
      </div>

      <h1 className="pb-2 pl-3 lg:text-[1.3vw] text-xs font-medium text-[#313131] font-poppins">Classmate Notebook</h1>
      <div className="flex gap-2 pl-3">
        <div className="bg-slate-200 border border-black/10 px-2 py-1 rounded lg:text-sm text-xs font-medium font-poppins">
          Light
        </div>
        <div className="bg-[#394ff1] border border-black/10 text-white px-2 py-1 rounded lg:text-sm text-xs font-medium shadow-md font-poppins">
          Electronics
        </div>
      </div>
      <div className="pl-4 pr-3 lg:mt-5 mt-2 pb-3  flex justify-between items-center">
        <h2 className="text-black font-figtree lg:text-2xl font-medium text-sm">₹ 499</h2>
      </div>
    </Link>
  );
};

export default ProductCard;
