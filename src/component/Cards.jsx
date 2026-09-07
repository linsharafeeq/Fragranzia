import offer1 from "../assets/hmside.jpg";
import offer2 from "../assets/hmside2.png";

import offer3 from "../assets/hmside3.png";
import BlobSphere from "./BlobSphere";

const Cards = () => {
  return (
    <section className="px-2 md:px-6 lg:px-8 py-2 md:py-4">
      <div className="max-w-7xl  mx-auto  ">
       <div className="grid grid-cols-3 gap-2 md:gap-6">
          <div className="bg-[#E7E7E7] rounded-md md:rounded-2xl flex  justify-between p-2 md:p-4 lg:p-6 overflow-hidden h-24 md:h-40 lg:h-50 ">
            <div  className=" flex-1 ">
              <h3 className=" text-[14px]  md:text-[16px] lg:text-[22px] font-semibold md:font-bold text-gray-900">
                Unlock Exclusive Offers
              </h3>
              <p className=" hidden md:block text-gray-600 md:text-sm lg:text-base md:mt-2">
                Discover special deals tailored just for you!
              </p>
            </div>
            <img
              src={offer1}
              alt="ofr"
              className=" w-16 md:w-28  lg:w-36 translate-y-4 md:translate-x-6 md:translate-y-6 object-contain self-end "
            />
          </div>

          <div className="bg-[#E7E7E7] text-center rounded-md md:rounded-2xl flex flex-col items-center justify-between p-2 md:p-4 lg:p-6  overflow-hidden h-24 md:h-40 lg:h-50  ">
            <div >
              <h3 className=" text-[14px] md:text-[16px] lg:text-[22px] font-semibold md:font-bold  text-gray-900">
                Gift a Scents to your loved one.
              </h3>
              <p className="hidden md:block md:text-sm lg:text-base text-gray-600  md:mt-2">
                Make your love more beautiful
              </p>
            </div>
            <img
              src={offer2}
              alt="ofr"
              className="w-20 md:w-28  lg:w-44 -translate-y-2  md:-translate-y-2 lg:-translate-y-4 object-contain "
            />
          </div>

          <div className="bg-[#E7E7E7] text-center rounded-md md:rounded-2xl flex  justify-between p-2 md:p-4 lg:p-6  overflow-hidden h-24 md:h-40 lg:h-50 ">
            <div >
              <h3 className=" text-[14px] md:text-[16px] lg:text-[22px] text-left font-semibold md:font-bold   w-48 text-gray-900">
                Luxury Scents <br />
                Starting at ₹4,000
              </h3>

             
<BlobSphere
  className="w-11 h-11 md:w-22 md:h-22 lg:w-26 lg:h-26 -rotate-28 -translate-x-16 md:-translate-x-10  text-[8px] md:text-[16px] lg:text-lg"
>
  Shop Now
</BlobSphere>


            </div>
            <img
              src={offer3}
              alt="ofr"
              className=" w-16 md:w-34 lg:w-52 -mb-6 md:-mb-14  lg:-mb-20 object-contain rotate-16 self-end -translate-x-34 md:-translate-x-20 lg:-translate-x-16 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
