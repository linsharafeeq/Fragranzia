import { CiCreditCard1 } from "react-icons/ci";
import { FaGooglePay } from "react-icons/fa";
import { PiBank } from "react-icons/pi";
import { TbCash } from "react-icons/tb";
import googlepay from "../assets/googlepay.jpg"
import upi from "../assets/upi-icon.webp"
import { useState } from "react";
const CheckoutPaymentMethods=({onPayNow ,  onFail})=>{
const [selectedMethod, setSelectedMethod]=useState("googlePay")
    const paymentMethods=[
      {
             id: "googlePay",
            name: "Google Pay",
            icon: <img src={googlepay} alt="pay"  className="w-6 h-6 object-contain"/>,
          },
          {
            id: "cod",
            name: "Cash on delivery (cash/UPI)",
            icon: <TbCash className="text-2xl" />,
          },
          {
            id: "upi",
            name: "Paytm/Phone Pay/Amazon Pay etc",
            icon: <img src={upi} alt="upi" className="w-6 h-6 object-contain"/>,
          },
          {
            id: "card",
            name: "Credit/Debit card",
            icon: <CiCreditCard1 className="text-2xl" />,
          },
          {
            id: "netbanking",
            name: "Net Banking",
            icon: <PiBank className="text-2xl" />,
          },
    ];

return(

<section className="w-full lg:w-[400px] mb-4 bg-white mt-4 shadow-[0_0_3px_rgba(0,0,0,0.20)]  rounded-md py-4 px-8">

 <h1 className="mb-4 text-xl font-semibold">
        Payment Methods
      </h1>

<div className="space-y-5">
  {paymentMethods.map((method)=>(
    <div
    key={method.id}
    onClick={()=>setSelectedMethod(method.id)}
    className="flex items-center justify-between cursor-pointer"
    >

<div className="flex items-center gap-3">
  <div className=" flex justify-center items-center">
    {method.icon}
  </div>
  <span className="text-sm ">
    {method.name}
    </span>

</div>
<div className="w-4 h-4 rounded-full border-[#00354B] border flex items-center justify-center">
{selectedMethod === method.id && (
  <div className="w-3 h-3 rounded-full bg-[#00354B]"/>
)}
</div>

    </div>
  ))}
  
</div>

      <div>
      <button
   
  onClick={onPayNow}
 className="mt-3 w-full rounded-md  h-[44px] bg-[#00354B] text-sm font-medium text-white flex items-center justify-center">
     Pay Now
</button>
      </div>
</section>

)

}
export default CheckoutPaymentMethods;