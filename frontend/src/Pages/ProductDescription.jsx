import React, { useState } from 'react'
import Header from '../Components/Header'
import { Heart } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { MessageSquareMore } from 'lucide-react';

const ProductDescription = () => {
    const [report, setReport] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [wishlish, setWishlish] = useState(false);

    const navigate = useNavigate();


    const handleReport = () => {
        setReport(!report)
    }
    const reportIssue = () => {
        toast.success('Product Reported');
        setTimeout(() => {
            navigate("/");
        }, 800);
    };


    const handleLike = () => {
        setIsLiked(!isLiked);
        toast.success("Added to Wishlist")
    }

    const handleWishlish = () => {
        setWishlish(!wishlish);
        toast.success("Added to Wishlist")
    }

    return (
        <div className='w-full h-screen'>
            <Header color={"#394ff1"} textColor={"white"} />
            <div className='flex flex-col w-full lg:flex-row 2xl:min-h-screen'>
                <Toaster />
                {/* left side */}
                <div className='w-full mt-3 flex flex-col items-center xl:items-start gap-4 xl:w-1/3 xl:ml-5'>
                    {/* left top */}
                    <div className='rounded-2xl shadow-lg shadow-slate-200 border pb-1 object-contain w-[93vw] xl:flex flex-col justify-center md:items-center xl:items-start lg:w-[37vw] xl:w-[28vw]'>
                        <img className='w-96 pl-5 pr-5 pt-3 rounded-xl xl:w-[30vw]' src="./src/assets/pro_desc.png" alt="image" />
                        <div className='flex pl-5 pb-3 pt-1 justify-between xl:w-full'>
                            <div className='flex gap-3 mt-2'>
                                <img className='size-16 rounded-md object-cover ' src="./src/assets/pro_desc.png" alt="image" />
                                <img className='size-16 rounded-md object-cover ' src="./src/assets/pro_desc.png" alt="image" />
                                <img className='size-16 rounded-md object-cover ' src="./src/assets/pro_desc.png" alt="image" />
                            </div>
                            <div className='flex justify-end items-end pr-6 relative pt-5'>
                                <button onClick={handleLike} className='absolute'><Heart className='text-[#848484] hover:text-blue-500' /></button>

                                <button onClick={handleLike} className={`absolute ${isLiked ? 'block' : 'hidden'}`}><Heart className='text-[red]' /></button>
                            </div>
                        </div>
                    </div>
                    {/* Left side bottom */}
                    <div className='hidden lg:block ml-1 w-[37vw] p-5 rounded-2xl shadow-lg shadow-slate-200 border xl:w-[28vw]'>
                        <h1 className='text-base text-[#494949] font-medium'>Seller Information</h1>
                        <div className='flex pt-2 pb-1 items-center gap-2'>
                            <img className='size-8 rounded-md object-cover ' src="./src/assets/user_img.png" alt="image" />
                            <h1 className='font-semibold '>Aryan Singh</h1>
                        </div>

                        <div className='flex flex-col pt-1'>
                            <div className='pl-1 leading-tight'>
                                <h1 className='text-[#979797] font-medium '>404 - P Block, Men's Hostel , VIT Vellore , Katpadi
                                    Vellore - 632014
                                </h1>
                            </div>

                            <div className="flex justify-end items-end pr-3 pt-3 font-medium font-[' Poppins'] text-sm">
                                <h1>Listed 10 days ago</h1>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right side */}
                <div className='flex flex-col justify-between w-[93vw] ml-3 md:ml-7 mt-4 lg:mt-3 lg:w-[70vw] lg:ml-1 lg:mr-2 xl:mr-5 xl:w-3/4'>
                    {/* Right top side */}
                    <div className='flex flex-col rounded-2xl shadow-lg shadow-slate-200 border pl-8 pr-6 pb-6 pt-5 w-full'>
                        <div className='flex justify-between items-center pr-4'>
                            <div className=' text-[#364ef2]/80 bg-[#F4F4F4] rounded-md w-36 py-2 flex justify-center items-center font-semibold text-base'>Electronics</div>
                            <div className='flex flex-col items-center gap-2 relative'>
                                <button onClick={handleReport}><EllipsisVertical /></button>
                                <div className={`bg-slate-400 text-white font-medium py-3 px-10 rounded-md ${report ? 'block' : 'hidden'} absolute top-0 right-8 flex flex-col gap-4 text-sm`}>
                                    <button className='w-full' onClick={reportIssue}>Report Product</button>
                                    <button className='w-full' onClick={reportIssue}>Report a user</button>
                                    <button className='w-full' onClick={reportIssue}>Raise a issue</button>
                               </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[4.2vw] text-[#131313] font-bold mt-5 md:text-[3.8vw] lg:text-[2.7vw] xl:text-[1.8vw]'>Portonics Wireless Earbuds
                            </h1>
                            <div className='font-sans text-[6vw] flex items-center mt-1 md:text-[5vw] lg:text-[3.8vw] xl:text-[2.8vw]'>
                                <IndianRupee className='size-6' />
                                <h1 className=' text-[#131313] font-extrabold'>449</h1>
                                <div className='text-[#626262] flex items-center text-2xl justify-end ml-3 mt-3 font-normal line-through'>
                                    <IndianRupee className='size-4' />
                                    <h1>599</h1>
                                </div>
                            </div>

                            <h1 className='font-medium mt-4 text-base md:text-lg xl:mt-7'>Product Details</h1>
                            <p className='text-[#848484] xl:mr-20'>A wireless mouse is a convenient input device that connects to a computer without the need for physical cables, typically using Bluetooth or a USB receiver.
                                A wireless mouse is a convenient input device that connects to a computer without the need for physical cables, <button className='text-black'>more</button></p>
                        </div>
                        <div className='flex flex-col mt-8 gap-6 md:flex-row md:gap-36 lg:gap-32 xl:gap-64'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-medium text-[#828F9B] text-sm md:text-base'>Condition</h1>
                                <div className='flex flex-col gap-2'>
                                    <div className='bg-gradient-to-r from-[#394ff1] to-[#534ff2] rounded-md text-white w-48 py-2 flex px-3 items-center font-semibold text-sm md:text-base md:w-52 xl:py-3 xl:w-64'>Like New</div>
                                    <div className='bg-[#09C712] rounded-md text-white w-48 py-2 flex px-3 items-center  font-semibold text-sm md:text-base md:w-52 xl:py-3 xl:w-64'>Price Negotiable : Yes</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-medium text-[#828F9B] text-sm md:text-base'>Usage Duration</h1>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-gradient-to-r from-[#394ff1] to-[#534ff2] rounded-md text-white w-48 py-2 flex px-4 items-center font-semibold text-sm md:w-52 md:text-base xl:py-3 xl:w-64'>6 Months</div>
                                    <div className='bg-[#09C712] rounded-md text-white w-48 py-2 flex px-3 items-center  font-semibold textx-sm md:w-52 md:text-base xl:py-3 xl:w-64'>Color</div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f5faff] pt-6 mt-9 rounded md:mt-3'>
                            <h1 className='font-semibold text-base md:text-lg'>Payment & Pickup</h1>
                            <div className='flex items-center gap-4 mt-1'>
                                <h1 className='text-[#848484] text-sm md:text-base'>Payment Mode (Cash/UPI):</h1>
                                <div className='bg-white border border-[#ececec] px-5 py-2 rounded text-sm'>UPI</div>
                            </div>
                            <h1 className='text-[#848484] mt-2 text-sm md:text-base'>Pickup Location</h1>
                            <p className='w-52 text-[#2D3339] font-medium text-sm leading-7 md:text-base md:w-64'>
                                526 - K Block Men's Hostel, VIT Vellore Available: Mon-Fri, 9AM-6PM
                            </p>
                        </div>
                    </div>
                    {/* Right bottom side */}
                    <div className='flex flex-col w-full justify-between items-center mt-4 mb-6 gap-3 lg:flex-row xl:gap-96'>
                        
                        <button onClick={handleWishlish} className='border-2 border-[#dddddd] rounded-md text-black w-full py-3 flex justify-center items-center font-semibold text-sm md:text-base xl:'>Add to Wishlist</button>
                        <Link to={"/chat"} className='bg-gradient-to-r from-[#4d4ef2] to-[#364ef2] rounded-md text-white w-full py-3 flex justify-center items-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.17)] font-semibold gap-1 text-sm md:text-base'><MessageSquareMore className='pt-1 size-6 hidden lg:block'/>Chat with seller</Link>
                    </div>

                    <div className='lg:hidden w-full p-5 rounded-2xl shadow-lg shadow-slate-200 border mb-4'>
                        <h1 className='text-base text-[#494949] font-medium md:text-lg'>Seller Information</h1>
                        <div className='flex pt-2 pb-1 items-center gap-2'>
                            <img className='size-7 md:size-8 rounded-md object-cover ' src="./src/assets/user_img.png" alt="image" />
                            <h1 className='font-semibold '>Aryan Singh</h1>
                        </div>

                        <div className='flex flex-col pt-1'>
                            <div className='leading-tight'>
                                <h1 className='text-[#979797] text-sm md:text-base'>404 - P Block, Men's Hostel , VIT Vellore , Katpadi
                                    Vellore - 632014
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
    )
}

export default ProductDescription