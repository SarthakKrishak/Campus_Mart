import React from "react";
import Category from "../Components/Category";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <div className="w-full bg-white relative selection:bg-purple-400 selection:text-black">
            <div>
                <Header />
                {/* Blue banner code */}
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
                </div>

                {/* white banner code */}
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
                </div>
            </div>

          
            <div className="w-full min-h-screen bg-white flex flex-col items-center pl-[4.5vw] pr-[4.5vw]">

                {/* Category section */}
                <div className="flex w-[90vw] flex-col gap-4 mt-10">
                    <div className="flex items-center text-[1.7vw] gap-[0.4vw]">
                        <img width={30} height={30} src=".\src\assets\fluent-mdl2_tiles.png" alt="image" />
                        <h1 className="font-semibold">Categories</h1>
                   </div>
                    <div className="flex gap-6 items-center justify-evenly">
                        <Category title="Electronics" imageSrc={"./src/assets/icons8-electronics-961.png"}/>
                        <Category title="Books" imageSrc={"./src/assets/icons8-books-961.png"} />
                        <Category title="Daily Essentials" imageSrc={"./src/assets/Group_116.png"} />
                        <Category title="Cycles" imageSrc={"./src/assets/icons8-bicycle-961.png"} />
                        <Category title="Matress" imageSrc={"./src/assets/icons8-bed-961.png"} />
                    </div>
                </div>

                
                {/* Products section */}
                <div className="w-full mt-8 flex flex-col gap-4">
                    <h1 className="w-[90vw] text-[1.7vw] font-semibold">Popular Products</h1>
                    <div className="w-full gap-4 flex flex-wrap shrink-0 mt-2">
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
            <button className="w-full p-5">More</button>
            <Footer/>
        </div>
    );
};

export default Home;
