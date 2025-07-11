import React from "react";
import Header from "../Components/Header";
import toast, { Toaster } from "react-hot-toast";
import { CircleCheck } from "lucide-react";

const PricingModel = () => {
  const handlePurchase = () => {
    toast("Coming Soon!");
  };

  return (
    <div className="flex flex-col relative w-full min-h-screen overflow-hidden dark:bg-[#131313]">
      <Header bagUrl={"/whitebag.png"} />

      {/* Decorative Image */}
      <img
        className="absolute w-[28vw] h-[50vh] bottom-[-35vh] left-[-11vw] hidden xl:block"
        src="/assets/Group_114.png"
        alt="background-shape"
      />

      {/* Heading Section */}
      <div className="text-center mt-9 px-4">
        <h1 className="text-neutral-700 dark:text-white font-bold text-[5vw] sm:text-3xl md:text-2xl xl:text-xl font-robotoFlex leading-tight">
          Find the Perfect Plan for Your Needs!
        </h1>
        <p className="text-neutral-400 dark:text-[#848484] mt-2 text-[3.5vw] sm:text-xl md:text-lg xl:text-base font-poppins">
          Select from flexible plans designed for students, sellers, and buyers.
          Whether you're just getting started or need advanced features, we've got you covered!
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-6 px-4 md:px-12 xl:px-32 mt-10 mb-14">
        {/* === CARD COMPONENTS START HERE === */}
        {[
          {
            title: "Current",
            desc: "Perfect for exploring the platform and listing your first few items.",
            features: [
              "List up to 5 products for free",
              "Access basic buyer/seller features",
              "Track orders and listings",
              "Get community support",
            ],
            price: "Free",
            status: "Activated",
            isGradient: false,
            isActive: true,
            bg: "bg-[#f2f4ff]",
          },
          {
            title: "Pro",
            desc: "For active sellers and buyers looking to expand. Ideal for users who want additional perks and tools to grow their sales.",
            features: [
              "Unlimited product listings",
              "Advanced product tracking",
              "Priority support",
              "In-app messaging and notifications",
              "Access to detailed analytics",
            ],
            price: "49",
            status: "Continue",
            isGradient: true,
            isActive: false,
            tag: "Popular",
            bg: "bg-gradient-to-bl from-[#464ff2] to-[#282d8c]",
          },
          {
            title: "Pro Plus",
            desc: "Ideal for users who want additional perks and tools to grow their sales.",
            features: [
              "Everything in Growth Plan",
              "Featured product placement",
              "Exclusive promotional tools",
              "Advanced analytics and insights",
            ],
            price: "99",
            status: "Continue",
            isGradient: false,
            isActive: false,
            bg: "bg-[#f2f4ff]",
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`${plan.bg} ${plan.isGradient ? "text-white" : "dark:text-[#D7D7D7]"
              } w-[85vw] sm:w-[65vw] md:w-[50vw] xl:w-[30vw] rounded-xl shadow-md dark:shadow-none dark:outline dark:outline-1 dark:outline-offset-[-0.95px] dark:outline-zinc-300 p-5 flex flex-col gap-4`}
          >
            {/* Title and Optional Tag */}
            <div className="flex justify-between items-center">
              <div
                className={`${plan.isGradient
                    ? "bg-white text-black"
                    : "bg-gradient-to-br from-indigo-600 to-blue-600 text-white"
                  } font-semibold rounded-md px-3 py-1 text-sm w-fit`}
              >
                {plan.title}
              </div>
              {plan.tag && (
                <span className="text-xs font-semibold text-[#ffe500]">
                  {plan.tag}
                </span>
              )}
            </div>

            {/* Description */}
            <p
              className={`${plan.isGradient ? "text-white" : "text-neutral-500"
                } text-sm lg:text-base`}
            >
              {plan.desc}
            </p>

            {/* Features */}
            <ul className="mt-2 space-y-2 text-sm lg:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-2 items-start">
                  {plan.isGradient ? (
                    <CircleCheck size={18} />
                  ) : (
                    <span className="list-disc pl-2" />
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price and Button */}
            <div className="mt-auto">
              <h2
                className={`text-3xl md:text-4xl font-tiltWarp ${plan.isGradient ? "text-white" : "text-black dark:text-white"
                  }`}
              >
                {plan.price === "Free" ? (
                  "Free"
                ) : (
                  <>
                    <span className="text-xl font-roboto pr-1">₹</span>
                    {plan.price}
                  </>
                )}
              </h2>
              <hr className="border-[#8e8e8e] my-2" />

              {plan.isActive ? (
                <div className="border border-[#8e8e8e] rounded-md py-1 text-center text-sm mt-2">
                  {plan.status}
                </div>
              ) : (
                <button
                  onClick={handlePurchase}
                  className={`${plan.isGradient
                      ? "bg-white text-black"
                      : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                    } rounded-md py-2 text-sm w-full mt-2`}
                >
                  {plan.status}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Toaster />
    </div>
  );
};

export default PricingModel;
