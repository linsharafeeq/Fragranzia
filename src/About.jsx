import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import pic2 from "./assets/pic2.jpg";
import pic1 from "/perfume/pic1.jpg";

const About = () => {
  return (
    <section className=" px-2  md:py-2 md:px-6 lg:px-8">
      <div className="flex md:flex-col lg:flex-row w-full md:gap-10 lg:gap-20 items-center justify-between mx-auto mb-2">
        <div>
          <h1 className="text-lg md:text-xl  lg:text-2xl font-bold">
            About Fragranzia
          </h1>

          <div className=" hidden md:flex items-center  gap-1 text-xs md:text-sm text-gray-500 mt-0 md:mt-1">
            <Link to="/" className="hover:text-[#00354B] transition">
              Home
            </Link>

            <MdKeyboardArrowRight />
            <span className="text-gray-700">About</span>
          </div>

          <div className="text-lg w-full  space-y-6 mt-4">
            <p>
              At Fragranzia, we believe that a perfume is more than just a
              scent—it's a story, an art, and a science combined to create
              memories that linger. Our journey began with a vision to craft
              exquisite fragrances that capture the essence of individuality and
              elevate every moment into something timeless.
            </p>

            <p>
              Guided by passion and precision, we source the finest ingredients
              from around the world to create perfumes that resonate with
              authenticity and luxury. Each bottle is a masterpiece, meticulously crafted to deliver an unparalleled sensory experience.
            </p>

            <p>
              Our commitment goes beyond creating fragrances. We aim to inspire
              confidence, evoke emotions, and celebrate uniqueness through every
              drop we produce. Fragranzia isn’t just a brand—it’s a celebration
              of you, your style, and your moments.
            </p>
            <p>
              With a legacy built on quality, artistry, and innovation, we
              invite you to explore our collection and find a scent that speaks
              your story.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-col  ">
          <img
            src={pic2}
            alt="Perfume"
            className="hidden md:flex md:w-96  lg:w-[900px]  h-42 md:h-60 rounded-tl-[40px] rounded-br-[40px] 
 md:rounded-tl-[60px] md:rounded-br-[60px] 
 lg:rounded-tl-[80px] lg:rounded-br-[80px]  "
          />

          <img
            src={pic1}
            alt="Perfume"
            className=" hidden md:flex md:w-96 lg:w-[900px] h-42 md:h-60 rounded-tr-[40px] rounded-bl-[40px] 
 md:rounded-tr-[60px] md:rounded-bl-[60px] 
 lg:rounded-tr-[80px] lg:rounded-bl-[80px]  "
          />
        </div>
      </div>

 
    </section>
  );
};
export default About;
