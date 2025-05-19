import React from "react";

const Category = ({ title, imageSrc }) => {
  return (
    <div
      className={`lg:min-w-[20vw] xl:min-w-[16vw] md:min-w-[22vw] min-w-[32vw] h-10 md:h-10 lg:h-12 flex lg:justify-between justify-between items-center pl-4 pr-4 lg:rounded-lg rounded-md shadow-[inset_5px_-7px_21.299999237060547px_0px_rgba(57,79,241,0.10)] border border-neutral-200 hover:shadow-sm bg-white lg:pl-7 xl:pl-10 md:pl-6 hover:scale-105 duration-700 ease-in-out`}
    >
      <h1 className="font-semibold xl:text-lg lg:text-[1.6vw] md:text-[2vw] text-[2.8vw] font-robotoFlex text-zinc-800">
        {title}
      </h1>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${title} icon`}
          className="object-contain size-7 lg:size-10 lg:ml-0"
        />
      ) : (
        <p className="text-gray-500 text-xs">NA image</p>
      )}
    </div>
  );
};

export default Category;
