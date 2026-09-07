
const CheckoutPricedetails=({ cartItems, totalPrice })=>{
  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
     return(
        <div className="w-full lg:w-[400px] mb-4">
        <div className=" bg-white mt-4 shadow-[0_0_3px_rgba(0,0,0,0.20)]  rounded-md py-4 px-8">
<h2 className="mb-4 text-xl font-semibold">
   Price Details
</h2>

<div className="mb-3 flex items-center justify-between text-sm ">
    <span>price ({totalItems} items)</span>
    <span>Rs {totalPrice}</span>
</div>

<div className="mb-3 flex items-center justify-between text-sm ">
    <span>Discount </span>
    <span>  Rs 0</span>
</div>


  <div className="flex items-center justify-between text-sm">
          <span>Delivery Charge</span>

          <span className="font-semibold text-green-600">
            Free
          </span>
        </div>

 <div className="mt-4 flex items-center justify-between text-base font-semibold border-t-1 pt-2">
          <span>Total Amount</span>

          <span className="font-bold">
            Rs {totalPrice}
          </span>
        </div>

        </div>



</div>
    )
}
export default CheckoutPricedetails;