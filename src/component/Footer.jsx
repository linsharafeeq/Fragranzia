import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
<footer className="bg-[#8BB8BE] text-black ">

<div className="px-6  lg:px-10 py-10">

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 lg:gap-y-0">

<div className="flex items-center justify-center justify-start " >
<h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00354B]">
  Fragranzia
</h1>

</div>

<div>
    <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-3">
        Pages
    </h2>
<ul className="flex flex-col gap-3 text-sm md:text-base">
    <li>
        <Link
        to="/"
        className="hover:text-[#00354B] transition"
        >
        Home
        </Link>
        </li>
    <li>
        <Link
        to="/products"
        className="hover:text-[#00354B] transition"
        >
        Products
        </Link>
        </li>

    <li>Gifting</li>

    <li>
        <Link
        to="/about"
        className="hover:text-[#00354B] transition"
        >
        About
        </Link>
        </li>

</ul>


</div>

<div>
        <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-3">
        Quick Links
    </h2>
<ul className="flex flex-col gap-3 text-sm md:text-base">
    <li> Privacy Policy</li>
    <li> Terms & Conditions</li>

    <li> FAQs</li>

    <li> Customer Service</li>

</ul>
</div>

<div className=" space-y-4">

    <div className="flex items-center gap-2">
<FiMail size={21} />
<a href="mailto:ftrafurniture@gmail.com"
className="hover:text-[#00354B] transition"

>
    ftrafurniture@gmail.com
</a>

    </div>

<div className="flex items-center gap-2">
  <FiPhone size={21} />
  <a href="tel:+919876543210"
  
className="hover:text-[#00354B] transition"

  >
+919876543210
  </a>
</div>



<h2 className="text-base md:text-lg lg:text-xl font-semibold mb-3">
     Social Media
</h2>

<div className="flex gap-4 text-xl ">

<a href="#">
<FaInstagram className="hover:scale-110 transition"/>

</a>

<a href="#">
<FaFacebookF className="hover:scale-110 transition"/>

</a>

<a href="#">
<FaXTwitter className="hover:scale-110 transition"/>

</a>

<a href="#">
<FaYoutube className="hover:scale-110 transition"/>

</a>

<a href="#">
<FaLinkedinIn className="hover:scale-110 transition"/>

</a>
</div>
</div>
</div>
</div>

<div className="border-t  border-gray-600">
  <div className="max-w-7xl mx-auto px-6 py-6 lg:px-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm  gap-3">
<div className="flex gap-2 md:gap-4 ">
    <span>Web Accessibility</span>
            <span>|</span>
            <span>Terms of Use</span>
            <span>|</span>
            <span>Privacy Statement</span>
            <span>|</span>
            <span>Contact Us</span>
</div>
    <p>© 2024 fragranzia Company. All rights reserved.</p>

</div>
</div>


</footer>

    )
} 
export default Footer;



