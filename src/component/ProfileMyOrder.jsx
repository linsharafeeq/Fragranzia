const ProfileMyOrder =({ orders })=>{

    

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
{orders.map((order)=>
<div
className=" rounded-md p-3  shadow-[0_0_3px_rgba(0,0,0,0.20)] ">

<div className="flex justify-between  items-center">
    <h3 className="font-semibold text-sm">
        Order ID:#{order.id}
    </h3>

    <span
    className={`text-white text-xs px-2 py-1  rounded-md ${
order.status === "Delivered"
? "bg-green-700"
:"bg-yellow-600"
    }`}
    >
       {order.status}
    </span>
</div>

{/* Product Details */}

<div className="flex items-center">

    <img
     src={order.image}
      alt={order.productName}
      className="w-30 h-30 object-contain"
      />
<div>
<h4 className="font-semibold">
    {order.productName}
</h4>

<p className="text-gray-600 text-sm mt-1">
Qty:{order.quantity}
</p>

<p className="font-bold text-xl mt-1">
    Rs {order.price.toLocaleString("en-IN")}
</p>


</div>


</div>



</div>
)}
        </div>
    );
};

export default ProfileMyOrder;