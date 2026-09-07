import { Link, useNavigate } from "react-router-dom";
import BlobSphere from "./BlobSphere";
import { toast } from "react-toastify";

const ProductCard = ({ item, showBadge = false, addToCart, badgeText = "New" }) => {


  const handleAddToCart=()=>{
       addToCart(item);
   toast.success("Item added to cart!", {
  style: {
    background: "#07892a",
    color: "white",
    borderRadius: "10px",
    width: "200px"
   
  },
});
  }
  return (
    <div className="relative">
    <Link to={`/products/${item.id}`}>
    <div className="py-4 md:py-6 ">
      <div
        className="relative shadow-[0_0_6px_rgba(0,0,0,0.25)]
         rounded-tl-[40px] rounded-br-[40px]  
         md:rounded-tl-[60px] md:rounded-br-[60px]  
         lg:rounded-tl-[80px] lg:rounded-br-[80px] lg:rounded-tr-[0px] lg:rounded-bl-[0px]
       hover:lg:rounded-tl-[0px] hover:lg:rounded-br-[0px] hover:lg:rounded-tr-[80px] hover:lg:rounded-bl-[80px]
      transition-all duration-500 ease-in-out
           overflow-hidden p-6 h-36 sm:h-60 md:h-66 lg:h-78"
      >
        {showBadge && (
          <div className="absolute z-40 w-10 h-10 md:w-20 md:h-0 lg:w-24 lg:h-24 -rotate-28 text-[8px] md:text-[16px] lg:text-lg">
            <BlobSphere>{badgeText}</BlobSphere>
          </div>
        )}
        <img
          src={item.image}
          alt={item.name}
          className="w-full object-contain transition duration-600 hover:scale-110"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-base md:text-xl truncate">
          {item.name}
        </h3>
        <p className="hidden md:block font-semibold text-base md:text-xl">{item.subtitle}</p>

        <div className="flex items-center gap-3">
          <span className="text-xl md:text-2xl font-bold">RS {item.price}</span>
          <span className="line-through text-gray-500">RS {item.oldPrice}</span>
        </div>
 </div>
   </div>
    </Link>
        <button 
        className="mt-2 md:mt-3 w-full bg-[#00354B] text-white py-2 rounded-md hover:bg-[#02283A] transition"
        onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        </div>
    
   
  );
};

export default ProductCard;