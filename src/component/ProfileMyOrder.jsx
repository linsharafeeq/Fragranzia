const ProfileMyOrder = ({ orders = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-6">
      {orders.map((order) => {
        const item = order.items?.[0];

        return (
          <div
            key={order.id}
            className="w-full h-[155px] rounded-lg border border-gray-300 bg-white px-3 py-3"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold text-black">
                Order ID: #{order.id}
              </h3>

              <span
                className={`px-3 py-2 rounded-md text-[12px] font-semibold text-white ${
                  order.status === "Delivered"
                    ? "bg-green-700"
                    : "bg-[#c9930a]"
                }`}
              >
                {order.status || "Delivered"}
              </span>
            </div>

            {/* Product */}
            <div className="flex items-center mt-3">
              
              {/* Product image */}
              <div className="w-[85px] h-[80px] flex items-center justify-center flex-shrink-0">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-[85px] h-[80px] object-contain"
                />
              </div>

              {/* Product information */}
              <div className="ml-3">
                <h4 className="text-[15px] font-semibold text-black">
                  {item?.name}
                </h4>

                <p className="text-[14px] text-gray-600 mt-1">
                  Qty: {item?.quantity || 1}
                </p>

                <p className="text-[20px] font-bold text-black mt-1">
                  ₹{Number(item?.price || 0).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileMyOrder;