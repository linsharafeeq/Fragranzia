import { FaStar } from "react-icons/fa";

const CheckoutPageProductCard=({item,   increaseQuantity,
  decreaseQuantity})=>{
  return(
    <section className=" w-full lg:w-[730px]  mt-4 shadow-[0_0_3px_rgba(0,0,0,0.20)] rounded-md p-4 ">

    <div className="flex gap-3  items-center">
<div className="w-36 h-36 flex items-center justify-center ">
  <img src={item.image}
  alt="img"
  className="max-w-full max-h-full object-contain" />
</div>

<div className="flex-1">
   <h2 className="text-lg line-clamp-1 md:line-clamp-none font-semibold">
          {item.name} {item.subtitle}
        </h2>

<p className="text-sm flex items-center gap-2" >
  <span> {item.category} </span> 
  
    <span className="font-semibold">{ item. rating}    
    </span>
    <span>  <FaStar className="text-green-500" /></span>
    </p>

     <div className="flex items-center font-semibold border-[1.5px] border-[#00354B] rounded-sm overflow-hidden max-w-[100px] mt-2">
<button className="px-3 py-1 text-[#00354B] "
  onClick={() => decreaseQuantity(item.id)}
>
  -
</button>
   <span className="px-3 py-1 text-[#00354B]">
          {item.quantity}
        </span>

<button className="px-3 py-1 text-[#00354B] "
  onClick={() => increaseQuantity(item.id)}
>
  +
</button>
     </div>



<div className="flex gap-2 md:gap-4 mt-2 ">
  <span className="text-xl font-bold">
    Rs {item.price }
  </span>
 <span className="text-gray-500 line-through">
    Rs {item.oldPrice } 
  </span>
<span className="text-green-600 font-semibold">
  {item.off} off
</span>
</div>

<div className="text-sm mt-2 space-y-1 ">
    <p>{item.delivery}</p>
    <p className="text-green-600">{item.return}</p>
</div>

        
</div>

    </div>

    </section>
  );
};
export default CheckoutPageProductCard;