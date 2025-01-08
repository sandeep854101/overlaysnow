import React, { useRef, useState, useEffect } from "react";

const RoundedImage = ({ heading, Section3_Image }) => {
    const scrollRef = useRef(null);
    const [leftHide, setLeftHide] = useState(true);
    const [rightHide, setRightHide] = useState(false);

    // Function to update button visibility
    const updateButtonVisibility = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setLeftHide(scrollLeft <= 0); // Hide left button if at the start
            setRightHide(scrollLeft + clientWidth >= scrollWidth); // Hide right button if at the end
        }
    };

    // Scroll the container left or right
    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateButtonVisibility);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", updateButtonVisibility);
            }
        };
    }, []);

    return (
        <div className="relative">
            {/* Heading */}
            <div className="text-center">
                <h1 className="text-[2.5rem]">{heading}</h1>
            </div>

            {/* Left Button */}
            {!leftHide && (
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center z-10">
                    <button
                        className="bg-gray-100 px-5 py-3 text-2xl shadow-md rounded-full"
                        onClick={() => handleScroll("left")}
                    >
                        &#8249;
                    </button>
                </div>
            )}

            {/* Right Button */}
            {!rightHide && (
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center z-10">
                    <button
                        className="bg-gray-100 px-5 py-3 text-2xl shadow-md rounded-full"
                        onClick={() => handleScroll("right")}
                    >
                        &#8250;
                    </button>
                </div>
            )}

            {/* Scrollable Image Container */}
            <div
                ref={scrollRef}
                className="overflow-x-auto scroll-smooth flex gap-6 py-4 px-4"
                style={{
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none", // For Internet Explorer
                }}
            >
                {Section3_Image.map((item,index) => (
                    <div key={index} className="flex-none text-center">
                        <a href={item.link} className="group">
                            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ">
                                <img
                                    src={item.image}
                                    alt={item.paragraph}
                                    className="w-[250px] h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                        </a>

                        
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoundedImage;