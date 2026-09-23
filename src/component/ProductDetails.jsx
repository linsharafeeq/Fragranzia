import { FaRegHeart,FaHeart,  FaStar } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocalOffer } from "react-icons/md";
import { Link , useNavigate} from "react-router-dom";
import data from "../data/products.json";
import { FiMinus, FiPlus } from "react-icons/fi";
import Suggested from "./Suggested";
import { toast } from "react-toastify";
import { LuShare2 } from "react-icons/lu";

import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetails=({addToCart ,buyNow  })=>{
    const [isLiked, setIsLiked] = useState(false);
    const { id } = useParams();
   const navigate = useNavigate();

const product = data.allproducts.find(
  (item) => item.id === Number(id)
  
);

const [quantity, setQuantity] = useState(1);
const handleAddToCart = () => {
  addToCart(product, quantity);

  toast.success("Item added to cart!", {
    style: {
      background: "#07892a",
      color: "white",
      borderRadius: "10px",
      width: "200px",
    },
  });
};
const handlePurchaseNow = () => {
  buyNow(product, quantity);
  navigate("/checkout");
};
if (!product) {
  return <h2>Product not found</h2>;
}


const handleShare = async () => {
  const shareData = {
    title: product.name,
    text: `Check out ${product.name}`,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied!");
    }
  } catch (error) {
    console.log("Share cancelled");
  }
};





return( 
<main>
    <div className="px-2 py-3  md:py-2 md:px-6 lg:px-8">
<div className=" hidden md:flex items-center  gap-1 text-xs md:text-sm text-gray-500 mt-0 md:mt-2">
              <Link to="/Home" className="hover:text-[#00354B] transition">
                Home
              </Link>

              <MdKeyboardArrowRight />
              <Link to="/Products" className="hover:text-[#00354B] transition">
               Products
              </Link>

              <MdKeyboardArrowRight />

              <span className="text-gray-700">{product.name}</span>
            </div>

<section className="grid lg:grid-cols-2 gap-20  mt-4 ">
<div>
    <div className="relative">
<img src={product.image}
 alt="image" 
 className="w-full max-w-xs mx-auto"/>
 <div className="absolute flex flex-col gap-4 top-0 right-4">

        <button 
        onClick={()=>setIsLiked((prev)=> !prev)}
        className="w-10 h-10 rounded-full shadow-[0_0_6px_rgba(0,0,0,0.20)]  bg-white flex justify-center items-center">
                  
                  {isLiked?(
<FaHeart className="text-red-500 text-lg"/>
                  ):(
 <FaRegHeart className="text-gray-800 text-lg"/>
                  )}

                   
                  </button>

                  <button
                    onClick={handleShare}
                  className="w-10 h-10 rounded-full shadow-[0_0_6px_rgba(0,0,0,0.20)] bg-white flex justify-center items-center">
                <LuShare2 className="text-lg"/>
                  </button>
 </div>
    </div>
<div className="flex flex-col gap-2">
                  <button
                  onClick={handlePurchaseNow}
                  className="w-full border-2 border-[#00354B]   text-white bg-[#00354B] py-2 rounded-sm text-lg font-semibold ">

          Purchase Now
    </button>
              <button
           onClick={handleAddToCart}
              className="w-full border-2 border-[#00354B]   text-[#00354B] py-2 rounded-sm text-lg font-semibold ">
    
        Add to Cart
    </button>
</div>
    
</div>
<div className="-mt-16 lg:mt-0">
    <h1 className="text-xl md:text-2xl font-bold">
        {product.name} {product.subtitle}</h1>

<p className=" text-sm md:text-md font-normal mt-1  text-gray-700">
    {product.category}</p>
<div className="flex items-center gap-6 mt-1">
    <span className="font-semibold flex items-center gap-2">{product.rating}
         <FaStar className="text-green-500" />
    </span>
             
<span className="text-gray-500 text-sm ">{product.ratingCount} Ratings</span>
</div>

<p className="text-red-500 mt-1 text-sm">{product.stock}</p>

<div className="flex items-center gap-6 mt-4">
    <h2 className="text-2xl md:text-3xl font-bold">Rs {product.price}</h2>
<span className="line-through text-gray-500">Rs {product.oldPrice}</span>
<span className="text-green-600 font-semibold">{product.off} Off</span>
</div>

<div className="flex items-center border-2 border-[#00354B] rounded-md mt-4 w-[126px]">
    <button className="px-5 py-2"
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
    >
          <FiMinus />
    </button>
<span className="font-semibold ">{quantity}</span>
  <button className="px-5 py-2"
   onClick={() => setQuantity((prev) => prev + 1)}
  >
          <FiPlus />
    </button>

</div>

<div className="mt-4">
    <h3 className="text-md md:text-lg  font-semibold">Delivery</h3>
    <p className="text-sm md:text-md text-gray-700">{product.delivery}</p>
    <p className="text-sm md:text-md text-gray-700">{product.deliverydate}</p>
</div>

<div className="mt-4">
    <h3 className=" text-md md:text-lg  font-semibold">Description</h3>
    <p className=" text-sm md:text-md text-gray-700">{product.description}</p>
    
</div>
<div className="mt-4">
  <h3 className="font-semibold text-md md:text-lg mb-2">
    Available Offers
  </h3>

  <div className="text-sm md:text-md text-gray-700">
    {product.offers.map((offer, index) => (
      <div key={index} className="flex gap-2">
        <MdLocalOffer className=" text-md text-green-600 mt-1" />
        <p>{offer}</p>
      </div>
    ))}
  </div>
</div>


</div>

</section>
 </div>

<Suggested currentProductId={product.id}
addToCart={addToCart}

/>





   
    
</main>
   
)

}
export default ProductDetails;