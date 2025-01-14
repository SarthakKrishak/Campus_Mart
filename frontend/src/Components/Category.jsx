import React from 'react';

const Category = ({ title, imageSrc }) => {
    return (
        <div className={`w-64 h-28 rounded-lg flex flex-col border-slate-200 border gap-2 shadow-lg shadow-gray-200 border border-slate-300`}>
            <div className='flex items-center pl-5 w-full h-1/2'>
                <h1 className="font-semibold text-xl">{title}</h1>
            </div>
            <div className='flex justify-end items-end w-full h-1/2 p-3'>
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
