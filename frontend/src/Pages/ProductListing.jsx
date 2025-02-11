import React from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Images } from "lucide-react";
import { ArrowUpFromLine } from "lucide-react";

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
            <Header />
            <div className="flex">
                {/* Left section */}
                <div className="flex flex-col gap-2 w-1/3 h-full">
                    <div className="flex items-center pl-14 pt-5 gap-3 font-medium">
                        <img
                            width={30}
                            height={30}
                            src=".\src\assets\Group_58.png"
                            alt="image"
                        />
                        <h1 className="text-2xl">Sell an Item</h1>
                    </div>
                    {/* Image upload */}
                    <div className="h-[78vh] bg-gradient-to-tr from-[#534ff2] to-[#394ff1] flex flex-col justify-center items-center ml-14 mr-16 rounded-3xl text-white gap-4">
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

                {/* Right section */}
                <div className="w-2/3 flex mt-12">
                    <form onSubmit={handleSubmit} className="flex">
                
                        <div className="flex flex-col h-full w-1/2 pr-12">
                            {/* Product name */}
                            <label htmlFor="productName" className="font-semibold">
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
                            {/* Category */}
                            <div className="font-semibold mt-4 mb-2 flex items-center gap-2">
                                <div>Category<span className="text-red-500">*</span></div>
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

                            {/* Condition and  date of purchase */}
                            <div className="flex mt-5 gap-3">
                                <div className="border border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded w-56">
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
                                <div className="border border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded w-60">
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
                            </div>

                            {/* brand and model */}
                            <label htmlFor="productDesc" className="font-semibold mt-3">
                               Brand & Model (if applicable)<span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                id="productAddress"
                                type="text"
                                placeholder="Enter Brand or model name"
                                className="outline-none border border-slate-300 rounded-md px-2 py-2 mt-2"
                                value={productAddress}
                                onChange={(e) => setProductAddress(e.target.value)}
                            />

                            {/* Description */}
                            <label htmlFor="productDesc" className="font-semibold mt-3">
                                Description<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                id="productDesc"
                                placeholder="Add all the details about the product and provide enough details to trust your product."
                                className="outline-none border border-slate-300 rounded-md px-2 py-2 h-36 w-full resize-none overflow-auto"
                                value={productDesc}
                                onChange={(e) => setProductDesc(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="flex flex-col h-full w-1/2 pr-12">
                            {/* Pickup Address */}
                            <label htmlFor="productDesc" className="font-semibold mt-3">
                               Pickup Address<span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                id="productAddress"
                                type="text"
                                placeholder="Enter the pickup Address"
                                className="outline-none border border-slate-300 rounded-md px-2 py-2 mt-2"
                                value={productAddress}
                                onChange={(e) => setProductAddress(e.target.value)}
                            />


                            {/* Condition and  date of purchase */}
                            <div className="flex mt-5 gap-3">
                                <div className="border border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded w-56">
                                    <h1 className="font-semi">
                                        Is the price negotiable<span className="text-red-500">*</span>
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

                                <div className="border border-black/10 flex flex-col justify-center items-center p-5 gap-2 rounded w-60">
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
                                        <option value="less than 3 months"> {'<'} 3 months</option>
                                        <option value="6 months">6 months</option>
                                        <option value="9 months">9 months</option>
                                        <option value="12 months">12 months</option>
                                        <option value="more than 12 months">{'>'} 12 months</option>
                                    </select>
                                </div>
                            </div>


                            {/* original price */}
                            <label htmlFor="productDesc" className="font-semibold mt-3">
                              Original Price<span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                id="productAddress"
                                type="text"
                                placeholder="Enter Brand or model name"
                                className="outline-none border border-slate-300 rounded-md px-2 py-2 mt-2"
                                value={productAddress}
                                onChange={(e) => setProductAddress(e.target.value)}
                            />

                            {/* payment method */}
                            <label htmlFor="payment" className="font-semibold mt-3">
                                Preferred Payment (Cash/UPI) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-4 mt-2">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="payment" id="cash" value="cash" className="cursor-pointer" />
                                    <label htmlFor="cash" className="font-semibold cursor-pointer">Cash</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="payment" id="upi" value="upi" className="cursor-pointer" />
                                    <label htmlFor="upi" className="font-semibold cursor-pointer">UPI</label>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <h1 className="text-3xl font-bold">Price</h1>
                                    <div className="flex text-5xl pt-4 items-center gap-2">
                                        <span className="text-slate-400 font-bold">₹</span>
                                        <input
                                            required
                                            type="text"
                                            name="productPrice"
                                            id="productPrice"
                                            min="1"
                                            className="text-black font-extrabold border border-slate-300 flex outline-none rounded-md sm:w-2/3 px-2 py-2 focus:ring-2 focus:ring-[#364EF2] focus:border-[#364EF2] transition duration-200 ease-in-out"
                                            placeholder="Enter price"
                                            value={productPrice}
                                            onChange={(e) =>
                                                setProductPrice(
                                                    e.target.value.replace(/[^0-9.]/g, "")
                                                )
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
                                        />
                                        <label className="select-none" htmlFor="terms">
                                            I confirm that all the details are correct and genuine.
                                            <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <button
                                    type="submit"
                                    disabled={!termsAccepted}
                                    className="bg-black text-white rounded-md py-2 w-[24.5vw]"
                                >
                                    Upload
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
