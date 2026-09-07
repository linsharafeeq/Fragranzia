import Perfume from "../assets/downbanner.jpg";
const ElegenceBanner = () => {
  return (
    <section className="px-2 py-4  md:px-6 lg:px-8 mb-4 md:mb-8 ">
      <div className="bg-gradient-to-t from-[#D0F7FB] via-[#C4F1FA] to-[#B3EDF8]   w-full h-30 md:h-50 lg:h-60 rounded-lg  flex justify-between overflow-hidden">
        <div className="space-y-2 p-4  md:p-10 lg:p-12">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-semibold ">
            Elegance in Every Bottle
          </h2>
          <p className=" hidden md:block md:text-base lg:text-xl">
            Discover timeless fragrances crafted for every moment
          </p>
          <button className="bg-[#00354B] text-white px-4 py-2 rounded-md text-sm md:text-base">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src={Perfume}
            alt="perfume bottle"
            className=" w-50 h-70 md:w-90 md:h-110 lg:w-100 lg:h-120 rotate-88 -mr-10  rounded-tr-lg rounded-br-lg -mt-22 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default ElegenceBanner;
