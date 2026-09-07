import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { LuBell, LuShoppingCart } from "react-icons/lu";
import data from "../data/products.json";
import {  NavLink , useNavigate } from "react-router-dom";

const Nav = ( { searchTerm, setSearchTerm }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [active, setActive] = useState("Home");
  const navigate = useNavigate();

console.log("searchTerm:", searchTerm);

const searchResults =
  searchTerm.trim() === ""
    ? []
    : data.allproducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <nav className="bg-white  top-0 left-0 fixed w-full shadow-sm  z-50">
      <div className="h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className=" text-xl sm:text-2xl lg:text-3xl font-bold text-[#00354B]">
          Fragranzia
        </h1>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center text-black/80  gap-10 text-md font-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0B3954] font-bold"
                  : "text-black/80 hover:text-[#0B3954]"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0B3954] font-bold"
                  : "text-black/80 hover:text-[#0B3954]"
              }
            >
              Products
            </NavLink>

            <li className="cursor-pointer hover:text-[#0B3954] transition">
              Gifting
            </li>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0B3954] font-bold"
                  : "text-black/80 hover:text-[#0B3954]"
              }
            >
              About
            </NavLink>
          </ul>

<div className="relative">
          <div className="flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] w-60 rounded-full h-11 px-4 ">
            <FiSearch />
            <input
              type="text"
              placeholder="Search Here"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              className="ml-2 text-sm outline-none flex-1 "
            />
          </div>
{searchResults.length > 0 && (
  <div className="absolute top-12 left-0 w-60 bg-white rounded-md shadow-md overflow-hidden z-50">
    {searchResults.map((item) => (
      <button
        key={item.id}
    onClick={() => {
  setSearchTerm("");
  navigate(`/products/${item.id}`);
}}
        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
      >
        {item.name}
      </button>
    ))}
  </div>
)}

</div>
          <div className="flex items-center gap-4">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `w-10 h-10 rounded-full flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] justify-center transition
              ${isActive ? "bg-[#00354B] text-white" :"hover:bg-gray-100" }`
              }
            >
              <LuShoppingCart size={20} />
            </NavLink>

            <button className="w-10 h-10 rounded-full flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] justify-center hover:bg-gray-100 transition">
              <LuBell size={20} />
            </button>

  <NavLink
              to="/profile"
              className={({ isActive }) =>
                `w-10 h-10 rounded-full flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] justify-center transition
              ${isActive ? "bg-[#00354B] text-white" :"hover:bg-gray-100" }`
              }
            >
              <BiUser size={20} />
            </NavLink>



          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {menuOpen && (
          <div className="lg:hidden absolute right-0  top-16 w-60 bg-white ">
<div className="relative mb-4">

  <div className="flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] rounded-full h-10 px-3">
    <FiSearch />

    <input
      type="text"
      placeholder="Search Here"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="ml-2 text-sm outline-none flex-1"
    />
  </div>

  {searchResults.length > 0 && (
    <div className="absolute top-11 left-0 w-full bg-white rounded-md shadow-md overflow-hidden z-50">
      {searchResults.map((item) => (
        <button
          key={item.id}
         onClick={() => {
  setSearchTerm("");
  navigate(`/products/${item.id}`);
  setMenuOpen(false);
}}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          {item.name}
        </button>
      ))}
    </div>
  )}

</div>
            <ul className="flex flex-col text-center text-md  ">
              <li className=" border-b-1 border-black/20">
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block p-3 ${
                      isActive
                        ? "text-[#0B3954] font-bold"
                        : "text-black/80 active:text-[#0B3954]"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className=" border-b-1 border-black/20 ">
                <NavLink
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block p-3 ${
                      isActive
                        ? "text-[#0B3954] font-bold"
                        : "text-black/80 active:text-[#0B3954]"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>

              <li className=" border-b-1 border-black/20 p-3 active:text-[#0B3954]">
                Gifting
              </li>

              <li className=" border-b-1 border-black/20 ">
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block p-3 ${
                      isActive
                        ? "text-[#0B3954] font-bold"
                        : "text-black/80 active:text-[#0B3954]"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center justify-center pt-4 gap-4  ">

<NavLink
              to="/cart"
              className={({ isActive }) =>
                `w-10 h-10 rounded-full flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] justify-center transition
              ${isActive ? "bg-[#00354B] text-white" :"hover:bg-gray-100" }`
              }
            >
              <LuShoppingCart/>
            </NavLink>

           

              <button className="w-10 h-10 rounded-full flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] justify-center active:bg-gray-100 transition">
                <LuBell />
              </button>

               <NavLink
              to="/profile"
              className={({ isActive }) =>
                `w-10 h-10 rounded-full flex items-center shadow-[0_0_2px_rgba(0,0,0,0.25)] justify-center transition
              ${isActive ? "bg-[#00354B] text-white" :"hover:bg-gray-100" }`
              }
            >

              <BiUser/>
            </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
