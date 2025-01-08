import React from "react";
import { Section3_Image } from "../data/AllData";

const CardDetailPage = ({ productId }) => {
    const product = Section3_Image.find((item) => item.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-700">
                    Product not found.
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-[90%] mx-auto ">
            <main className="container mx-auto py-8 px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-xl font-bold mb-4">Price: {product.price}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Available Sizes:</h4>
                            <div className="flex gap-2">
                                {product.sizes.map((size) => (
                                    <a
                                        key={size.label}
                                        href={size.url}
                                        className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white"
                                    >
                                        {size.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <label htmlFor="quantity" className="font-semibold">
                                Quantity:
                            </label>
                            <input
                                id="quantity"
                                type="number"
                                min="1"
                                className="w-16 border rounded-lg p-2 text-center"
                                defaultValue="1"
                            />
                        </div>

                        <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 mb-4">
                            Add to Cart
                        </button>
                        <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700">
                            Buy Now
                        </button>

                        {/* Additional Information */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-4">Additional Details</h3>
                            <p className="text-gray-600 mb-2">Material: 100% Cotton</p>
                            <p className="text-gray-600 mb-2">Fit: Regular</p>
                            <p className="text-gray-600 mb-2">Care Instructions: Machine washable</p>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default CardDetailPage;
