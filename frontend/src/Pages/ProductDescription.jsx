import React from 'react'
import Header from '../Components/Header'
import { IoMdPerson } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import ProductCard from '../Components/ProductCard';

const ProductDescription = () => {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='flex justify-between'>

                {/* left side */}
                <div className='flex w-3/4 pl-14'>
                    <div className='h-full w-1/3 p-10 flex flex-col items-center gap-5'>
                        <div className='rounded-lg w-96 h-96 object-cover'>
                            <img src="./src/assets/image10.png" alt="image" />
                        </div>
                        {/* Left side bottom */}
                        <div className=' w-96 p-3'>
                            <h1 className='text-lg font-medium'>Seller Information</h1>
                            <div className='flex justify-between pt-2 pb-1'>
                                <div className='flex items-center gap-3'>
                                    <IoMdPerson size={25} />
                                    <h1>Aryan Singh</h1>
                                </div>

                                <div className='flex flex-col text-right'>
                                    <h1>E block VIT</h1>
                                    <h1>Vellore</h1>
                                </div>
                            </div>
                            <hr className='bg-black border-1 m-1' />
                            <div className='flex justify-between pt-2 pb-1FFS'>
                                <div className='flex items-center gap-3'>
                                    <CiCalendarDate size={25} />
                                    <h1>Date Listed</h1>
                                </div>

                                <div className='flex flex-col mt-2'>
                                    <h1>10 Days ago</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Left Right side */}
                    <div className='w-2/3 max-h-[90vh] p-10 pl-12 flex flex-col justify-between'>
                        {/* Right top side */}
                        <div className='flex flex-col w-96'>
                            <div className=' text-white bg-[#005df5] rounded w-40 py-2 flex justify-center items-center'>Electronics</div>
                            <h1 className='text-2xl font-semibold mt-4'>Classmate Notebook</h1>
                            <h1 className='text-5xl font-extrabold'>₹449</h1>
                            <h1 className='text-lg font-semibold mt-4'>Details</h1>
                            <p>A wireless mouse is a convenient input device that connects to a computer without the need for physical cables, typically using Bluetooth or a USB receiver...... more</p>
                            <div className='flex gap-4 w-full mt-8'>
                                <div className='flex flex-col justify-center items-center border border-slate-300 rounded-lg py-6 px-10'>
                                    <div className='bg-[#005df5] rounded text-white w-44 py-2 flex justify-center items-center'>Electronics</div>
                                    <h1>Condition</h1>
                                </div>
                                <div className='flex flex-col justify-center items-center border border-slate-300 rounded-lg py-6 px-10'>
                                    <div className='bg-[#005df5] rounded text-white w-44 py-2 flex justify-center items-center'>Electronics</div>
                                    <h1>Condition</h1>
                                </div>
                            </div>
                        </div>
                        {/* Right bottom side */}
                        <div className='flex w-96'>
                            <button className='bg-[#005df5] rounded text-white w-40 py-2 flex justify-center items-center'>Chat</button>
                        </div>
                    </div>

                </div>

                {/* related Product section */}
                {/* <div className='w-1/4 h-full flex flex-col p-10'>
                    <h1 className='text-lg'>Related Products</h1>
                    <div className='scale-95'>
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default ProductDescription