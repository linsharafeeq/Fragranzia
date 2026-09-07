import { Link } from "react-router-dom";

const CartCheckoutCard=({cartItems})=>{

    const totalItems = cartItems.reduce( (total, item) => total + item.quantity, 0 );

    const totalAmount = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
    return(
        <div className="w-full lg:w-[320px] mb-4">
        <div className=" bg-white mt-4 shadow-[0_0_3px_rgba(0,0,0,0.20)]  rounded-md p-4">
<h2 className="mb-4 text-xl font-semibold">
    Check Out
</h2>

<div className="mb-3 flex items-center justify-between text-sm ">
    <span>price({totalItems} items)</span>
    <span>Rs {totalAmount}</span>
</div>

<div className="mb-3 flex items-center justify-between text-sm ">
    <span>Discount</span>
    <span>  Rs 0</span>
</div>


  <div className="flex items-center justify-between text-sm">
          <span>Delivery Charge</span>

          <span className="font-semibold text-green-600">
            Free
          </span>
        </div>

 <div className="mt-4 flex items-center justify-between text-base font-semibold">
          <span>Total Amount</span>

          <span>
          Rs  {totalAmount}
          </span>
        </div>

        </div>

<Link
 to="/checkout"
 className="mt-3 w-full rounded-md  h-[44px] bg-[#00354B] text-sm font-medium text-white flex items-center justify-center">
     Proceed to Buy
</Link>


</div>
    )
}
export default CartCheckoutCard;