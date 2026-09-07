
const CartProductCard=({item ,   increaseQuantity, removeFromCart,
  decreaseQuantity})=>{
  return(
    <section className="max-w-[800px] mt-4 shadow-[0_0_3px_rgba(0,0,0,0.20)] rounded-md p-4 ">

    <div className="flex gap-3  items-center">
<div className="w-36 h-36 flex items-center justify-center ">
  <img src={item.image}
  alt="img"
  className="max-w-full max-h-full object-contain" />
</div>

<div className="flex-1">
   <h2 className="text-lg font-semibold">
          {item.name}
        </h2>

     <div className="flex items-center font-semibold border-[1.5px] border-[#00354B] rounded-sm overflow-hidden max-w-[100px] mt-2">
<button
 onClick={() => decreaseQuantity(item.id)}
className="px-3 py-1 text-[#00354B] "
>
  -
</button>
   <span className="px-3 py-1 text-[#00354B]">
          {item.quantity}
        </span>

<button

  onClick={() => increaseQuantity(item.id)}
className="px-3 py-1 text-[#00354B] ">
  +
</button>
     </div>



<div className="flex gap-4 mt-2 ">
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

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
  <button
    type="button"
  onClick={() => removeFromCart(item.id)}
  className="border-2 border-red-600 text-red-600 py-1 rounded-sm   "
  >
    Delete
  </button>

 <button
  className="border-2 border-[#00354B] text-[#00354B] py-1 rounded-sm   "
  >
          Share
  </button>

   <button
  className="border-2 border-[#00354B] bg-[#00354B] py-1 rounded-sm text-white  "
  >
    Buy
  </button>
    
</div>



        
</div>

    </div>

    </section>
  );
};
export default CartProductCard;