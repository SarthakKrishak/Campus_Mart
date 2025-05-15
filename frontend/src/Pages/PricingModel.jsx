import React from "react";
import Header from "../Components/Header";
import toast, { Toaster } from 'react-hot-toast';
import { CircleCheck } from 'lucide-react';

const PricingModel = () => {

  const handlePurchase = () => {
    toast('Coming Soon !')
  };

  return (
    <div className="flex flex-col relative w-full min-h-screen overflow-hidden">
      <Header color={"#394ff1"} textColor={"white"} />
      <img
        className="absolute w-[28vw] h-[50vh] bottom-[-35vh] left-[-11vw] hidden xl:block"
        src="/assets/Group_114.png"
        alt="image"
      />
      <div className="flex flex-col text-center gap-2 mt-9 w-full pr-4 pl-4 sm:text-[1vw]">
        <h1 className="text-[#353535] font-bold text-[5vw] sm:text-[3.1vw] md:text-[2.6vw] xl:text-[1.9vw]">
          Find the Perfect Plan for Your Needs!
        </h1>
        <h4 className="text-[#7991A4] text-[3.7vw] sm:text-[2.1vw] md:text-[1.8vw] xl:text-[1.2vw]">
          Select from flexible plans designed for students, sellers, and buyers.
          Whether you're just getting started <br /> or need advanced features,
          we've got you covered!
        </h4>
      </div>
      <div className="w-full h-3/4 flex flex-col gap-7 items-center justify-center mb-10 sm:flex xl:flex-row pr-32 pl-32 mt-8">

        {/* Card 1 */}
        <div className="bg-[#f2f4ff] w-[80vw] rounded-xl shadow-md shadow-slate-400 p-4 flex flex-col gap-3 pt-6 pb-5 sm:w-[61vw] md:w-[55vw] xl:w-[30vw]">
          <div className="bg-gradient-to-r from-[#534ff2] to-[#364ef2] w-24 py-1 text-white font-semibold rounded-md px-2 items-center justify-center flex text-sm sm:py-[0.7vh] md:py-2">
            Current
          </div>
          <h5 className="text-[#8D8D8D] text-sm sm:text-lg md:text-base">
            Perfect for exploring the platform and listing your first few
            items.
          </h5>
          <ul className="text-[4vw] pl-4 mt-2 leading-7 sm:text-[2.6vw] md:text-lg xl:text-base">
            <li className="list-disc">List up to 5 products for free</li>
            <li className="list-disc">Access basic buyer/seller features</li>
            <li className="list-disc">Track orders and listings</li>
            <li className="list-disc">Get community support</li>
          </ul>
          <div className="flex flex-col gap-3 mt-5 sm:mt-10 md:mt-11 xl:mt-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-3xl sm:text-5xl xl:text-4xl">Free</h1>
              <hr className="border-[#D0D0D0]" />
            </div>
            <div className="border-[#D0D0D0] border rounded-md py-1 flex justify-center items-center sm:py-2 md:py-2 xl:py-1">
              Activated
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-bl from-[#464ff2] to-[#282d8c] w-[84vw] rounded-xl shadow-lg shadow-slate-400 p-4 bg-[#F2F4FF] flex flex-col gap-3 pt-6 pb-5 sm:w-[66vw] md:w-[59vw] xl:w-[32vw]">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-white to-white w-24 py-1 text-black font-bold rounded-md px-2 flex items-center justify-center text-sm sm:py-[0.7vh] xl:py-2">
              Pro
            </div>
            <h1 className="text-xs font-semibold text-[#ffe500] sm:text-sm">Popular</h1>
          </div>
          <h5 className="text-[#cfcfcf] text-sm sm:text-lg md:text-base">
            For active sellers and buyers looking to expand.Ideal for users who want additional perks and tools to grow their sales.
          </h5>
          <ul className="text-sm leading-7 text-white sm:text-[2.6vw] sm:mt-3 xl:text-base">
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
              <h1 className="font-bold text-4xl text-white sm:text-5xl xl:text-4xl"><span className="text-white  text-3xl font-['Roboto'] pr-1 sm:text-5xl xl:text-4xl">₹</span>49</h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <button onClick={handlePurchase} className="border-[#cfcfcf] border rounded-md py-1 flex justify-center items-center bg-white sm:py-2 md:py-2 xl:py-1">
              Continue
            </button>
            <Toaster />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f2f4ff] w-[80vw] rounded-xl shadow-md shadow-slate-400 p-4 flex flex-col gap-3 pt-6 pb-5 sm:w-[61vw] md:w-[55vw] xl:w-[30vw]">
          <div className="bg-gradient-to-r from-[#534ff2] to-[#364ef2] w-24 py-1 text-white font-semibold rounded-md px-2 items-center justify-center flex text-sm sm:py-[0.7vh] md:py-2">
            Pro Plus
          </div>
          <h5 className="text-[#8D8D8D] text-sm sm:text-lg md:text-base">
            Ideal for users who want additional perks and tools to grow their sales.
          </h5>
          <ul className="text-[4vw] pl-4 mt-2 leading-7 sm:text-[2.6vw] md:text-lg xl:text-base">
            <li className="list-disc">Everything in Growth Plan</li>
            <li className="list-disc">Featured product placement</li>
            <li className="list-disc">Exclusive promotional tools</li>
            <li className="list-disc">Advanced analytics and insights</li>
          </ul>
          <div className="flex flex-col gap-3 mt-5 sm:mt-10 md:mt-12 xl:mt-7">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-4xl text-black sm:text-5xl xl:text-4xl"><span className="text-black text-3xl font-['Roboto'] pr-1 sm:text-5xl xl:text-4xl">₹</span>99</h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <button onClick={handlePurchase} className="border-[#cfcfcf] border rounded-md py-1 flex justify-center items-center bg-white sm:py-2 md:py-2 xl:py-1">
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
