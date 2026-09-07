const MyOrders = () => {
  const orders = [
    {
      id: "FRG10234",
      status: "Delivered",
      productName: "Autograph eau de parfum 100ml for men",
      quantity: 1,
      price: 2499,
      image: "/images/product.png",
    },
    {
      id: "FRG10235",
      status: "Out for delivery",
      productName: "Autograph eau de parfum 100ml for men",
      quantity: 1,
      price: 2499,
      image: "/images/product.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-gray-300 rounded-lg p-3"
        >

          {/* Order ID and Status */}
          <div className="flex justify-between items-center">

            <h3 className="font-semibold">
              Order ID: #{order.id}
            </h3>

            <span
              className={`text-white text-xs font-semibold px-3 py-2 rounded-md ${
                order.status === "Delivered"
                  ? "bg-green-700"
                  : "bg-yellow-600"
              }`}
            >
              {order.status}
            </span>

          </div>

          {/* Product Details */}
          <div className="flex items-center gap-4 mt-4">

            <img
              src={order.image}
              alt={order.productName}
              className="w-20 h-20 object-contain"
            />

            <div>

              <h4 className="font-semibold">
                {order.productName}
              </h4>

              <p className="text-gray-600 text-sm mt-1">
                Qty: {order.quantity}
              </p>

              <p className="font-bold text-xl mt-2">
                ₹{order.price.toLocaleString("en-IN")}
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default MyOrders;