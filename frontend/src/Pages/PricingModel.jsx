import React from "react";
import Header from "../Components/Header";
import toast, { Toaster } from "react-hot-toast";
import { CircleCheck } from "lucide-react";

const PricingModel = () => {
  const handlePurchase = () => {
    toast("Coming Soon !");
  };

  return (
    <div className="flex flex-col relative w-full min-h-screen overflow-hidden dark:bg-[#131313]">
      <Header color={"#394ff1"} textColor={"white"} bagUrl={"/whitebag.png"} />
      <img
        className="absolute w-[28vw] h-[50vh] bottom-[-35vh] left-[-11vw] hidden xl:block"
        src="/assets/Group_114.png"
        alt="image"
      />
      <div className="flex flex-col text-center gap-2 mt-9 w-full pr-4 pl-4 sm:text-[1vw]">
        <h1 className="text-neutral-700 font-bold text-[5vw] sm:text-[3.1vw] md:text-[2.8vw] xl:text-[1.9vw] font-robotoFlex leading-7 dark:text-white">
          Find the Perfect Plan for Your Needs!
        </h1>
        <h4 className="text-neutral-400 text-[3.2vw] sm:text-[2.1vw] md:text-[1.8vw] xl:text-[1.2vw] font-poppins lg:leading-7 leading-5 font-medium dark:text-[#848484]">
          Select from flexible plans designed for students, sellers, and buyers.
          Whether you're just getting started <br /> or need advanced features,
          we've got you covered!
        </h4>
      </div>
      <div className="w-full h-3/4 flex flex-col gap-7 md:gap-5 items-center justify-center mb-10 sm:flex xl:flex-row pr-32 pl-32 md:pl-12 md:pr-12 mt-8 lg:mt-12">
        {/* Card 1 */}
        <div className="bg-[#f2f4ff] w-[80vw] rounded-xl shadow-md shadow-slate-400 p-4 flex flex-col gap-3 pt-6 pb-5 sm:w-[61vw] md:w-[55vw] lg:w-[43vw] xl:w-[30vw] dark:bg-zinc-900 dark:shadow-[0px_3.799999952316284px_15.199999809265137px_0px_rgba(0,0,0,0.08)] dark:outline dark:outline-1 dark:outline-offset-[-0.95px] dark:outline-zinc-300">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 w-24 py-[0.8vh] text-white font-semibold rounded-md px-2 items-center justify-center flex text-sm sm:py-[0.7vh] md:py-2 leading-tight font-robotoFlex lg:text-[1.6vw] xl:text-[1vw] lg:w-28">
            Current
          </div>
          <h5 className="text-neutral-400 text-[3.5vw] sm:text-lg md:text-base leading-tight font-robotoFlex lg:text-[1.7vw] xl:text-[1.1vw] dark:text-[#D7D7D7]">
            Perfect for exploring the platform and listing your first few items.
          </h5>
          <ul className="text-[3.5vw] pl-4 mt-2 leading-7 lg:leading-9 sm:text-[2.6vw] md:text-base lg:text-lg xl:text-base font-robotoFlex dark:text-[#848484]">
            <li className="list-disc">List up to 5 products for free</li>
            <li className="list-disc">Access basic buyer/seller features</li>
            <li className="list-disc">Track orders and listings</li>
            <li className="list-disc">Get community support</li>
          </ul>
          <div className="flex flex-col gap-3 mt-4 sm:mt-10 md:mt-11 xl:mt-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-5xl xl:text-4xl md:text-4xl font-tiltWarp dark:text-white">
                Free
              </h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <div className="border-[#8e8e8e] border rounded-md py-1 flex justify-center items-center sm:py-2 md:py-2 xl:py-1 font-robotoFlex dark:text-white">
              Activated
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-bl from-[#464ff2] to-[#282d8c] w-[84vw] rounded-xl shadow-lg shadow-slate-400 p-4 bg-[#F2F4FF] flex flex-col gap-3 pt-6 pb-5 sm:w-[66vw] md:w-[59vw] lg:w-[46vw] xl:w-[32vw] dark:shadow-none dark:outline dark:outline-1 dark:outline-offset-[-0.95px] dark:outline-zinc-300">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-white to-white w-24 py-[0.8vh] text-black font-semibold rounded-md px-2 items-center justify-center flex text-sm sm:py-[0.7vh] md:py-2 leading-tight font-robotoFlex">
              Pro
            </div>
            <h1 className="text-xs font-semibold text-[#ffe500] sm:text-sm leading-tight font-robotoFlex">
              Popular
            </h1>
          </div>
          <h5 className="text-white text-[3.5vw] sm:text-lg md:text-base leading-tight font-robotoFlex lg:text-[1.7vw] xl:text-[1.1vw]">
            For active sellers and buyers looking to expand.Ideal for users who
            want additional perks and tools to grow their sales.
          </h5>
          <ul className="text-[3.5vw] pl-4 mt-2 leading-7 lg:leading-9 sm:text-[2.6vw] md:text-base lg:text-lg xl:text-base font-robotoFlex text-white">
            <div className="flex gap-2 items-center">
              <CircleCheck size={18} className="" />
              <h1>Unlimited product listings</h1>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck size={18} className="" />
              <h1>Advanced product tracking</h1>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck size={18} className="" />
              <h1>Priority support</h1>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck size={18} className="" />
              <h1>In-app messaging and notifications</h1>
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck size={18} className="" />
              <h1>Access to detailed analytics</h1>
            </div>
          </ul>
          <div className="flex flex-col gap-3 mt-5 sm:mt-10 md:mt-12 xl:mt-7">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl text-white sm:text-5xl md:text-4xl xl:text-4xl">
                <span className="text-white text-3xl pr-1 sm:text-5xl xl:text-4xl font-roboto">
                  ₹
                </span>
                <span className="font-tiltWarp text-5xl">49</span>
              </h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <button
              onClick={handlePurchase}
              className="border-[#cfcfcf] border rounded-md py-1 flex justify-center items-center bg-white sm:py-2 md:py-2 xl:py-1 font-robotoFlex"
            >
              Continue
            </button>
            <Toaster />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f2f4ff] w-[80vw] rounded-xl shadow-md shadow-slate-400 p-4 flex flex-col gap-3 pt-6 pb-5 sm:w-[61vw] md:w-[55vw] lg:w-[43vw] xl:w-[30vw] dark:bg-zinc-900 dark:shadow-[0px_3.799999952316284px_15.199999809265137px_0px_rgba(0,0,0,0.08)] dark:outline dark:outline-1 dark:outline-offset-[-0.95px] dark:outline-zinc-300">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 w-24 py-[0.8vh] text-white font-semibold rounded-md px-2 items-center justify-center flex text-sm sm:py-[0.7vh] md:py-2 leading-tight font-robotoFlex lg:text-[1.6vw] xl:text-[1vw] lg:w-28">
            Pro Plus
          </div>
          <h5 className="text-neutral-400 text-[3.5vw] sm:text-lg md:text-base leading-tight font-robotoFlex lg:text-[1.7vw] xl:text-[1.1vw] dark:text-[#D7D7D7]">
            Ideal for users who want additional perks and tools to grow their
            sales.
          </h5>
          <ul className="text-[3.5vw] pl-4 mt-2 leading-7 lg:leading-9 sm:text-[2.6vw] md:text-base lg:text-lg xl:text-base font-robotoFlex dark:text-[#848484]">
            <li className="list-disc">Everything in Growth Plan</li>
            <li className="list-disc">Featured product placement</li>
            <li className="list-disc">Exclusive promotional tools</li>
            <li className="list-disc">Advanced analytics and insights</li>
          </ul>
          <div className="flex flex-col gap-3 mt-5 sm:mt-10 md:mt-12 xl:mt-7">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl text-black sm:text-5xl xl:text-4xl dark:text-white">
                <span className=" text-3xl font-['Roboto'] pr-1 sm:text-5xl md:text-4xl xl:text-4xl text-gray-400 dark:text-white">
                  ₹
                </span>
                <span className="font-tiltWarp text-5xl">99</span>
              </h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <button
              onClick={handlePurchase}
              className="border-[#8e8e8e] border rounded-md py-1 flex justify-center items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white sm:py-2 md:py-2 xl:py-1 font-robotoFlex dark:bg-none dark:bg-zinc-900"
            >
              Continue
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModel;
