import React from "react";
import Category from "../Components/Category";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <div className="w-full bg-white relative">
            <div>
                <Header />
                <div className="w-[92vw] h-[47vh] bg-gradient-to-l from-[#364ef2] to-[#534ff2] rounded-lg ml-14 mt-3 flex mb-5 relative shadow-lg shadow-gray-400">
                    <img width={170} src=".\src\assets\circle.png" alt="image" className="absolute bottom-0 left-72" />
                    <div className="flex gap-1 absolute bottom-5 right-1/2">
                        <div className="rounded-full bg-white w-2 h-2"></div>
                        <div className="rounded-full bg-white w-2 h-2"></div>
                        <div className="rounded-full bg-white w-2 h-2"></div>
                    </div>
                    <div className="flex flex-col h-full w-1/2 text-white gap-6 pl-24 pt-14 justify-centerst">
                        <h1 className="text-4xl font-bold"> 
                            Unlock Deals, Share Essentials, <br />
                            Simply Campus Living!
                        </h1>
                        <h1 className="text-2xl text-gray-200">
                            Your trusted platform to simplify student life.
                            <br />
                            Buy, sell and connect with ease!
                        </h1>
                        <Link to={"/upload"} className="bg-white w-44 text-[#364EF2] mt-1 font-bold rounded-md py-2 px-2 text-xl justify-center flex">
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
            </div>

            <div className="w-full min-h-screen bg-white flex flex-col items-center pl-5 pr-5">
                
                {/* blue bar part code */}
                <div className="bg-blue-600 w-[92vw] h-[18vh] rounded-xl text-white flex  items-center justify-between relative overflow-hidden shadow-md shadow-gray-400 border border-slate-200 
                hover:shadow-lg transition ease-in-out duration-200">
                    <img height={400}
                        width={400} src=".\src\assets\Group_114.png" alt="image" className="absolute right-[-7vw] bottom-11 z-0" />
                    <div className="w-full h-full bg-white shadow-md shadow-slate-300 text-black rounded-lg flex">
                        <div className="flex flex-col pl-24 w-2/3 justify-center">
                            <h1 className="font-semibold text-2xl">Product of the Day</h1>
                            <h1 className="text-[#364EF2] font-bold text-3xl">ADVERTISE YOUR PRODUCT HERE</h1>
                            <h3 className="text-lg text-slate-600 font-medium">Boost your chances of selling faster!</h3>
                        </div>
                        <div className="flex items-end w-1/3 p-4 gap-3 justify-end pr-20">
                            <div className="text-right">
                                <h1 className="text-xl">Only at</h1>
                                <span className="text-5xl font-bold">₹49</span>
                            </div>
                            <Link to={"/price"} className="rounded-full bg-[#394FF1] w-11 h-11 text-white text-3xl flex justify-center items-center z-20">
                                <IoIosArrowForward />
                            </Link> 
                        </div>
                    </div>
                </div>

                {/* Category section */}
                <div className="flex w-[92vw] flex-col gap-5 mt-8">
                    <div className="flex items-center gap-2">
                        <img width={30} height={30} src=".\src\assets\fluent-mdl2_tiles.png" alt="image" />
                        <h1 className="text-3xl font-semibold">Categories</h1>
                   </div>
                    <div className="flex gap-7 items-center ">
                        <Category title="Electronics" imageSrc={"./src/assets/icons8-electronics-961.png"}/>
                        <Category title="Books" imageSrc={"./src/assets/icons8-books-961.png"} />
                        <Category title="Daily Essentials" imageSrc={"./src/assets/Group_116.png"} />
                        <Category title="Cycles" imageSrc={"./src/assets/icons8-bicycle-961.png"} />
                        <Category title="Matress" imageSrc={"./src/assets/icons8-bed-961.png"} />
                    </div>
                </div>

                {/* Products section */}
                <div className="w-[92vw] mt-6 flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold pt-4">Popular Products</h1>
                    <div className="gap-6 flex flex-wrap shrink-0 mt-2">
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
                        <ProductCard />
                    </div>
                </div>
            </div>
            <button className="w-full p-5">More</button>
            <Footer/>
        </div>
    );
};

export default Home;
