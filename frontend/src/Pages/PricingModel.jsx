import React from "react";
import Header from "../Components/Header";
import toast, { Toaster } from 'react-hot-toast';

const PricingModel = () => {

  const handlePurchase = () => {
    toast('Coming Soon !')
  };



  return (
    <div className="flex flex-col relative w-full h-screen overflow-hidden">
      <Header color={"#394ff1"} textColor={"white"}/>
      <img
        className="absolute w-[28vw] h-[50vh] bottom-[-29vh] left-[-11vw] hidden lg:block"
        src="./src/assets/Group_114.png"
        alt="image"
      />
      <div className="flex flex-col text-center gap-2 mt-9 w-full">
        <h1 className="font-bold text-[1.6vw]">
          Find the Perfect Plan for Your Needs!
        </h1>
        <h4 className="text-[#6F6F6F] text-[1.2vw]">
          Select from flexible plans designed for students, sellers, and buyers.
          Whether you're just getting started <br /> or need advanced features,
          we've got you covered!
        </h4>
      </div>
      <div className="w-full h-3/4 flex gap-12 items-center justify-center">
        
        {/* Card 1 */}
        <div className="bg-[#f2f4ff] w-80 h-96 rounded-xl shadow-md shadow-slate-400 p-4 flex flex-col gap-3">
          <div className="bg-gradient-to-r from-[#534ff2] to-[#364ef2] w-28 py-1 text-white font-semibold rounded-md px-2 items-center justify-center flex">
            Current
          </div>
          <h5 className="text-[#8d8d8d] text-sm">
            Perfect for exploring the platform and listing your first few
            items.
          </h5>
          <ul className="text-sm pl-4 mt-2 leading-7">
            <li className="list-disc">List up to 5 products for free</li>
            <li className="list-disc">Access basic buyer/seller features</li>
            <li className="list-disc">Track orders and listings</li>
            <li className="list-disc">Get community support</li>
          </ul>
          <div className="flex flex-col gap-3 mt-8">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-4xl">Free</h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <div className="border-[#cfcfcf] border rounded-md py-1 flex justify-center items-center">
              Activated
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-bl from-[#464ff2] to-[#282d8c] w-80 h-[60vh] rounded-xl shadow-lg shadow-slate-400 p-4 bg-[#F2F4FF] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-white to-white w-28 py-1 text-black font-bold rounded-md px-2 flex items-center justify-center">
              Pro
            </div>
            <h1 className="text-sm font-semibold text-[#ffe500] font-['Roboto Flex']">Popular</h1>
          </div>
          <h5 className="text-[#cfcfcf] text-sm">
            For active sellers and buyers looking to expand.Ideal for users who want additional perks and tools to grow their sales.
          </h5>
          <ul className="text-sm pl-4 leading-7 text-white">
            <li className="list-disc">Unlimited product listings</li>
            <li className="list-disc">Advanced product tracking</li>
            <li className="list-disc">Priority support </li>
            <li className="list-disc">In-app messaging and notifications</li>
            <li className="list-disc">Access to detailed analytics</li>
          </ul>
          <div className="flex flex-col gap-3 pt-5">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-4xl text-white"><span className="text-white  text-3xl font-['Roboto'] pr-1">₹</span>49</h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <button onClick={handlePurchase} className="border-[#cfcfcf] border rounded-md py-1 flex justify-center items-center bg-white">
              Continue
            </button>
            <Toaster/>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f2f4ff] w-80 h-96 rounded-xl shadow-md shadow-slate-400 p-4 flex flex-col gap-3">
          <div className="bg-gradient-to-r from-[#534ff2] to-[#364ef2] w-28 py-1 text-white font-semibold rounded-md px-2 flex items-center justify-center ">
            Pro Plus
          </div>
          <h5 className="text-[#8d8d8d] text-sm">
            Ideal for users who want additional perks and tools to grow their sales.
          </h5>
          <ul className="text-sm pl-4 leading-7">
            <li className="list-disc">Everything in Growth Plan</li>
            <li className="list-disc">Featured product placement</li>
            <li className="list-disc">Exclusive promotional tools</li>
            <li className="list-disc">Advanced analytics and insights</li>
            <li className="list-disc">Personal account manager</li>
          </ul>
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-4xl"><span className="text-[#828f9b]  text-3xl font-['Roboto'] pr-1">₹</span>99</h1>
              <hr className="border-[#8e8e8e]" />
            </div>
            <button onClick={handlePurchase} className="border-[#cfcfcf] border rounded-md py-1 flex justify-center items-center bg-gradient-to-r from-[#534ff2] to-[#364ef2] text-white">
              Continue
            </button>
            <Toaster/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModel;
