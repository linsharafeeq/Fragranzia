

import { GoShieldCheck } from "react-icons/go";


import { LiaTruckSolid } from "react-icons/lia";

import { TfiHeadphoneAlt } from "react-icons/tfi";


const Feature=()=>{
  return(
    <section className="px-2 md:px-6 lg:px-8 py-4 md:py-4">
      <div className="grid grid-cols-3 shadow-[0_0_2px_rgba(0,0,0,0.25)]   rounded-2xl bg-white py-4 px-2 md:px-8 md:py-6 gap-2  md:gap-10 lg:gap-28">


<div className="flex items-center gap-2 lg:gap-5">
   <LiaTruckSolid  className="text-[#00354B] text-2xl md:text-5xl lg:text-6xl"/>
  <div>
    <h3 className="text-sm md:text-lg lg:text-xl  font-semibold">
              Fast & Reliable Delivery
            </h3>
             <p className="hidden lg:block text-base text-gray-600 mt-1">
              Get your orders delivered on time, every time.
            </p>
  </div>
</div>






<div className="flex items-center gap-2 lg:gap-5 ">
  <GoShieldCheck className="text-[#00354B] text-xl  md:text-5xl lg:text-7xl"/>
  <div>
    <h3 className="text-sm md:text-lg lg:text-xl  font-semibold">
              Secure Payments
            </h3>
             <p className=" hidden lg:block text-gray-600 text-base mt-1">
                Shop with confidence using our encrypted payment gateways.
            </p>
  </div>
</div>


<div className="flex items-center gap-2 lg:gap-5 ">
  <TfiHeadphoneAlt className="text-[#00354B] text-2xl md:text-5xl "/>
  <div>
    <h3 className="text-sm md:text-lg lg:text-xl  font-semibold">
                24/7 Customer Support
            </h3>
             <p className=" hidden lg:block text-gray-600 text-base mt-1">
               We're here to assist you anytime, anywhere.
            </p>
  </div>
</div>


      </div>
    </section>
  )
};
export default Feature;