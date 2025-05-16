import React from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Images } from "lucide-react";
import { ArrowUpFromLine } from "lucide-react";
import { MdChangeCircle } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

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

    return (
        <div className="overflow-hidden">
            <Header color={"#394ff1"} textColor={"white"} />
            {/* start */}
            <div className="flex flex-col">
                {/* top section */}
                <div className="flex flex-col lg:flex-row w-full lg:h-[78vh]">
                    {/* Top left */}
                    <div className="flex flex-col gap-3 lg:h-full w-full lg:w-1/3">
                        <div className="flex items-center pl-5 lg:pl-14 lg:pt-5 pt-4 gap-2 lg:gap-3 font-medium">
                            <img
                                src="/assets/Group_58.png"
                                alt="image"
                                className="size-6"
                            />
                            <h1 className="sm:text-[1.4vw] lg:text-[1.5vw] md:text-[2vw] font-poppins leading-normal font-medium">Sell an Item</h1>
                        </div>
                        {/* Image upload */}
                        <div className="lg:h-full lg:w-[24vw] bg-gradient-to-b from-indigo-600 to-indigo-600  flex flex-col justify-center items-center ml-5 lg:ml-14 lg:mr-16 mr-6 lg:rounded-2xl rounded-xl text-white gap-4 pt-14 pb-14 lg:pt-0 lg:pb-0 md:pt-20 md:pb-20">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Images className="lg:size-14 size-8 md:size-9" />
                                <h1 className="lg:text-lg font-roboto">Product Images</h1>
                            </div>
                            <button
                                className="bg-white text-black lg:py-2 py-1 lg:px-6 px-4 lg:rounded-lg rounded-md lg:text-lg text-sm flex justify-between gap-2 items-center font-roboto leading-loose"
                                onClick={() => document.getElementById("fileInput").click()} // Trigger the hidden input
                            >
                                Add Image
                                <ArrowUpFromLine className="lg:size-5 size-4" />
                            </button>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden" // Hide the input element
                                onChange={handleImageChange} // Handle file selection
                            />
                        </div>
                    </div>

                    {/* top right */}
                    <div className="flex flex-col w-full lg:h-full lg:w-2/3 lg:ml-[-2.9vw]">
                        <form className="flex flex-col lg:flex-row w-full gap-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] rounded-2xl lg:pt-5 pr-6 lg:pr-8 pl-6 lg:pl-8 pb-5 lg:mt-16 mt-12">
                            <div className="flex flex-col h-full lg:w-1/2">
                                {/* Product name */}
                                <label htmlFor="productName" className="font-medium text-[#534ff2] text-sm lg:text-base font-roboto leading-7">
                                    Product Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="productName"
                                    type="text"
                                    placeholder="Enter product name"
                                    className="py-2 outline-none border border-slate-300 rounded-md px-2 placeholder:text-sm font-roboto"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />

                                {/* Description */}
                                <label htmlFor="productDesc" className="font-semibold mt-3 text-[#534ff2] text-sm lg:text-bas font-robotoe">
                                    Description<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    required
                                    id="productDesc"
                                    placeholder="Add all the details about the product and provide enough details to trust your product."
                                    className="outline-none border border-slate-300 rounded-md px-2 py-2 lg:h-[28.5vh] h-[24vh] w-full resize-none overflow-auto placeholder:text-sm font-roboto"
                                    //   value={productDesc}
                                    onChange={(e) => setProductDesc(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="flex flex-col h-full lg:w-1/2">
                                {/* Category */}
                                <div className="font-semibold flex items-center gap-2 text-sm lg:text-base">
                                    <div className="text-[#534ff2] font-roboto">
                                        Category<span className="text-red-500">*</span>
                                    </div>
                                    <h5 className="text-black/50 lg:text-sm text-xs font-normal font-roboto">
                                        Select the appropriate category
                                    </h5>
                                </div>

                                <select
                                    name=""
                                    id="opts"
                                    className="bg-white shadow-[0px_4px_4px_0px_rgba(170,170,170,0.14)] border border-black/10 outline-none py-2 px-1 rounded-md font-roboto"
                                    value={productCondition}
                                    onChange={(e) => setProductCondition(e.target.value)}
                                >
                                    <option className="text-sm lg:text-base font-roboto" value="">Choose the Category</option>
                                    <option className="text-sm lg:text-base font-roboto" value="Electronics">Electronics</option>
                                    <option className="text-sm lg:text-base font-roboto" value="Books">Books</option>
                                    <option className="text-sm lg:text-base font-roboto" value="Daily Essential">Daily Essential</option>
                                    <option className="text-sm lg:text-base font-roboto" value="Cycles">Cycles</option>
                                    <option className="text-sm lg:text-base font-roboto" value="Mattress">Mattress</option>
                                    <option className="text-sm lg:text-base font-roboto" value="Other">Other</option>
                                </select>

                                {/* brand and model */}
                                <label htmlFor="productDesc" className="font-semibold mt-4 text-[#534ff2] text-sm lg:text-base font-roboto">
                                    Brand & Model (if applicable)
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="productAddress"
                                    type="text"
                                    placeholder="Enter Brand or model name"
                                    className="outline-none border border-slate-300 rounded-md px-2 py-2 placeholder:text-sm font-roboto"

                                />

                                {/* Color */}
                                <label htmlFor="productDesc" className="font-semibold mt-3 text-[#534ff2] text-sm lg:text-base font-roboto">
                                    Color<span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="productAddress"
                                    type="text"
                                    placeholder="Product Color"
                                    className="outline-none border border-slate-300 rounded-md px-2 py-2 placeholder:text-sm font-roboto"

                                />
                                {/* Original Price */}
                                <label htmlFor="productDesc" className="font-semibold mt-3 text-[#534ff2] text-sm lg:text-base font-roboto">
                                    Original Price<span className="text-red-500">*</span>
                                </label>
                                <div className="flex outline-none lg:px-2 py-2 lg:ml-[-0.5vw] lg:w-[31.9vw] rounded-md mt-[-1.1vh] font-roboto">
                                    <div className="bg-neutral-100 outline outline-1 outline-neutral-300 px-4 rounded-s-md flex justify-center items-center font-roboto">
                                        $
                                    </div>
                                    <input
                                        required
                                        id="productAddress"
                                        type="number"
                                        placeholder="Enter Brand or model name"
                                        className="outline-none border border-slate-300 rounded-r-md px-2 py-2 lg:w-[30vw] w-full font-roboto"
                                    />
                                </div>
                            </div>
                        </form>

                        {/* Condition and  date of purchase */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:mt-4 mt-7">

                            <div className="flex lg:gap-2 font-roboto">
                                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3">
                                    <h1 className="font-semi text-sm lg:text-base">
                                        Condition<span className="text-red-500">*</span>
                                    </h1>
                                    <select
                                        name=""
                                        id="opts"
                                        className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base"
                                        value={productCondition}
                                        onChange={(e) => setProductCondition(e.target.value)}
                                    >
                                        <option className="text-sm lg:text-base bg-violet-100" value="Excellent">Excellent</option>
                                        <option className="text-sm lg:text-base" value="Good">Good</option>
                                        <option className="text-sm lg:text-base" value="Poor">Poor</option>
                                    </select>
                                </div>
                                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3">
                                    <h1 className="font-semi text-sm lg:text-base">
                                        Date of Purchase<span className="text-red-500">*</span>
                                    </h1>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base"
                                    />
                                </div>
                           </div>

                            <div className="flex lg:gap-2 font-roboto">
                                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3">
                                    <h1 className="font-semi text-sm lg:text-base">
                                        Is the price negotiable
                                        <span className="text-red-500">*</span>
                                    </h1>
                                    <select
                                        name=""
                                        id="opts"
                                        className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base"
                                    >
                                        <option className="text-sm lg:text-base" value="true">True</option>
                                        <option className="text-sm lg:text-base" value="false">False</option>
                                    </select>
                                </div>
                                <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center lg:p-5 gap-2 rounded-lg lg:w-60 w-48 p-3">
                                    <h1 className="font-semi text-sm lg:text-base">
                                        Usage Duration<span className="text-red-500">*</span>
                                    </h1>
                                    <select
                                        name=""
                                        id="opts"
                                        className="bg-violet-100 min-w-[10rem] px-12 py-2 text-sm lg:text-base"

                                    >
                                        <option value="less than 3 months">
                                            {" "}
                                            {"<"} 3 months
                                        </option>
                                        <option className="text-sm lg:text-base" value="6 months">6 months</option>
                                        <option className="text-sm lg:text-base" value="9 months">9 months</option>
                                        <option className="text-sm lg:text-base" value="12 months">12 months</option>
                                        <option className="text-sm lg:text-base" value="more than 12 months">
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
                    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row w-full h-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] mt-7 lg:pt-5 pt-3 pb-8 lg:pl-10 pl-5 mb-8 rounded-2xl lg:mr-12 mr-3 lg:ml-14 ml-3">
                        <div className="flex flex-col lg:w-1/3 lg:pr-20 pr-5">
                            {/* Pickup Address */}
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold mt-3 text-sm lg:text-base">Pickup Address</h1>
                                <button className="flex mt-3 justify-center items-center gap-1 text-sm lg:text-base">
                                    <h1 className="font-semibold text-[#646464]">Change</h1>
                                    <MdChangeCircle className="text-blue-500 lg:size-8 size-6" />
                                </button>
                            </div>
                            <p className="bg-violet-50  lg:p-8 p-5 lg:mt-4 mt-2 rounded-xl text-[#555555] text-sm lg:text-base font-robotoFlex">
                                526 - K Block <br />Men's Hostel,VIT Vellore <br /> Available: Mon-Fri, 9AM-6PM
                                <br />Ph: +91 91458 88569
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
                            <div>

                            </div>
                        </div>

                        {/* payment method */}
                        <div className="flex flex-col lg:w-1/3 lg:pl-8">
                            <label htmlFor="payment" className="font-semibold mt-3 text-sm lg:text-base md:mt-5">
                                Preferred Payment (Cash/UPI){" "}
                                <span className="text-red-500 ">*</span>
                            </label>
                            
                            <div className="flex lg:flex-col lg:gap-4 gap-3 lg:mt-4 mt-2 lg:ml-3">
                                <div className="flex items-center lg:gap-2 gap-1 bg-violet-50 lg:w-28 w-20 py-2 px-4 rounded-lg">
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

                                <div className="flex items-center lg:gap-2 gap-1 bg-violet-50 lg:w-28 w-20 py-2 px-4 rounded-lg">
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="upi"
                                        value="upi"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="upi" className="font-semibold cursor-pointer text-sm lg:text-base">
                                        UPI
                                    </label>
                                </div>
                                <div className="flex items-center lg:gap-2 gap-1 bg-violet-50 lg:w-28 w-20 py-2 px-4 rounded-lg">
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="both"
                                        value="both"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="both" className="font-semibold cursor-pointer text-sm lg:text-base">
                                        Both
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col h-full lg:w-1/3 lg:mt-3 mt-5 md:mt-6">
                            <div>
                                <div>
                                    <h1 className="lg:text-lg text-base font-bold">Price</h1>
                                    <div className="flex lg:text-[2.5vw] text-[6vw] items-center md:text-[4vw]">
                                        <FaRupeeSign className="text-stone-300 lg:text-[2vw] text-[5vw] md:text-[3vw]"/>
                                        <input
                                            required
                                            type="text"
                                            name="productPrice"
                                            id="productPrice"
                                            min="1"
                                            className="text-black flex outline-none rounded-md sm:w-2/3 px-2 py-2 font-tiltWarp"
                                            placeholder="Enter price"
                                            value={productPrice}
                                            onChange={(e) =>
                                                setProductPrice(e.target.value.replace(/[^0-9.]/g, ""))
                                            }
                                            step="any"
                                        />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            checked={termsAccepted}
                                            onChange={handleTermsChange}
                                            className="lg:w-4 w-3"
                                        />
                                        <label className="select-none hover:cursor-pointer text-sm lg:text-base md:text-sm font-poppins" htmlFor="terms">
                                            I confirm that all the details are correct and genuine.
                                            <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-3">
                                <button
                                    type="submit"
                                    disabled={!termsAccepted}
                                    className="bg-stone-900 text-white rounded-md md:py-3 py-2 lg:w-[26vw] w-[36vw] font-medium text-xs lg:text-base md:w-[26vw]"
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
