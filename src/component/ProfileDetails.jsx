import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ProfileDetails=()=>{

    const [isEditing, setIsEditing]= useState(false);
    const [showPassword,setShowPassword]=useState(false);

const[formData, setFormData]=useState({
    fullName:"Thomas",
    email:"thomas12@gmail.com",
    phone: "+91 98765 43210",
    dob:"23-05-2001",
    gender:"Male",
    password:" &qweryuil"
});

const handleChange=(e)=>{
const {name, value}=e.target;
setFormData((prev)=>({
...prev,
[name]:value,
}));

};

const handleEditSave=()=>{
    if(isEditing){
        console.log("saved:",formData);
        
    }
    setIsEditing(!isEditing);
};

return(
   <div>
        <div  className="grid grid-cols-1 gap-x-9 gap-y-7 md:grid-cols-2 lg:grid-cols-3 mt-4">

<div>
    <label className="font-semibold mb-2 block">
          Full Name
    </label>  

<input
 type="text" 
 name="fullName"
value={formData.fullName}
onChange={handleChange}
disabled={!isEditing}
className={`w-full rounded-md px-3 py-3 outline-none ${

    isEditing ? 
    "border border-gray-300 text-gray-700 bg-white" :
    "border border-transparent text-gray-700 bg-gray-100"
}`}
 />

</div>


<div>
    <label className="font-semibold mb-2 block">
        Email
    </label>  

<input
 type="email" 
 name="email"
value={formData.email}
onChange={handleChange}
disabled={!isEditing}
className={`w-full rounded-md px-3 py-3 outline-none ${

    isEditing ? 
    "border border-gray-300 text-gray-700 bg-white" :
    "border border-transparent text-gray-700 bg-gray-100"
}`}
 />

</div>


<div>
    <label className="font-semibold mb-2 block">
         Phone Number
    </label>  

<input
 type="text" 
 name="Phone"
value={formData.phone}
onChange={handleChange}
disabled={!isEditing}
className={`w-full rounded-md px-3 py-3 outline-none ${

    isEditing ? 
    "border border-gray-300 text-gray-700 bg-white" :
    "border border-transparent text-gray-700 bg-gray-100"
}`}
 />

</div>

  <div>
          <label className="mb-2 block font-semibold">
            Date of Birth
          </label>

          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full rounded-lg px-3 py-3 outline-none ${
              isEditing
                ? "border border-gray-300 text-gray-700 bg-white"
                : "border border-transparent text-gray-700 bg-gray-100"
            }`}
          />
        </div>


  <div>
          <label className="mb-2 block font-semibold">
            Gender
          </label>

          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full rounded-lg px-3 py-3 outline-none ${
              isEditing
                ? "border border-gray-300 text-gray-700 bg-white"
                : "border border-transparent text-gray-700 bg-gray-100"
            }`}
          />
        </div>

<div >
    <label  className="mb-2 block font-semibold">
        Password
    </label>
    <div className="relative">
        <input
         type={showPassword ? "text" : "password"}
         name="password"
         value={formData.password}
         onChange={handleChange}
         disabled={!isEditing}
            className={`w-full rounded-lg px-3 py-3 outline-none ${
              isEditing
                ? "border border-gray-300 bg-white text-gray-700"
                : "border border-transparent bg-gray-100 text-gray-700"
            }`}
        />
<button 
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-4 top-5"
>
    {showPassword? (
<FiEye className="text-xl text-gray-700 "/>
    ):(
        <FiEyeOff className="text-xl text-gray-700"/>
    )
}
</button>

    </div>
</div>

        </div>

        <div className="flex justify-end mt-6"> 
<button
onClick={handleEditSave}
className={`w-[140px] rounded-md py-2 text-lg ${
    isEditing
    ?" bg-[#00354B] text-white"
    : "border-2 border-[#00354B] bg-white text-[#00354B]"
} `}
>


    {isEditing ? "Save":"Edit"}
</button>
        </div>

   </div>
)
}
export default ProfileDetails;