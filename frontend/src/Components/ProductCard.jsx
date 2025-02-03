import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="w-[17vw] h-[52vh] rounded-lg overflow-hidden border border-slate-300 shadow-lg shadow-gray-200">
      <div className="p-2 w-full h-60 object-contain relative">
        <button
          className="absolute flex items-center justify-center w-10 h-10  right-3 top-3"
          aria-label="Add to wishlist">
          <div className="relative w-4 h-4 transform rotate-45 bg-white group-hover:scale-110 transition-transform duration-300 ease-in-out shadow-md">
            <div className="absolute top-[-50%] left-0 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-0 left-[-50%] w-4 h-4 bg-white rounded-full"></div>
          </div>
        </button>
        <img
          className="rounded-lg w-full h-full object-cover"
          src="./src/assets/image10.png"
          alt="Product"
          onError={(e) => (e.target.src = "./src/assets/placeholder.png")}
        />
      </div>

      <h1 className="pb-2 pl-2 text-lg font-medium">Classmate Notebook</h1>
      <div className="flex gap-2 pl-2">
        <div className="bg-slate-200 border border-black/10 px-2 py-1 rounded text-sm font-medium">
          Light
        </div>
        <div className="bg-[#394ff1] border border-black/10 text-white px-2 py-1 rounded text-sm font-medium shadow-md">
          Electronics
        </div>
      </div>
      <div className="pl-2 mt-3 flex justify-between items-center">
        <h2 className="text-black text-2xl font-semibold">₹499</h2>
        <Link to={"/product"}
          className="text-black rounded-full w-9 h-9 flex justify-center items-center text-2xl hover:bg-slate-200 transition-colors duration-200"
          aria-label="View product details">
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
