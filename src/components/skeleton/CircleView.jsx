import React, { useRef, useState, useEffect } from "react";

const CircleView = ({ CircleImageData }) => {
  const scrollRef = useRef(null);
  const [leftHide, setLeftHide] = useState(true); // Initially hide left button
  const [rightHide, setRightHide] = useState(false); // Right button is visible by default

  // Function to scroll left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Function to handle button visibility
  const updateButtonVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setLeftHide(scrollLeft <= 0); // Hide left button if at the start
      setRightHide(scrollLeft + clientWidth >= scrollWidth); // Hide right button if at the end
    }
  };

  // Add scroll event listener
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
    <div className="relative bg-white w-full ">
      {/* Left Button */}
      {!leftHide && (
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex items-center z-10 ">
          <button
            className="bg-gray-100 px-5 py-4 text-3xl shadow-md rounded-full"
            onClick={() => scroll("left")}
          >
            &#8249;
          </button>
        </div>
      )}

      {/* Right Button */}
      {!rightHide && (
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center z-10 ">
          <button
            className="bg-gray-100 px-5 py-4 text-3xl shadow-md rounded-full"
            onClick={() => scroll("right")}
          >
            &#8250;
          </button>
        </div>
      )}

      {/* Scrollable Circle Items */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth flex space-x-6 py-4 px-4"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer
        }}
      >
        {CircleImageData.map((item,index) => (
          <div key={index} className="flex-none text-center">
            <a href={item.link}>
              <div className="relative h-[7.2rem] w-[7.2rem] rounded-full overflow-hidden border-2 border-gray-300 shadow-md transition-transform transform hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
            <p className="mt-2 text-sm font-semibold uppercase text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleView;
