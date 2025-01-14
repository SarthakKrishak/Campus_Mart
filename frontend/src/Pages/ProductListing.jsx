import React from "react";
import Header from "../Components/Header";
import axios from "axios";

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
                    "Content-Type": "multipart/form-data", ads
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
                <div className="flex flex-col gap-5 w-1/3 h-full">
                    <div className="flex items-center pl-9 pt-5 gap-3 font-medium">
                        <img
                            width={30}
                            height={30}
                            src=".\src\assets\Group_58.png"
                            alt="image"
                        />
                        <h1 className="text-2xl">Sell an Item</h1>
                    </div>
                    <div className="h-[75vh] bg-blue-500 flex flex-col justify-center items-center ml-20 mr-10 rounded-3xl text-white gap-4">
                        <h1 className="text-lg">Product Images</h1>
                        <button
                            className="bg-white text-black px-10 py-2 rounded-lg text-lg"
                            onClick={() => document.getElementById("fileInput").click()} // Trigger the hidden input
                        >
                            Add Image
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
                <div className="w-2/3 flex justify-between">
                    <div className="pt-14">
                        <form onSubmit={handleSubmit} className="flex flex-col">
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
                            <div className="font-semibold mt-3 mb-2">
                                Category<span className="text-red-500">*</span>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleCategorySelect("Electronics")}
                                    className="bg-slate-200 p-2 rounded-md hover:bg-slate-300"
                                >
                                    Electronics
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleCategorySelect("Clothing")}
                                    className="bg-slate-200 p-2 rounded-md hover:bg-slate-300"
                                >
                                    Clothing
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleCategorySelect("Daily Use")}
                                    className="bg-slate-200 p-2 rounded-md hover:bg-slate-300"
                                >
                                    Daily Use
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleCategorySelect("Cycle")}
                                    className="bg-slate-200 p-2 rounded-md hover:bg-slate-300"
                                >
                                    Cycle
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleCategorySelect("Others")}
                                    className="bg-slate-200 p-2 rounded-md hover:bg-slate-300"
                                >
                                    Others
                                </button>
                            </div>
                            <h5 className="text-gray-400 text-sm mt-2">
                                Select the appropriate category
                            </h5>

                            <label htmlFor="productDesc" className="font-semibold mt-3">
                                Description<span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                id="productDesc"
                                type="text"
                                placeholder="Enter product description"
                                className="outline-none border border-slate-300 rounded-md px-2 py-7"
                                value={productDesc}
                                onChange={(e) => setProductDesc(e.target.value)}
                            />

                            <div className="flex mt-3 gap-4">
                                <div className="border border-slate-300 flex flex-col justify-center items-center p-5 gap-2">
                                    <select
                                        name=""
                                        id="opts"
                                        className="bg-slate-200 px-8 py-2"
                                        value={productCondition}
                                        onChange={(e) => setProductCondition(e.target.value)}
                                    >
                                        <option value="Excellent">Excellent</option>
                                        <option value="Good">Good</option>
                                        <option value="Poor">Poor</option>
                                    </select>
                                    <h1 className="font-semi">
                                        Condition<span className="text-red-500">*</span>
                                    </h1>
                                </div>
                                <div className="border border-slate-300 flex flex-col justify-center items-center p-5 gap-2">
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        className="bg-slate-200 px-6 py-1"
                                    />
                                    <h1 className="font-semi">
                                        Date of Purchase<span className="text-red-500">*</span>
                                    </h1>
                                </div>
                            </div>

                            <label htmlFor="productDesc" className="font-semibold mt-3">
                                Pickup Address<span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                id="productAddress"
                                type="text"
                                placeholder="Enter pickup address"
                                className="outline-none border border-slate-300 rounded-md px-2 py-2 mt-2"
                                value={productAddress}
                                onChange={(e) => setProductAddress(e.target.value)}
                            />
                        </form>
                    </div>

                    <div className="flex flex-col gap-4 ml-5">
                        <div className="h-[45vh] w-96 bg-slate-300 mr-16 mt-5 rounded-md">
                            Google Ads
                        </div>
                        <div>
                            <div>
                                <h1 className="text-2xl font-bold">Price</h1>
                                <div className="flex text-6xl pt-4 pl-9 items-center gap-2">
                                    <span className="text-slate-400 font-bold">₹</span>
                                    <input
                                        required
                                        type="text"
                                        name="productPrice"
                                        id="productPrice"
                                        min="1"
                                        className="text-black font-extrabold border border-slate-300 flex outline-none rounded-md w-full sm:w-2/3 px-3 py-2 focus:ring-2 focus:ring-[#364EF2] focus:border-[#364EF2] transition duration-200 ease-in-out"
                                        placeholder="Enter price"
                                        value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value.replace(/[^0-9.]/g, ''))}
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
                                className="bg-black text-white rounded-md px-16 py-2 w-2/3"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
