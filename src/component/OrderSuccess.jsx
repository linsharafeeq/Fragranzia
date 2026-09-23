
import { PiCheckFat } from "react-icons/pi";
import { useNavigate } from "react-router-dom"

const OrderSuccess=()=>{
    const navigate =useNavigate();
    return(
        <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black/10 px-4 backdrop-blur-xs  ">
            <div className="w-full max-w-[620px]  rounded-xl bg-white px-8 py-10 shadow-[0_0_3px_rgba(0,0,0,0.20)]  ">
<div  className=" mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#4BC968] ">
<PiCheckFat className="text-[100px] text-white" />
</div>

<h2 className=" text-center mt-4 text-2xl font-bold">
          Thank You for Ordering!
</h2>
<p className="text-center mt-4 text-base ">
      Your order has been successfully placed.
          <br />
          We're preparing it for shipment
</p>

<div className="mt-4 flex gap-4 items-center justify-center">

    <button
    onClick={()=>navigate("/Home")}
    className=" rounded-md border-[2px]  border-[#00354B] text-base font-semibold text-black w-[200px] py-2"
    >
         Back to Home
    </button>


<button
    
    className=" rounded-md border-[2px] border-[#00354B] bg-[#00354B] text-base font-semibold text-white w-[200px] py-2"
    >
         Track Order
    </button>
    
</div>

            </div>
        </div>
    )
}
export default OrderSuccess;