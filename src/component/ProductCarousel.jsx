import { useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";

const ProductCarousel = ({ title, highlight, allproducts, showBadge = false,  addToCart }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className=" py-4 ">
      <div className="flex justify-between px-2  md:py-4  md:px-6 lg:px-8 ">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          {title} <span className="text-[#00354B]">{highlight}</span>
        </h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="hidden lg:flex w-10 h-10 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-[#00354B] hover:text-white transition  "
          >
            <MdOutlineArrowBackIos />
          </button>

          <button
            ref={nextRef}
            className=" hidden lg:flex w-10 h-10 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-[#00354B] hover:text-white transition  "
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        touchRatio={1}
        grabCursor={true}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(Swiper) => {
          Swiper.params.navigation.prevEl = prevRef.current;
          Swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: {
            slidesPerView: 2.4,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
          },
          640: {
            slidesPerView: 2.3,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },
          768: {
            slidesPerView: 2.8,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24,
          },
          1024: {
            slidesPerView: 3.3,
            slidesOffsetBefore: 32,
            slidesOffsetAfter: 32,
          },
        }}
      >
        {allproducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} showBadge={showBadge}  addToCart={addToCart}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;