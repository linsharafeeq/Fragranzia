import { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const ProfileAddress=({ openModal })=>{
    const [showModal, setShowModal]=useState(false);
        const [isEditing, setIsEditing]= useState(false);

    const [addressType, setAddressType]=useState("home");
const [selectedAddress, setSelectedAddress] = useState(null);
const [addresses, setAddresses] = useState([
  {
    id: 1,
    addressType: "home",
    fullName: "Rohan Jaison",
    phone: "+91 9876543210",
    address:
      "Apartment No. 104, Emerald Heights Opposite Lulu Mall Edappally,",
    city: "Kochi,Kerala",
    state: "Kerala",
    landmark: "Near Lulu Mall",
    pincode: "682024",
    alternativePhone: "",
  },
]);
 
  // Form data used inside the modal

 const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address:
      "",
    city: "",
    state: "",
    landmark: "",
    pincode: "",
    alternativePhone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAddress = () => {
    setSelectedAddress(null);
    setErrors({});
    setIsEditing(true);
    setFormData({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      pincode: "",
      alternativePhone: "",
    });



    setAddressType("home");
    setShowModal(true);
  };

  useEffect(() => {
  if (openModal) {
    handleAddAddress();
  }
}, [openModal]);

const handleEdit = (item) => {
  setSelectedAddress(item);
setErrors({});
  setFormData({
    fullName: item.fullName,
    phone: item.phone,
    address: item.address,
    city: item.city,
    state: item.state,
    landmark: item.landmark,
    pincode: item.pincode,
    alternativePhone: item.alternativePhone,
  });

  setAddressType(item.addressType);

  setIsEditing(false);
  setShowModal(true);
};


const handleSave = () => {

  const newErrors = {};

if (!formData.fullName.trim()) {
  newErrors.fullName = "Full name is required";
}
if (!formData.phone) {
  newErrors.phone = "Phone number is required";
}
if (formData.phone && formData.phone.length < 10) {
  newErrors.phone = "Phone number must be 10 digits";
}
if (!formData.address.trim()) {
  newErrors.address = "Address is required";
}

if (!formData.city.trim()) {
  newErrors.city = "City/District is required";
}

if (!formData.state.trim()) {
  newErrors.state = "State is required";
}
if (!formData.pincode) {
  newErrors.pincode = "Pincode is required";
}
if (formData.pincode && formData.pincode.length < 6) {
  newErrors.pincode = "Please enter a 6-digit pincode";
}

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  if (selectedAddress) {
    // Update existing address
    setAddresses((prevAddresses) =>
      prevAddresses.map((item) =>
        item.id === selectedAddress.id
          ? {
              ...item,
              addressType: addressType,
              ...formData,
            }
          : item
      )
    );
  } else {
    // Add new address
    const newAddress = {
      id: Date.now(),
      addressType: addressType,
      ...formData,
    };

    setAddresses((prevAddresses) => [
      ...prevAddresses,
      newAddress,
    ]);
  }

  setIsEditing(false);
  setShowModal(false);
  setSelectedAddress(null);
};


        return(
        <div>
            <div className="flex justify-end">
<button
onClick={handleAddAddress}
 className="w-[160px] rounded-md py-2 text-white bg-[#00354B]  mt-6 mb-2  lg:mt-0 lg:mb-0">
    Add Address
    </button>       
         </div>
<div className="space-y-3">
  {addresses.map((item)=>(
 <div 
 key={item.id}
  onClick={() => handleEdit(item)}
 className="p-3 rounded-md max-w-[440px]  shadow-[0_0_3px_rgba(0,0,0,0.20)]">
    <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">
            Address
        </h3>

        <div className="flex ">
        <span className="flex items-center gap-1 bg-[#00354B] text-white text-xs rounded-sm px-2 py-1">
{item.addressType === "home" && (
  <GoHome className="text-sm"/>
)}
{item.addressType === "office" && (
  <HiOutlineBuildingOffice2 className="text-sm"/>
)}
{item.addressType === "other" && (
  <IoLocationOutline className="text-sm"/>
)}

{item.addressType === "home" && "Home"}
{item.addressType === "office" && "Office"}
              {item.addressType === "other" && "Other"}



        </span>
       </div> 

       
</div>
<p className=" mt-1 text-sm font-semibold">
    {item.fullName}
</p>

<p className="mt-1 text-sm text-gray-700">
    {item.address}
          <br />
{item.city} - {item.pincode}
</p>
<div className="mt-1 flex items-center gap-1 text-sm text-gray-700">
      <FiPhone />
      <span>
            {item.phone}
      </span>
</div>
 </div>
 ))}
 </div>

      {/* Add Address Modal */}
{showModal && (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs "
    onClick={() => setShowModal(false)}
    >
        <div className="w-full max-w-[720px] bg-white  rounded-xl bg-white p-4 shadow-[0_0_3px_rgba(0,0,0,0.20)]"
          onClick={(e) => e.stopPropagation()}
        >

            <h2 className="text-lg font-semibold mb-2 ">
                    Address Type
            </h2>

            <div className="flex gap-4  mb-2">

<button
type="button"
onClick={()=>setAddressType("home")}
className={`w-[100px] rounded-md py-1 flex items-center justify-center gap-2  ${
    addressType === "home"
    ?"bg-[#00354B] text-white"
    : "  shadow-[0_0_3px_rgba(0,0,0,0.20)]  bg-white"
}`}
>
    <GoHome size={20}/>
    Home
</button>

<button
type="button"
onClick={()=>setAddressType("office")}
className={`w-[100px] rounded-md py-1 flex items-center justify-center gap-2  ${
    addressType === "office"
    ?"bg-[#00354B] text-white"
    : "  shadow-[0_0_3px_rgba(0,0,0,0.20)]  bg-white"
}`}
>
    <HiOutlineBuildingOffice2 size={20}/>
     Office
</button>

<button
type="button"
onClick={()=>setAddressType("other")}
className={`w-[100px] rounded-md py-1 flex items-center justify-center gap-2  ${
    addressType === "other"
    ?"bg-[#00354B] text-white"
    : "  shadow-[0_0_3px_rgba(0,0,0,0.20)]  bg-white"
}`}
>
    <IoLocationOutline size={20}/>
    Other
</button>
            </div>

            {/* Full Name + Phone */}

<div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-2">
<div>

    <label className="font-semibold mb-2 block">
        Full Name
    </label>
    <input type="text"
    name="fullName"
    placeholder="Enter full name"
    value={formData.fullName}
onChange={(e) => {
  const value = e.target.value.replace(/[^a-zA-Z ]/g, "");

  setFormData((prev) => ({
    ...prev,
    fullName: value,
  }));
}}
  required
disabled={!isEditing}
className={`w-full rounded-md  p-2 outline-none ${

    isEditing ? 
    "border border-gray-300 text-gray-700 bg-white" :
    "border border-transparent text-gray-700 bg-gray-100"
}`}
 />
    {errors.fullName && (
  <p className="text-red-500 text-xs ">
    {errors.fullName}
  </p>
)}
   
</div>

<div>
    <label className="font-semibold mb-2 block">
          Phone Number
    </label>
    <input type="text"
    name="phone"
      maxLength={10}
   
    placeholder="Enter 10-digit mobile number "
  required
    value={formData.phone}
onChange={(e)=>{
  const value = e.target.value.replace(/\D/g, "");
  setFormData((prev)=>({
    ...prev,
    phone:value,
  }));
}}


disabled={!isEditing}


className={`w-full rounded-md p-2 outline-none ${

    isEditing ? 
    "border border-gray-300 text-gray-700 bg-white" :
    "border border-transparent text-gray-700 bg-gray-100"
}`}
    
    />
{errors.phone && (
  <p className="text-red-500 text-xs ">
    {errors.phone}
  </p>
)}
</div>
</div>

<div className="mt-2">
             <label className="font-semibold mb-2 block">
                Address
              </label>

               <textarea
                name="address"
                placeholder="Enter house or building details"
                value={formData.address}
                onChange={handleChange}
                  required
                disabled={!isEditing}
                className={`w-full rounded-md  p-2 outline-none resize-none h-[90px] ${
                  isEditing
                    ? "border border-gray-300 bg-white text-gray-700"
                    : "border border-transparent bg-gray-100 text-gray-700"
                }`}
              />
              {errors.address && (
  <p className="text-red-500 text-xs">
    {errors.address}
  </p>
)}
</div>

<div className="grid grid-cols-1  md:grid-cols-3 gap-4 mt-2">

<div>
      <label className="font-semibold mb-2 block">
                  City/District
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter City/District"
                  value={formData.city}
                  onChange={handleChange}
                    required
                  disabled={!isEditing}
                  className={`w-full rounded-md  p-2 outline-none ${
                    isEditing
                      ? "border border-gray-300 bg-white text-gray-700"
                      : "border border-transparent bg-gray-100 text-gray-700"
                  }`}
                />
{errors.city && (
  <p className="text-red-500 text-xs">
    {errors.city}
  </p>
)}

</div>

 <div>
                <label className="font-semibold mb-2 block">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                    required
                  disabled={!isEditing}
                  className={`w-full rounded-md  p-2 outline-none ${
                    isEditing
                      ? "border border-gray-300 bg-white text-gray-700"
                      : "border border-transparent bg-gray-100 text-gray-700"
                  }`}
                />
                {errors.state && (
  <p className="text-red-500 text-xs">
    {errors.state}
  </p>
)}
              </div>

     <div>
                <label className="font-semibold mb-2 block">
                  Land Mark
                </label>

                <input
                  type="text"
                  name="landmark"
                  placeholder="Enter landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full rounded-md  p-2 outline-none ${
                    isEditing
                      ? "border border-gray-300 bg-white text-gray-700"
                      : "border border-transparent bg-gray-100 text-gray-700"
                  }`}
                />
                {errors.landmark && (
  <p className="text-red-500 text-xs">
    {errors.landmark}
  </p>
)}
              </div>

</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
     <div>
                <label className="font-semibold mb-2 block">
                  PinCode
                </label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                   maxLength={6}
                      required
                  value={formData.pincode}
                    onChange={(e)=>{
                    const value =e.target.value.replace(/\D/g, "");
                    setFormData((prev)=>({
                      ...prev,
                        pincode:value,
                    }));
                  }}
                  disabled={!isEditing}
                  className={`w-full rounded-md  p-2 outline-none ${
                    isEditing
                      ? "border border-gray-300 bg-white text-gray-700"
                      : "border border-transparent bg-gray-100 text-gray-700"
                  }`}
                />
                {errors.pincode && (
  <p className="text-red-500 text-xs">
    {errors.pincode}
  </p>
)}
              </div>

  <div>
                <label className="font-semibold mb-2 block">
                  Alternative Phone number(Optional)
                </label>

                <input
                  type="text"
                  name="alternativePhone"
                  placeholder="Enter Alternative Phone number"
               maxLength={10}
                  value={formData.alternativePhone}
                  onChange={(e)=>{
                    const value =e.target.value.replace(/\D/g, "");
                    setFormData((prev)=>({
                      ...prev,
                        alternativePhone:value,
                    }));
                  }}

                  disabled={!isEditing}
                  className={`w-full rounded-md  p-2  outline-none ${
                    isEditing
                      ? "border border-gray-300 bg-white text-gray-700"
                      : "border border-transparent bg-gray-100 text-gray-700"
                  }`}
                />
              </div>

</div>

{/* save button */}



<div className="flex justify-end mt-4">

 <button
  type="button"
  onClick={isEditing ? handleSave : () => setIsEditing(true)}
  className="w-[150px] rounded-md py-2 text-white bg-[#00354B]"
>
  {isEditing ? "Save" : "Edit"}
</button>
</div>




        </div>
    </div>
)}

        </div>
    )
}
export default ProfileAddress;