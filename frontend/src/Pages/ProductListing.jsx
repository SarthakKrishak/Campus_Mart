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
        <div>
            <Header color={"#394ff1"} textColor={"white"} />
            <div className="flex flex-col">
                {/* top section */}
                <div className="flex w-full h-[78vh]">
                    {/* Top left */}
                    <div className="flex flex-col gap-3 h-full w-1/3">
                        <div className="flex items-center pl-14 pt-5 gap-3 font-medium">
                            <img
                                width={25}
                                height={25}
                                src=".\src\assets\Group_58.png"
                                alt="image"
                            />
                            <h1 className="text-[1.5vw]">Sell an Item</h1>
                        </div>
                        {/* Image upload */}
                        <div className="h-full w-[24vw] bg-gradient-to-tr from-[#534ff2] to-[#394ff1] flex flex-col justify-center items-center ml-14 mr-16 rounded-2xl text-white gap-4">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Images className="size-14" />
                                <h1 className="text-lg">Product Images</h1>
                            </div>
                            <button
                                className="bg-white text-black py-2 px-6 rounded-lg text-lg flex justify-between gap-2 items-center"
                                onClick={() => document.getElementById("fileInput").click()} // Trigger the hidden input
                            >
                                Add Image
                                <ArrowUpFromLine className="size-5" />
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
                    <div className="flex flex-col h-full w-2/3 ml-[-2.9vw]">
                        <form className="flex w-full gap-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] rounded-2xl pt-5 pr-8 pl-8 pb-5 mt-16">
                            <div className="flex flex-col h-full w-1/2">
                                {/* Product name */}
                                <label htmlFor="productName" className="font-semibold text-[#534ff2]">
                                    Product Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="productName"
                                    type="text"
                                    placeholder="Enter product name"
                                    className="py-2 outline-none border border-slate-300 rounded-md px-2"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />

                                {/* Description */}
                                <label htmlFor="productDesc" className="font-semibold mt-3 text-[#534ff2]">
                                    Description<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    required
                                    id="productDesc"
                                    placeholder="Add all the details about the product and provide enough details to trust your product."
                                    className="outline-none border border-slate-300 rounded-md px-2 py-2 h-[28.5vh] w-full resize-none overflow-auto"
                                    //   value={productDesc}
                                    onChange={(e) => setProductDesc(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="flex flex-col h-full w-1/2">
                                {/* Category */}
                                <div className="font-semibold flex items-center gap-2">
                                    <div className="text-[#534ff2]">
                                        Category<span className="text-red-500">*</span>
                                    </div>
                                    <h5 className="text-black/50 text-sm font-normal">
                                        Select the appropriate category
                                    </h5>
                                </div>

                                <select
                                    name=""
                                    id="opts"
                                    className="bg-white shadow-[0px_4px_4px_0px_rgba(170,170,170,0.14)] border border-black/10 outline-none py-2 px-1 rounded-md"
                                    value={productCondition}
                                    onChange={(e) => setProductCondition(e.target.value)}
                                >
                                    <option value="Electronics">Electronics</option>
                                    <option value="Books">Books</option>
                                    <option value="Daily Essential">Daily Essential</option>
                                    <option value="Cycles">Cycles</option>
                                    <option value="Mattress">Mattress</option>
                                </select>

                                {/* brand and model */}
                                <label htmlFor="productDesc" className="font-semibold mt-4 text-[#534ff2]">
                                    Brand & Model (if applicable)
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="productAddress"
                                    type="text"
                                    placeholder="Enter Brand or model name"
                                    className="outline-none border border-slate-300 rounded-md px-2 py-2"
                                    value={productAddress}
                                    onChange={(e) => setProductAddress(e.target.value)}
                                />

                                {/* Color */}
                                <label htmlFor="productDesc" className="font-semibold mt-3 text-[#534ff2]">
                                    Color<span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="productAddress"
                                    type="text"
                                    placeholder="Product Color"
                                    className="outline-none border border-slate-300 rounded-md px-2 py-2"
                                    value={productAddress}
                                    onChange={(e) => setProductAddress(e.target.value)}
                                />
                                {/* Original Price */}
                                <label htmlFor="productDesc" className="font-semibold mt-3 text-[#534ff2]">
                                    Original Price<span className="text-red-500">*</span>
                                </label>
                                <div className="flex outline-none px-2 py-2 ml-[-0.5vw] w-[31.9vw] rounded-md mt-[-1.1vh]">
                                    <div className="bg-neutral-100 border border-[#bbc2c9] px-4 rounded-s-md flex justify-center items-center">
                                        $
                                    </div>
                                    <input
                                        required
                                        id="productAddress"
                                        type="text"
                                        placeholder="Enter Brand or model name"
                                        className="outline-none border border-slate-300 rounded-r-md px-2 py-2 w-[30vw]"
                                        value={productAddress}
                                        onChange={(e) => setProductAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>


                        <div className="flex justify-between items-center gap-3 mt-4">
                            {/* Condition and  date of purchase */}

                            <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded-lg w-60">
                                <h1 className="font-semi">
                                    Condition<span className="text-red-500">*</span>
                                </h1>
                                <select
                                    name=""
                                    id="opts"
                                    className="bg-slate-200 px-12 py-2"
                                    value={productCondition}
                                    onChange={(e) => setProductCondition(e.target.value)}
                                >
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </div>
                            <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded-lg w-60">
                                <h1 className="font-semi">
                                    Date of Purchase<span className="text-red-500">*</span>
                                </h1>
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    className="bg-slate-200 px-6 py-1"
                                />
                            </div>
                            {/* Condition and  date of purchase */}

                            <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded-lg w-60">
                                <h1 className="font-semi">
                                    Is the price negotiable
                                    <span className="text-red-500">*</span>
                                </h1>
                                <select
                                    name=""
                                    id="opts"
                                    className="bg-slate-200 px-12 py-2"
                                    value={productCondition}
                                    onChange={(e) => setProductCondition(e.target.value)}
                                >
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </div>

                            <div className="shadow-[0px_4px_6px_0px_rgba(111,111,111,0.12)] border-2 border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded-lg w-60">
                                <h1 className="font-semi">
                                    Usage Duration<span className="text-red-500">*</span>
                                </h1>
                                <select
                                    name=""
                                    id="opts"
                                    className="bg-slate-200 px-12 py-2"
                                    value={productCondition}
                                    onChange={(e) => setProductCondition(e.target.value)}
                                >
                                    <option value="less than 3 months">
                                        {" "}
                                        {"<"} 3 months
                                    </option>
                                    <option value="6 months">6 months</option>
                                    <option value="9 months">9 months</option>
                                    <option value="12 months">12 months</option>
                                    <option value="more than 12 months">
                                        {">"} 12 months
                                    </option>
                                </select>
                            </div>


                        </div>
                    </div>
                </div>

                {/* bottom section */}
                <div className="flex w-full">
                    <form onSubmit={handleSubmit} className="flex w-full h-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] mt-7 pt-5 pb-8 pl-10 mb-8 rounded-2xl mr-12 ml-14">
                        <div className="flex flex-col w-1/3 pr-20">
                            {/* Pickup Address */}
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold mt-3">Pickup Address</h1>
                                <button className="flex mt-3 justify-center items-center gap-1">
                                    <h1 className="font-semibold text-[#646464]">Change</h1>
                                    <MdChangeCircle className="text-blue-500" size={24} />
                                </button>
                            </div>
                            <p className="bg-[#f2f3ff] p-8 mt-4 rounded-xl text-[#555555]">
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
                        <div className="flex flex-col w-1/3 pl-8">
                            <label htmlFor="payment" className="font-semibold mt-3">
                                Preferred Payment (Cash/UPI){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-col gap-4 mt-4 ml-3">
                                <div className="flex items-center gap-2 bg-[#f2f4ff] w-28 py-2 px-4 rounded-lg">
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="cash"
                                        value="cash"
                                        className="cursor-pointer"
                                    />
                                    <label
                                        htmlFor="cash"
                                        className="font-semibold cursor-pointer"
                                    >
                                        Cash
                                    </label>
                                </div>
                                <div className="flex items-center gap-2 bg-[#f2f4ff] w-28 py-2 px-4 rounded-lg">
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="upi"
                                        value="upi"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="upi" className="font-semibold cursor-pointer">
                                        UPI
                                    </label>
                                </div>
                                <div className="flex items-center gap-2 bg-[#f2f4ff] w-28 py-2 px-4 rounded-lg">
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="both"
                                        value="both"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="both" className="font-semibold cursor-pointer">
                                        Both
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col h-full w-1/3 mt-3">
                            <div>
                                <div>
                                    <h1 className="text-lg font-bold">Price</h1>
                                    <div className="flex text-[2.5vw] items-center">
                                        <FaRupeeSign className="text-[#c5c5c5] text-[2vw]"/>
                                        <input
                                            required
                                            type="text"
                                            name="productPrice"
                                            id="productPrice"
                                            min="1"
                                            className="text-black font-extrabold flex outline-none rounded-md sm:w-2/3 px-2 py-2"
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
                                            className="w-4"
                                        />
                                        <label className="select-none hover:cursor-pointer" htmlFor="terms">
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
                                    className="bg-[#1e1e1e] text-white rounded-md py-3 w-[26vw] font-medium"
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
