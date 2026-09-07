
import data from "../data/products.json";


const ExploreCategory=()=>{
    return(
        <section className="px-2 py-6 md:pt-10  md:px-6 lg:px-8 ">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Explore <span className="text-[#00354B]">Categories</span>
        </h2>

<div className="grid grid-cols-5 gap-3 lg:gap-18 pt-4 lg:pt-6">
    {data.categories.map((item)=>(
<div key={item.id}
className=" flex flex-col items-center  ">
  <div className="w-18 h-18 md:w-30 md:h-30 lg:w-44 lg:h-44 rounded-full bg-white shadow-[0_0_2px_rgba(0,0,0,0.25)] flex items-center justify-center ">
    <img
     src={item.image}
     alt={item.name}
     className="w-12 h-12 md:w-20 md:h-20 lg:w-32 lg:h-32 object-contain "
     />
  </div>
  <h3 className="mt-3 text-xs md:text-xl font-regular truncate text-center ">
    {item.name}
  </h3>
</div>

    ))}
</div>

        </section>
    )
}
export default ExploreCategory;