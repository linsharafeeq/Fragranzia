import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import CartCheckoutCard from "./component/CartCheckoutCard";
import CartProductCard from "./component/CartProductCard";

const Cart=({ cartItems,   increaseQuantity,removeFromCart,
  decreaseQuantity })=>{
return(
    <section className=" lg:flex  items-start justify-between px-2 py-2 mb-4  md:px-6 lg:px-8">
        <div className="w-full">
              <h1 className="text-lg md:text-xl  lg:text-2xl font-bold">
          Cart
          </h1>

          <div className=" hidden md:flex items-center  gap-1 text-xs md:text-sm text-gray-500 mt-0 md:mt-1">
            <Link to="/Home" className="hover:text-[#00354B] transition">
              Home
            </Link>

            <MdKeyboardArrowRight />
            <span className="text-gray-700">Cart</span>
          </div>

        {cartItems.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20">
    <h2 className="text-lg md:text-xl font-semibold">
      Your cart is empty
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Add some products to your cart.
    </p>
  </div>
) : (
  cartItems.map((item) => (
    <CartProductCard
      key={item.id}
      item={item}
        increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
   removeFromCart={removeFromCart}
    />
  ))
)}

 </div>

{cartItems.length > 0 && (
  <div>
    <CartCheckoutCard cartItems={cartItems} />
  </div>
)}

    </section>
)
}
export default Cart;