const ProfileMyOrder = ({ orders = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-gray-300 rounded-lg p-3 min-h-[155px]"
        >
          {/* Order Header */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-base">
              Order ID: #{order.id}
            </h3>

            <span
              className={`text-white text-xs font-semibold px-4 py-2 rounded-md ${
                order.status === "Delivered"
                  ? "bg-green-700"
                  : "bg-yellow-600"
              }`}
            >
              {order.status}
            </span>
          </div>

          {/* Product Details */}
          <div className="mt-3">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center"
              >
                {/* Product Image */}
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Information */}
                <div className="ml-3">
                  <h4 className="font-semibold text-sm sm:text-base">
                    {item.productName}
                  </h4>

                  <p className="text-gray-600 text-sm mt-1">
                    Qty: {item.quantity}
                  </p>

                  <p className="font-bold text-xl mt-1">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileMyOrder;