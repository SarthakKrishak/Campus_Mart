import React from 'react';

const Category = ({ title, imageSrc }) => {
    return (
        <div className={`lg:min-w-[16vw] min-w-[33vw] lg:h-14 flex lg:justify-between  justify-between items-center pl-4 pr-5 lg:rounded-lg rounded-md shadow-[inset_5px_-7px_21.299999237060547px_0px_rgba(57,79,241,0.10)] border border-neutral-200 hover:shadow-sm bg-white lg:pl-10`}>
            <h1 className="font-semibold lg:text-lg text-xs font-robotoFlex text-zinc-800">{title}</h1>

                {imageSrc ? (
                    <img src={imageSrc} alt={`${title} icon`} className="object-contain size-7 lg:size-10 lg:ml-0" />
                ) : (
                    <p className="text-gray-500">No image available</p>
                )}

        </div>
    );
};

export default Category;
