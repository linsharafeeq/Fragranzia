import CheckoutAddress from "./component/CheckoutAddress.jsx";
import CheckoutPageProductCard from "./component/CheckoutPageProductCard";
import CheckoutPaymentMethods from "./component/CheckoutPaymentMethods.jsx";
import CheckoutPricedetails from "./component/CheckoutPricedetails";
import OrderSuccess from "./component/OrderSuccess.jsx";
import OrderFail from "./component/OrderFail.jsx";
import { useState } from "react";
const CheckoutPage=({cartItems, increaseQuantity,  buyNowItem,
  decreaseQuantity,   placeOrder })=>{
      const [showSuccess, setShowSuccess] = useState(false);
      const [showFailed, setShowFailed] = useState(false);
const checkoutItems = buyNowItem ? [buyNowItem] : cartItems;
      const totalPrice = checkoutItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
return(
    <section className="px-2 py-2  md:px-6 lg:px-8">

        <div className="lg:flex justify-between">
        <div>

        
<div>
    {checkoutItems.map((item) => (
  <CheckoutPageProductCard
    key={item.id}
    item={item}
      increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  />
  
))}
</div>

<div>
   <CheckoutAddress/>
</div>


</div>

<div>
    <div>
    <CheckoutPricedetails
cartItems={checkoutItems}
  totalPrice={totalPrice}
    />
    </div>
    <div>
    
       <CheckoutPaymentMethods
         onPayNow={() => {
          setShowSuccess(true)
placeOrder(checkoutItems);}
          
         } 
           onFail={() => setShowFailed(true)} />
    </div>
</div>

</div>
{showSuccess && <OrderSuccess />}
{showFailed && <OrderFail />}
    </section>
)
}
export default CheckoutPage;