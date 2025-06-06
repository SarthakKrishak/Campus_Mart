import React, { useState } from "react";
import Header from "../Components/Header";
import { IoMdShareAlt } from "react-icons/io";
import { EllipsisVertical } from "lucide-react";
import { IndianRupee } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { MessageSquareMore } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";

const ProductDescription = () => {
  const [report, setReport] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [wishlish, setWishlish] = useState(false);
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const handleReport = () => {
    setReport(!report);
  };
  const reportIssue = () => {
    toast.success("Product Reported");
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success("Added to Wishlist");
  };

  const handleWishlish = () => {
    setWishlish(!wishlish);
    toast.success("Added to Wishlist");
  };

  const handleShare = async () => {
    const shareData = {
      title: "Check out this product on Campus Mart!",
      text: "I found this great product on Campus Mart. Have a look!",
      url: productUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(productUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error("Sharing failed:", error);
    }
  };

  return (
    <div className="w-full h-screen ">
      <Header bagUrl={"/whitebag.png"} />
      <div className="flex flex-col w-full xl:flex-row 2xl:min-h-screen dark:bg-[#131313] xl:pt-2">
        <Toaster />
        {/* left side */}
        <div className="w-full mt-3 flex flex-col items-center xl:items-start gap-4 xl:w-1/3 xl:ml-5">
          {/* left top */}
          <div className="rounded-2xl shadow-[0px_3.691620111465454px_12px_0px_rgba(102,102,102,0.10)] border pb-1 object-contain bg-white w-[93vw] xl:flex flex-col justify-center md:items-center xl:items-start xl:w-[28vw] dark:bg-[#1A1D20] dark:border-0 dark:shadow-xl">
            <img
              className="w-96 pl-5 pr-5 pt-3 rounded-xl xl:w-[30vw] md:mx-auto lg:mx-auto xl:mx-0"
              src="/assets/pro_desc.png"
              alt="image"
            />
            <div className="flex pl-5 pb-3 pt-1 justify-between xl:w-full">
              <div className="flex gap-3 mt-2 md:mx-auto lg:mx-auto xl:mx-0">
                <img
                  className="size-16 rounded-md object-cover "
                  src="/assets/pro_desc.png"
                  alt="image"
                />
                <img
                  className="size-16 rounded-md object-cover "
                  src="/assets/pro_desc.png"
                  alt="image"
                />
                <img
                  className="size-16 rounded-md object-cover "
                  src="/assets/pro_desc.png"
                  alt="image"
                />
              </div>
              <div className="flex justify-end items-end pr-6 pt-5">
                <button onClick={handleShare} aria-label="Share product">
                  <IoMdShareAlt className="text-[#848484] hover:text-blue-500 lg:size-6 md:size-4 size-6" />
                </button>
                {copied && (
                  <span className="text-xs text-green-600 ml-2">
                    Link copied!
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Left side bottom */}
          <div className="hidden xl:block ml-1 w-[37vw] p-5 rounded-2xl shadow-lg shadow-slate-200 border xl:w-[28vw] dark:bg-[#1A1D20] dark:border-0 dark:shadow-none">
            <h1 className="text-base text-zinc-700 font-bold font-robotoFlex dark:text-[#D7D7D7]">
              Seller Information
            </h1>
            <div className="flex pt-2 pb-1 items-center gap-2">
              <img
                className="size-8 rounded-md object-cover "
                src="/assets/user_img.png"
                alt="image"
              />
              <h1 className="font-semibold font-robotoFlex dark:text-[#848484]">
                Aryan Singh
              </h1>
            </div>

            <div className="flex flex-col pt-1">
              <div className="pl-1 leading-tight">
                <h1 className="text-[#979797] font-medium font-robotoFlex dark:text-[#979797]">
                  404 - P Block, Men's Hostel , VIT Vellore , Katpadi Vellore -
                  632014
                </h1>
              </div>

              <div className="flex justify-end items-end pr-3 pt-3 font-medium font-poppins text-sm dark:text-[#D7D7D7]">
                <h1>Listed 10 days ago</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-between w-[93vw] ml-3 lg:ml-9 md:ml-7 mt-4 lg:mt-3 xl:ml-1 xl:mr-5 xl:w-3/4 dark:bg-[#131313]  rounded-2xl">
          {/* Right top side */}
          <div className="flex flex-col rounded-2xl shadow-lg shadow-slate-200 border pl-6 pr-6 pb-6 pt-5 w-full xl:pl-12 dark:shadow-none dark:border-0 dark:bg-[#1A1D20]">
            <div className="flex justify-between items-center pr-4">
              <div className=" text-blue-600/80 bg-zinc-100 rounded-md w-28 md:w-36 md:py-2 py-[1vh] flex justify-center items-center font-semibold md:text-base text-sm font-robotoFlex dark:bg-[#131313] dark:text-[#BBC2C9]">
                Electronics
              </div>
              <div className="flex flex-col items-center gap-2 relative">
                <button onClick={handleReport}>
                  <EllipsisVertical className="size-5 md:size-6 dark:text-white" />
                </button>
                <div
                  className={`bg-slate-400 text-white font-medium py-3 px-10 rounded-md ${
                    report ? "block" : "hidden"
                  } absolute top-0 right-8 flex flex-col gap-4 text-sm`}
                >
                  <button className="w-full" onClick={reportIssue}>
                    Report Product
                  </button>
                  <button className="w-full" onClick={reportIssue}>
                    Report a user
                  </button>
                  <button className="w-full" onClick={reportIssue}>
                    Raise a issue
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[5.5vw] text-neutral-900 font-bold mt-5 md:text-[3vw] lg:text-[2.7vw] xl:text-[1.8vw] font-robotoFlex dark:text-white">
                Portonics Wireless Earbuds
              </h1>
              <div className="text-[8vw] flex items-center mt-1 md:text-[5vw] lg:text-[3.8vw] xl:text-[2.8vw]">
                <IndianRupee className="size-6 dark:text-white" />
                <h1 className=" text-neutral-900 font-tiltWarp dark:text-white">
                  449
                </h1>
                <div className="text-zinc-600 flex items-center text-xl md:text-2xl justify-end ml-3 mt-3 font-normal line-through font-poppins leading-none dark:text-[#626262]">
                  <IndianRupee className="size-4" />
                  <h1>599</h1>
                </div>
              </div>

              <h1 className="font-semibold md:font-medium mt-4 text-base md:text-lg xl:mt-7 font-poppins dark:text-[#D7D7D7]">
                Product Details
              </h1>
              <p className="text-[#848484] xl:mr-20 font-poppins leading-5 dark:text-[#848484]">
                A wireless mouse is a convenient input device that connects to a
                computer without the need for physical cables, typically using
                Bluetooth or a USB receiver. A wireless mouse is a convenient
                input device that connects to a computer without the need for
                physical cables, <button className="text-black">more</button>
              </p>
            </div>
            <div className="flex flex-col mt-8 gap-6 md:flex-row md:gap-36 lg:gap-32 xl:gap-64">
              <div className="flex flex-col gap-2">
                <h1 className="font-medium text-[#828F9B] text-base md:text-base dark:text-[#828F9B]">
                  Condition
                </h1>
                <div className="flex flex-col gap-2">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-600 rounded-md text-white w-48 py-2 flex px-4 items-center font-medium text-sm md:w-52 md:text-base xl:py-3 xl:w-64 font-robotoFlex lg:px-6">
                    Like New
                  </div>
                  <div className="bg-[#09C712] rounded-md text-white w-48 py-2 flex px-3 items-center font-medium text-sm md:w-52 md:text-base xl:py-3 xl:w-64 font-robotoFlex lg:px-6">
                    Price Negotiable : Yes
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-medium text-[#828F9B] text-base md:text-base dark:text-[#828F9B]">
                  Usage Duration
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-600 rounded-md text-white w-48 py-2 flex px-4 items-center font-medium text-sm md:w-52 md:text-base xl:py-3 xl:w-64 font-robotoFlex lg:px-6">
                    6 Months
                  </div>
                  <div className="bg-[#09C712] rounded-md text-white w-48 py-2 flex px-3 items-center  font-medium text-sm md:w-52 md:text-base xl:py-3 xl:w-64 font-robotoFlex lg:px-6">
                    Color
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f5faff] pt-4 pb-4 mt-6 rounded-md md:mt-3 xl:pl-5 pl-4 dark:bg-[#25272A]">
              <h1 className="font-semibold text-base md:text-lg font-robotoFlex leading-7 dark:text-[#D7D7D7]">
                Payment & Pickup
              </h1>
              <div className="flex items-center gap-4 mt-1">
                <h1 className="text-zinc-500 text-sm md:text-base font-robotoFlex dark:text-[#848484]">
                  Payment Mode (Cash/UPI):
                </h1>
                <div className="bg-white border border-gray-200 px-5 py-2 xl:px-8 rounded text-sm font-robotoFlex dark:bg-[#131313] dark:border-0 dark:text-white">
                  UPI
                </div>
              </div>
              <h1 className="text-[#848484] mt-2 text-sm md:text-base font-robotoFlex dark:text-[#848484]">
                Pickup Location
              </h1>
              <p className="w-52 text-[#2D3339] font-medium text-sm leading-5 xl:leading-5 md:leading-7 md:text-base md:w-64 font-robotoFlex dark:text-[#848484]">
                526 - K Block Men's Hostel, VIT Vellore Available: Mon-Fri,
                9AM-6PM
              </p>
            </div>
          </div>
          {/* Right bottom side */}
          <div className="flex flex-col w-full justify-between items-center mt-4 mb-6 gap-3 lg:flex-row xl:gap-96 dark:bg-[#131313]">
            <div
              onClick={handleWishlish}
              className="outline outline-2 outline-offset-[-2px] outline-neutral-200 rounded-md text-black w-full py-3 flex justify-center items-center font-semibold text-sm md:text-base font-robotoFlex hover:scale-105 duration-300 ease-in-out cursor-pointer gap-2 dark:border-[#DDDDDD] dark:text-[#F1F1F1]"
            >
              <FaRegHeart className="lg:size-4 hover:text-red-500" />
              Add to Wishlist
            </div>
            <Link
              to={"/chat"}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.17)] rounded-md text-white w-full py-3 flex justify-center items-center  font-semibold gap-1 text-sm md:text-base hover:scale-105 duration-300 ease-in-out"
            >
              <MessageSquareMore className="pt-1 size-6 block font-robotoFlex" />
              Chat with seller
            </Link>
          </div>

          <div className="lg:hidden w-full p-5 rounded-2xl shadow-lg shadow-slate-200 border mb-4">
            <h1 className="text-base text-[#494949] font-medium md:text-lg">
              Seller Information
            </h1>
            <div className="flex pt-2 pb-1 items-center gap-2">
              <img
                className="size-7 md:size-8 rounded-md object-cover "
                src="/assets/user_img.png"
                alt="image"
              />
              <h1 className="font-semibold ">Aryan Singh</h1>
            </div>

            <div className="flex flex-col pt-1">
              <div className="leading-tight">
                <h1 className="text-[#979797] text-sm md:text-base">
                  404 - P Block, Men's Hostel , VIT Vellore , Katpadi Vellore -
                  632014
                </h1>
              </div>

              <div className="flex justify-end items-end pr-3 pt-4 font-medium text-sm md:text-base">
                <h1>Listed 10 days ago</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
