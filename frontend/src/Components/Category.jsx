import React from 'react';

const Category = ({ title, imageSrc }) => {
    return (
        <div className={`w-[16vw] h-14 flex justify-around items-center pl-4 pr-5 rounded-lg shadow-[inset_5px_-7px_21.299999237060547px_0px_rgba(57,79,241,0.10)] border border-[#dedede] hover:shadow-sm`}>
                <h1 className="font-semibold text-lg">{title}</h1>

                {imageSrc ? (
                    <img width={50}  src={imageSrc} alt={`${title} icon`} className="object-contain" />
                ) : (
                    <p className="text-gray-500">No image available</p>
                )}

        </div>
    );
};

export default Category;
