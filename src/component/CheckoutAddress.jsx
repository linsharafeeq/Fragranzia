import { useNavigate } from "react-router-dom";

const CheckoutAddress=()=>{
    const navigate = useNavigate();

    const handleAddAddress=()=>{
        navigate("/profile",{
            state:{
          openAddressModal:true,
            },
        });
    };


    return(
        <div className="w-full ">
           
<h2 className="mt-4 text-xl font-semibold">
   Personal Details
</h2>
<div className="flex items-center mt-3 gap-4">
<div className=" w-30 flex items-center justify-center bg-[#00354B] text-white text-sm font-semibold inline-flex  rounded-sm py-2 px-3">
      Address 
</div>

<button
  onClick={handleAddAddress}
  className="w-30 flex items-center justify-center bg-gray-100 hover:bg-gray-300 text-sm font-semibold text-black transition rounded-sm py-2 px-3"
>
  Add address +
</button>

</div>

{/* 
<h3 className="mt-4 text-base font-semibold">
   Price Details
</h3> */}

<div className="mt-4  rounded-sm py-4 px-8 border-[2px] border-[#00354B] ">
    <h2 className="font-semibold text-base">
          Rohan Jaison
    </h2>
    <p className="text-sm mt-2">
        Apartment No. 104, Emerald Heights Opposite Lulu Mall Edappally,
          <br />
          Kochi Kerala 682024
    </p>
    <p className=" text-sm mt-2">
         +91 9876543210
    </p>
</div>

        </div>
    )
}
export default CheckoutAddress;