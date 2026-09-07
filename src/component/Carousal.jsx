import { useEffect, useState } from "react";

import slide1 from "../assets/bnr1.png";
import slide2 from "../assets/banr2.png";

const images = [slide1, slide2];

const Carousal = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2  md:px-6 lg:px-8 py-2  md:py-3 lg:py-4">
    <div className="relative w-full overflow-hidden  rounded-2xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />


                  <div className="absolute  inset-0    ">
<div className=" p-3 md:p-10 lg:p-12 w-50 md:w-100 lg:w-150  md:space-y-3">
<h1 className="text-white font-semibold text-sm md:text-3xl lg:text-4xl ">Discover perfumes that celebrate individuality</h1>
<p className=" hidden md:block text-xs md:text-lg  text-white w-60 md:w-80 ">Every moment with an unforgettable essence.</p>
<button className=" px-2 py-1 font-semibold text-xs md:text-base md:px-4 md:py-2 bg-white rounded mt-4 md:mt-0">Shop Now</button>
</div>
</div>
          </div>
        ))}

  
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition ${
              current === index
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

     
    </div>

    </div>
  );
};

export default Carousal;