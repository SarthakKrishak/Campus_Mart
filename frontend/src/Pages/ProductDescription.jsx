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
            <div className='flex w-full'>
                <Toaster />
                {/* left side */}
                <div className='h-full w-[32vw] mb-10 mt-4 flex flex-col items-center gap-4 '>
                    {/* left top */}
                    <div className='rounded-2xl shadow-lg shadow-slate-200 border pb-1 '>
                        <img className='w-[26vw] h-96 pl-5 pr-5 pt-3 rounded-xl object-contain' src="./src/assets/pro_desc.png" alt="image" />
                        <div className='flex pl-5 pb-3 pt-1 justify-between'>
                            <div className='flex gap-3'>

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
                    <div className=' w-[26vw] p-5 rounded-2xl shadow-lg shadow-slate-200 border'>
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
                <div className='pt-4 flex flex-col justify-between w-[66vw] ml-[-1.4vw]'>
                    {/* Right top side */}
                    <div className='flex flex-col rounded-2xl shadow-lg shadow-slate-200 border pl-8 pr-6 pb-6 pt-5 w-full'>
                        <div className='flex justify-between items-center pr-4'>
                            <div className=' text-[#364ef2]/80 bg-[#F4F4F4] rounded-md w-36 py-2 flex justify-center items-center font-semibold'>Electronics</div>
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
                            <h1 className='text-[1.8vw] text-[#131313] font-bold mt-5'>Portonics Wireless Earbuds
                            </h1>
                            <div className='font-extrabold text-[2.1vw] flex items-center mt-1'>
                                <IndianRupee className='size-6' />
                                <h1 className=' text-[#131313] font-extrabold '>449</h1>
                                <div className='text-[#626262] flex items-center text-2xl justify-end ml-3 mt-3 font-normal line-through'>
                                    <IndianRupee className='size-4' />
                                    <h1>599</h1>
                                </div>

                            </div>

                            <h1 className='font-medium mt-4'>Product Details</h1>
                            <p className='text-[#848484] mr-20'>A wireless mouse is a convenient input device that connects to a computer without the need for physical cables, typically using Bluetooth or a USB receiver.
                                A wireless mouse is a convenient input device that connects to a computer without the need for physical cables, <button className='text-black'>more</button></p>
                        </div>
                        <div className='flex gap-36 mt-10'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-medium text-[#828F9B]'>Condition</h1>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-gradient-to-r from-[#394ff1] to-[#534ff2] rounded-md text-white w-64 py-3 flex px-10 items-center font-semibold'>Like New</div>
                                    <div className='bg-[#09C712] rounded-md text-white w-64 py-3 flex px-10 items-center  font-semibold'>Price Negotiable : Yes</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-medium text-[#828F9B]'>Usage Duration</h1>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-gradient-to-r from-[#394ff1] to-[#534ff2] rounded-md text-white w-64 py-3 flex px-10 items-center font-semibold'>6 Months</div>
                                    <div className='bg-[#09C712] rounded-md text-white w-64 py-3 flex px-10 items-center  font-semibold'>Color</div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f5faff] p-6 mt-10 rounded'>
                            <h1 className='font-semibold'>Payment & Pickup</h1>
                            <div className='flex items-center gap-4 mt-2'>
                                <h1 className='text-[#848484]'>Payment Mode (Cash/UPI):</h1>
                                <div className='bg-white border border-[#ececec] px-5 py-2 rounded'>UPI</div>
                            </div>
                            <h1 className='text-[#848484] mt-2'>Pickup Location</h1>
                            <p className='w-80 font-medium leading-7'>
                                526 - K Block Men's Hostel, VIT Vellore Available: Mon-Fri, 9AM-6PM
                            </p>
                        </div>
                    </div>
                    {/* Right bottom side */}
                    <div className='flex w-full justify-between items-center mt-6 mb-6'>
                        
                        <button onClick={handleWishlish} className='border-2 border-[#dddddd] rounded-md text-black px-20 py-4 flex justify-center items-center font-semibold'>Add to Wishlist</button>
                        <Link to={"/chat"} className='bg-gradient-to-r from-[#4d4ef2] to-[#364ef2] rounded-md text-white px-20 py-4 flex justify-center items-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.17)] font-semibold gap-1'><MessageSquareMore className='pt-1 size-7'/>Chat with seller</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ProductDescription