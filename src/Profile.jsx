import { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link,useLocation } from "react-router-dom";
import ProfileDetails from "./component/ProfileDetails";
import ProfileAddress from "./component/ProfileAddress";
import ProfileMyOrder from "./component/ProfileMyOrder";


const Profile=({ orders })=>{
    
const [activeTab, setActiveTab] = useState(() => {
  return localStorage.getItem("profileTab") || "profile";
});
const handleTabChange = (tab) => {
  setActiveTab(tab);
  localStorage.setItem("profileTab", tab);
};

const location = useLocation();
useEffect(() => {
  if (location.state?.openAddressModal) {
     handleTabChange("address");
  }
}, [location.state]);
    return(

        <section className="px-2 py-3  md:py-2 md:px-6 lg:px-8">

<div>
            <h1 className="hidden md:flex text-lg md:text-xl lg:text-2xl font-bold">
              Profile
            </h1>
            <div className=" hidden md:flex items-center  gap-1 text-xs md:text-sm text-gray-500 mt-0 md:mt-1">
              <Link to="/Home" className="hover:text-[#00354B] transition">
                Home
              </Link>

              <MdKeyboardArrowRight />
              <span className="text-gray-700">Profile</span>
            </div>
          </div>

<div className="flex gap-4 md:gap-8 mt-4 ">
<button 
onClick={()=>handleTabChange("profile")}
className={`w-[200px] rounded-md py-3 ${
    activeTab === "profile"
    ? "bg-[#00354B] text-white"
    :" shadow-[0_0_3px_rgba(0,0,0,0.20)]  bg-white"
}`}
>
     Profile
</button>

<button 
onClick={()=>handleTabChange("address")}
className={`w-[200px] rounded-md py-3 ${
    activeTab === "address"
    ? "bg-[#00354B] text-white"
    :"  shadow-[0_0_3px_rgba(0,0,0,0.20)]  bg-white"
}`}
>
     Address
</button>

<button 
onClick={()=>handleTabChange("orders")}
className={`w-[200px] rounded-md py-3 ${
    activeTab === "orders"
    ? "bg-[#00354B] text-white"
    :"  shadow-[0_0_3px_rgba(0,0,0,0.20)]  bg-white"
}`}
>
       My Orders
</button>

</div>

  {activeTab === "profile" && <ProfileDetails />}


      {activeTab === "address" &&   <ProfileAddress
    openModal={location.state?.openAddressModal}
   />}

      {activeTab === "orders" && <ProfileMyOrder orders={orders} />} 

        </section>
    )
}

export default Profile;