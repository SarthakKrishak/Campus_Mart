import React from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Images } from "lucide-react";
import { IoImages } from "react-icons/io5";
import { ArrowUpFromLine } from "lucide-react";
import { MdChangeCircle } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import Select from "react-select";

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [productName, setProductName] = React.useState("");
  const [productDesc, setProductDesc] = React.useState("");
  const [productCondition, setProductCondition] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [productAddress, setProductAddress] = React.useState("");
  const [productImage, setProductImage] = React.useState(null);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productCategory", selectedCategory);
    formData.append("productDescription", productDesc);
    formData.append("productCondition", productCondition);
    formData.append("productAddress", productAddress);
    formData.append("productPrice", productPrice);
    if (productImage) {
      formData.append("productImage", productImage);
    }

    axios
      .post("/product/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ads,
        },
      })
      .then((response) => {
        console.log("Product registered:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Books", label: "Books" },
    { value: " Daily Essential", label: " Daily Essential" },
    { value: "Cycles", label: "Cycles" },
    { value: "Mattress", label: "Mattress" },
    { value: "Others", label: "Others" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1A1D20",
      color: "#000",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.5)",
    }),
  };

  return (
    <div className="overflow-hidden">
      <Header bagUrl={"whitebag.png"} />
      {/* start */}
      <div className="flex flex-col dark:bg-[#131313] pt-3 xl:pt-1">
        {/* top section */}
        <div className="flex flex-col lg:flex-row w-full lg:h-[78vh]">
          {/* Top left */}
          <div className="flex flex-col gap-3 lg:h-full w-full lg:w-1/3">
            <div className="flex items-center pl-5 lg:pl-14 lg:pt-5 pt-4 gap-2 lg:gap-3 font-medium">
              <img
                src="/group99.png"
                alt="image"
                className="size-6 lg:h-8 lg:w-7"
              />
              <h1 className="sm:text-[1.4vw] lg:text-[1.5vw] text-[4vw] md:text-[2.4vw] font-poppins leading-normal font-medium dark:text-white">
                List Your Product
              </h1>
            </div>
            {/* Image upload */}
            <div className="lg:h-full lg:w-[24vw] bg-gradient-to-b from-[#394FF1] to-[#534FF2] shadow-[0px_4.410558223724365px_10px_0px_rgba(0,0,0,0.18)] flex flex-col lg:pl-7 items-start ml-5 lg:ml-14 lg:mr-16 mr-5 lg:rounded-2xl rounded-xl text-white gap-4 pt-6 xl:pl-7 pl-6 pb-6 md:pt-5 md:pb-5 lg:pt-7 lg:pr-7 lg:gap-2 lg:pb-7 pr-6">
              <div className="flex justify-center items-center gap-1 lg:gap-2">
                <IoImages className="lg:size-6 size-5 md:size-6" />
                <h1 className="lg:text-lg font-roboto text-lg md:text-lg">
                  Product Images
                </h1>
              </div>
              <div className="w-full border border-violet-400 rounded-lg p-[1.5vw] md:p-[0.8vw] flex items-center gap-2 lg:mt-2">
                <button
                  className="bg-white text-black lg:py-2 py-1 md:py-[0.3vh] lg:px-4 px-5 lg:rounded-lg rounded-md lg:text-sm text-[3.2vw] flex justify-between gap-2 items-center font-roboto leading-loose md:text-[2.1vw]"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Choose Files
                  <ArrowUpFromLine className="lg:size-4 size-4" />
                </button>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <h1 className="lg:text-xs font-roboto leading-snug font-light text-[2.8vw] ml-3 md:ml-0 md:text-[1.8vw]">
                  Upload Images (up to 3)
                </h1>
              </div>
              <h1 className="font-roboto lg:text-[0.8vw] leading-snug text-xs md:text-[1.7vw]">
                Select one or more images. PNG, JPG, WEBP accepted.
              </h1>
              <div className="border-dashed border border-violet-200 w-full h-full flex flex-col items-center justify-center rounded-2xl lg:mt-3 p-[20vw] md:p-[15vw] lg:p-0">
                <IoImages className="lg:size-10 size-8 md:size-9" />
                <h1 className="text-white text-xs md:text-base">
                  Previews will appear here.
                </h1>
              </div>
            </div>
          </div>

          {/* top right */}
          <div className="flex flex-col lg:h-full lg:w-2/3 lg:ml-[-2.9vw] ml-5 mr-5">
            <form className="flex flex-col lg:flex-row w-full gap-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] rounded-2xl lg:pt-5 pr-6 lg:pr-8 pl-6 lg:pl-8 pb-5 lg:mt-16 md:mt-12 mt-6 dark:bg-[#1A1D20] pt-4">
              <div className="flex flex-col h-full lg:w-1/2">
                {/* Product name */}
                <label
                  htmlFor="productName"
                  className="font-medium text-[#534ff2] text-sm lg:text-base font-roboto leading-7 dark:text-white"
                >
                  Product Name<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  id="productName"
                  type="text"
                  placeholder="Enter product name"
                  className="py-2 outline-none border border-slate-300 rounded-md px-2 placeholder:text-sm font-roboto dark:bg-[#131313] dark:border-0 dark:placeholder:text-[#848484] dark:text-white"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />

                {/* Description */}
                <label
                  htmlFor="productDesc"
                  className="font-semibold mt-3 text-[#534ff2] text-sm lg:text-base font-robotoe dark:text-white"
                >
                  Description<span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  id="productDesc"
                  placeholder="Add all the details about the product and provide enough details to trust your product."
                  className="outline-none border border-slate-300 rounded-md px-2 py-2 lg:h-[28.5vh] h-[24vh] w-full resize-none overflow-auto placeholder:text-sm font-roboto dark:bg-[#1A1D20] dark:border-[#515151] dark:placeholder:text-[#D7D7D7] dark:text-white mt-1"
                  //   value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="flex flex-col h-full lg:w-1/2">
                {/* Category */}
                <div className="font-medium flex items-center gap-2 text-sm lg:text-base">
                  <div className="text-[#534ff2] font-roboto dark:text-white">
                    Category<span className="text-red-500">*</span>
                  </div>
                  <h5 className="text-black/50 lg:text-sm text-xs font-normal font-roboto dark:text-[#848484]">
                    Select the appropriate category
                  </h5>
                </div>

                <Select
                  options={options}
                  className="mt-1"
                  classNames={{
                    control: () => "bg-[#1A1D20] text-black/50 dark:bg-red",
                    singleValue: () => "text-black/50",
                  }}
                />

                {/* brand and model */}
                <label
                  htmlFor="productDesc"
                  className="font-medium mt-4 text-[#534ff2] text-sm lg:text-base font-roboto dark:text-white"
                >
                  Brand & Model (if applicable)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  id="productAddress"
                  type="text"
                  placeholder="Enter Brand or model name"
                  className="outline-none border border-slate-300 rounded-md px-2 py-2 placeholder:text-sm font-roboto dark:bg-[#131313] dark:placeholder:text-[#848484] dark:text-white dark:border-0 mt-1"
                />

                {/* Color */}
                <label
                  htmlFor="productDesc"
                  className="font-medium mt-3 text-[#534ff2] text-sm lg:text-base font-roboto dark:text-white"
                >
                  Color<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  id="productAddress"
                  type="text"
                  placeholder="Product Color"
                  className="outline-none border border-slate-300 rounded-md px-2 py-2 placeholder:text-sm font-roboto dark:bg-[#131313] dark:text-white dark:placeholder:text-[#848484] dark:border-0 mt-1"
                />
                {/* Original Price */}
                <label
                  htmlFor="productDesc"
                  className="font-medium mt-3 text-[#534ff2] text-sm lg:text-base font-roboto dark:text-white"
                >
                  Original Price<span className="text-red-500">*</span>
                </label>
                <div className="flex outline-none lg:px-2 py-2 lg:ml-[-0.5vw] lg:w-[31.9vw] rounded-md lg:mt-[-1.1vh] font-roboto mt-[-0.4vh]">
                  <div className="bg-neutral-100 outline outline-1 outline-neutral-300 px-4 rounded-s-md flex justify-center items-center font-roboto dark:bg-[#2A2A2A] dark:text-white dark:outline-[#515151]">
                    <FaRupeeSign className="size-3 xl:size-4 text-neutral-600" />
                  </div>
                  <input
                    required
                    id="productAddress"
                    type="number"
                    placeholder="Enter Brand or model name"
                    className="outline-none border border-slate-300 rounded-r-md px-2 py-2 lg:w-[30vw] w-full font-roboto dark:bg-[#131313] dark:text-white dark:placeholder:text-[#848484] dark:border-[#515151]"
                  />
                </div>
              </div>
            </form>

            {/* Condition and  date of purchase */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:mt-4 mt-7">
              <div className="flex lg:gap-2 font-roboto gap-2">
                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3 dark:bg-[#1A1D20] dark:text-[#DEDEDE]">
                  <h1 className="font-semi text-sm lg:text-base">
                    Condition<span className="text-red-500">*</span>
                  </h1>
                  <select
                    name=""
                    id="opts"
                    className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base dark:bg-[#131313] dark:text-[#DEDEDE]"
                    value={productCondition}
                    onChange={(e) => setProductCondition(e.target.value)}
                  >
                    <option
                      className="text-sm lg:text-base bg-violet-100"
                      value="Excellent"
                    >
                      Excellent
                    </option>
                    <option className="text-sm lg:text-base" value="Good">
                      Good
                    </option>
                    <option className="text-sm lg:text-base" value="Poor">
                      Poor
                    </option>
                  </select>
                </div>
                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3 dark:bg-[#1A1D20] dark:text-[#DEDEDE]">
                  <h1 className="font-semi text-sm lg:text-base">
                    Date of Purchase<span className="text-red-500">*</span>
                  </h1>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base dark:bg-[#131313] dark:text-[#DEDEDE]"
                  />
                </div>
              </div>

              <div className="flex lg:gap-2 font-roboto gap-2">
                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3 dark:bg-[#1A1D20] dark:text-[#DEDEDE]">
                  <h1 className="font-semi text-sm lg:text-base">
                    Is the price negotiable
                    <span className="text-red-500">*</span>
                  </h1>
                  <select
                    name=""
                    id="opts"
                    className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base dark:bg-[#131313] dark:text-[#DEDEDE]"
                  >
                    <option className="text-sm lg:text-base" value="true">
                      True
                    </option>
                    <option className="text-sm lg:text-base" value="false">
                      False
                    </option>
                  </select>
                </div>
                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3 dark:bg-[#1A1D20] dark:text-[#DEDEDE]">
                  <h1 className="font-semi text-sm lg:text-base">
                    Usage Duration<span className="text-red-500">*</span>
                  </h1>
                  <select
                    name=""
                    id="opts"
                    className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base dark:bg-[#131313] dark:text-[#DEDEDE]"
                  >
                    <option value="less than 3 months"> {"<"} 3 months</option>
                    <option className="text-sm lg:text-base" value="6 months">
                      6 months
                    </option>
                    <option className="text-sm lg:text-base" value="9 months">
                      9 months
                    </option>
                    <option className="text-sm lg:text-base" value="12 months">
                      12 months
                    </option>
                    <option
                      className="text-sm lg:text-base"
                      value="more than 12 months"
                    >
                      {">"} 12 months
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex w-full font-roboto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row w-full h-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] mt-7 lg:pt-5 pt-3 pb-8 lg:pl-10 pl-5 mb-8 rounded-2xl lg:mr-12 mr-3 lg:ml-14 ml-3 dark:bg-[#1A1D20]"
          >
            <div className="flex flex-col lg:w-1/3 lg:pr-20 pr-5">
              {/* Pickup Address */}
              <div className="flex justify-between items-center">
                <h1 className="font-semibold mt-3 text-sm lg:text-base dark:text-[#D7D7D7]">
                  Pickup Address
                </h1>
                <button className="flex mt-3 justify-center items-center gap-1 text-xs md:text-sm lg:text-base">
                  <h1 className="font-semibold text-[#646464] dark:text-[#D7D7D7]">
                    Change
                  </h1>
                  <MdChangeCircle className="text-blue-500 lg:size-8 size-6" />
                </button>
              </div>
              <p className="bg-violet-50  lg:p-8 p-5 lg:mt-4 mt-2 rounded-xl text-[#555555] text-sm lg:text-base font-robotoFlex dark:bg-[#131313] xl:leading-5 dark:text-[#848484]">
                526 - K Block <br />
                Men's Hostel,VIT Vellore <br /> Available: Mon-Fri, 9AM-6PM
                <br />
                Ph: +91 91458 88569
              </p>
              {/* <input
                                required
                                id="productAddress"
                                type="text"
                                placeholder="Enter the pickup Address"
                                className="outline-none border border-slate-300 rounded-md px-2 py-2 mt-2"
                                value={productAddress}
                                onChange={(e) => setProductAddress(e.target.value)}
                            /> */}
              <div></div>
            </div>

            {/* payment method */}
            <div className="flex flex-col lg:w-1/3 lg:pl-8 mt-1">
              <label
                htmlFor="payment"
                className="font-semibold mt-3 text-sm lg:text-base md:mt-5 dark:text-[#F1F1F1]"
              >
                Preferred Payment (Cash/UPI){" "}
                <span className="text-red-500 ">*</span>
              </label>

              <div className="flex lg:flex-col lg:gap-4 gap-3 lg:mt-4 mt-2 lg:ml-3">
                <div className="flex items-center lg:gap-2 gap-1 bg-violet-50 dark:bg-[#131313] dark:text-[#D7D7D7] lg:w-28 w-20 py-2 px-4 rounded-lg">
                  <input
                    type="radio"
                    name="payment"
                    id="cash"
                    value="cash"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="cash"
                    className="font-semibold cursor-pointer text-sm lg:text-base"
                  >
                    Cash
                  </label>
                </div>

                <div className="flex items-center lg:gap-2 gap-1 bg-violet-50 dark:bg-[#131313] dark:text-[#D7D7D7] lg:w-28 w-20 py-2 px-4 rounded-lg">
                  <input
                    type="radio"
                    name="payment"
                    id="upi"
                    value="upi"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="upi"
                    className="font-semibold cursor-pointer text-sm lg:text-base"
                  >
                    UPI
                  </label>
                </div>
                <div className="flex items-center lg:gap-2 gap-1 bg-violet-50 dark:bg-[#131313] dark:text-[#D7D7D7] lg:w-28 w-20 py-2 px-4 rounded-lg">
                  <input
                    type="radio"
                    name="payment"
                    id="both"
                    value="both"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="both"
                    className="font-semibold cursor-pointer text-sm lg:text-base"
                  >
                    Both
                  </label>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col h-full lg:w-1/3 lg:mt-3 mt-5 md:mt-6">
              <div>
                <div>
                  <h1 className="lg:text-lg text-base font-bold dark:text-[#F1F1F1]">
                    Price
                  </h1>
                  <div className="flex lg:text-[2.5vw] text-[6vw] items-center md:text-[4vw]">
                    <FaRupeeSign className="text-stone-300 lg:text-[2vw] text-[5vw] md:text-[3vw] dark:text-[#C6C6C6] xl:text-[2.4vw]" />
                    <input
                      required
                      type="text"
                      name="productPrice"
                      id="productPrice"
                      min="1"
                      className="text-black flex outline-none rounded-md w-[80vw] md:w-[88vw] sm:w-2/3 px-2 py-2 font-tiltWarp dark:bg-[#131313] dark:text-white"
                      placeholder="Enter price"
                      value={productPrice}
                      onChange={(e) =>
                        setProductPrice(e.target.value.replace(/[^0-9.]/g, ""))
                      }
                      step="any"
                    />
                  </div>
                  <div className="flex gap-2 md:mt-3 mt-4 dark:text-[#F1F1F1]">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={handleTermsChange}
                      className="lg:w-4 w-3"
                    />
                    <label
                      className="select-none hover:cursor-pointer text-xs lg:text-base md:text-sm font-poppins xl:text-sm"
                      htmlFor="terms"
                    >
                      I confirm that all the details are correct and genuine.
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex md:mt-3 mt-5">
                <button
                  type="submit"
                  disabled={!termsAccepted}
                  className="bg-stone-900 text-white rounded-md md:py-3 py-3 lg:w-[26vw] w-[85vw] font-medium text-sm lg:text-base  dark:bg-[#F1F1F1] dark:text-[#1A1D20] md:mt-3 md:text-base md:w-[90vw]"
                >
                  List my Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
