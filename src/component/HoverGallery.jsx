import { useState, useEffect } from "react";
import data from "../data/products.json";

const HoverGallery=()=>{
const [hovered,setHovered]=useState(1)
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

return(
<section className="px-2 py-2 md:py-4  md:px-6 lg:px-8 ">
    <blockquote className="text-center mx-auto text-lg px-6  md:text-3xl mb-10 max-w-3xl ">
"It's an art. A craft. A science. At Fragranzia, we're in the
        business of creating memories that last forever through our
        fragrances."
    </blockquote>

<div className="flex h-[260px] md:h-[400px]  gap-2 "
onMouseLeave={()=>setHovered(1)}
>
    {data.collections.map((item,index)=>{
        const isHovered=hovered===item.id;
        const isOtherHovered= hovered !==null && hovered!==item.id;

        return(
            <div
            key={item.id}
            onMouseEnter={()=>setHovered(item.id)}
            className="relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
            style={
                {
                    flex:isDesktop
                    ? isHovered
                    ?"1"
                    :isOtherHovered 
                    ? "0.7":
                    "1":
                    "1",

                }
            }
            >
         <img src={item.image}
          alt={item.label} 
          className={`w-full h-full object-cover  ${
      index === 0 ? "object-bottom" : "object-center"}`}
          />
<div className="absolute inset-0 bg-black/40"/>
<span className="absolute left-4 bottom-6 text-white font-bold text-lg md:text-2xl  "
style={{writingMode:"vertical-rl", transform:"rotate(180deg)"}}
>
{item.label}
</span>
            </div>
        );


    })

    }
</div>

</section>

)
}
export default HoverGallery;