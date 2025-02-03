import React from 'react';

const Category = ({ title, imageSrc }) => {
    return (
        <div className={`w-[20vw] h-16 rounded-lg flex border-slate-200 border gap-2 shadow-lg shadow-gray-200`}>
            <div className='flex justify-center items-center h-full w-2/3'>
                <h1 className="font-semibold text-xl">{title}</h1>
            </div>
            <div className='flex justify-center items-center h-full w-1/3'>
                {imageSrc ? (
                    <img width={50}  src={imageSrc} alt={`${title} icon`} className="object-contain" />
                ) : (
                    <p className="text-gray-500">No image available</p>
                )}
            </div>
        </div>
    );
};

export default Category;
