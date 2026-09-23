import { useState } from "react";
import Offerbar from "./Offerbar";
import data from "../data/products.json";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";
import { VscListFilter } from "react-icons/vsc";
import ProductCard from "./ProductCard";

const Products = ({ addToCart , searchTerm }) => {
  const [sortBy, setSortBy] = useState("Relevance");

const [showFilter, setShowFilter] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("All");


  const categories = [
    "All",
    ...new Set(data.allproducts.map((item) => item.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? data.allproducts
      : data.allproducts.filter((item) => item.category === selectedCategory);

const searchedProducts = filteredProducts.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const sortedProducts = [...searchedProducts];

  if (sortBy === "Price Low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price High") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "Newest") {
    sortedProducts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  } else if (sortBy === "Popularity") {
    sortedProducts.sort((a, b) => b.reviews - a.reviews);
  }

  return (
    <>
      <Offerbar />

      <section className="px-2 py-3  md:py-2 md:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center w-full  px-4 md:px-0">
          <div>
            <h1 className="hidden md:flex text-lg md:text-xl lg:text-2xl font-bold">
              All Products
            </h1>
            <div className=" hidden md:flex items-center  gap-1 text-xs md:text-sm text-gray-500 mt-0 md:mt-1">
              <Link to="/Home" className="hover:text-[#00354B] transition">
                Home
              </Link>

              <MdKeyboardArrowRight />
              <span className="text-gray-700">Products</span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 ">
            <div className=" flex items-center justify-between gap-3 sm:gap-10 md:gap-4 lg:gap-6  text-sm md:text-base ">
              <span className=" font-semibold">Sort By:</span>

              <button
                onClick={() => setSortBy("Relevance")}
                className={
                  sortBy === "Relevance" ? "font-semibold text-[#00354B]" : ""
                }
              >
                Relevance
              </button>

              <button
                onClick={() => setSortBy("Newest")}
                className={
                  sortBy === "Newest" ? "font-semibold text-[#00354B]" : ""
                }
              >
                <span className="md:hidden">New</span>
                <span className="hidden md:inline"> Newest First</span>
              </button>

              <button
                onClick={() => setSortBy("Popularity")}
                className={
                  sortBy === "Popularity" ? "font-semibold text-[#00354B]" : ""
                }
              >
                <span className="md:hidden"> Popular</span>
                <span className="hidden md:inline"> Popularity</span>
              </button>

              <button
                onClick={() => setSortBy("Price Low")}
                className={
                  sortBy === "Price Low" ? "font-semibold text-[#00354B]" : ""
                }
              >
                <span className="md:hidden">Low</span>
                <span className="hidden md:inline"> Price: Low to High</span>
              </button>

              <button
                onClick={() => setSortBy("Price High")}
                className={
                  sortBy === "Price High" ? "font-semibold text-[#00354B]" : ""
                }
              >
                <span className="md:hidden">High</span>
                <span className="hidden md:inline">Price: High to Low</span>
              </button>
            </div>

            <div className="relative">
           
         <button
  onClick={() => setShowFilter(!showFilter)}
  className={`flex items-center gap-1 shadow-[0_0_2px_rgba(0,0,0,0.25)] rounded-full px-2 md:px-4 md:py-1 transition  text-sm md:text-base ${
    showFilter
      && "bg-[#00354B] text-white"
    
  }`}
>
  Filter
  <VscListFilter />
</button>

{showFilter && (
  <div className="absolute top-full right-[0px]  mt-2 w-34 bg-white text-sm md:text-base  rounded-md shadow-[0_0_2px_rgba(0,0,0,0.25)] z-20">

    <button
      onClick={() => {
        setSelectedCategory("All");
        setShowFilter(false);
      }}
      className="block w-full text-left  px-4 py-2 hover:bg-gray-100 border-b border-gray-100 "
    >
      All
    </button>

    <button
      onClick={() => {
        setSelectedCategory("Eau De Parfum");
        setShowFilter(false);
      }}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-b border-gray-100"
    >
      Eau De Parfum
    </button>

    <button
      onClick={() => {
        setSelectedCategory("Body Mist");
        setShowFilter(false);
      }}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-b border-gray-100"
    >
      Body Mist
    </button>

    <button
      onClick={() => {
        setSelectedCategory("Deodorants");
        setShowFilter(false);
      }}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-b border-gray-100"
    >
      Deodorants
    </button>

    <button
      onClick={() => {
        setSelectedCategory("Concentrated");
        setShowFilter(false);
      }}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
    >
      Concentrated
    </button>

  </div>
)}

          </div>


          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:gap-x-24 gap-y-4 mt-2 mb-4">
          {sortedProducts.map((item) => (
            <div
              key={item.id}
              className="max-w-sm w-40 sm:w-50 md:w-70 lg:w-80 mx-auto"
            >
              <ProductCard item={item} 
              addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </section> 
    </>
  );
};
export default Products;
