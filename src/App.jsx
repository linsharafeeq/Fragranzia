import { useState } from "react";

import "./App.css";
import Signup from "./Signup";
import Signin from "./Signin";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import Products from "./component/Products";
import ProductDetails from "./component/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
// import OrderSuccess from "./component/OrderSuccess";
import NavOnlyLayout from "./component/NavOnlyLayout";
import Profile from "./Profile";
function App() {
  const [cartItems, setCartItems] = useState([]);
const [buyNowItem, setBuyNowItem] = useState(null);
const [orders, setOrders] = useState([]);

const [searchTerm, setSearchTerm] = useState("");

const placeOrder = (items) => {
  const newOrder = {
    id: `FRG${Date.now()}`,
    status: "Order Placed",
    items: items,
  };

  setOrders((prevOrders) => [...prevOrders, newOrder]);

  // setCartItems([]);
};


const addToCart = (item,quantity = 1) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      return prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity, }
          : cartItem
      );
    }

    return [...prevItems, { ...item, quantity: quantity, },

    ];
  });
};
const buyNow = (item, quantity = 1) => {
  setBuyNowItem({
    ...item,
    quantity: quantity,
  });
};

const increaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

const removeFromCart = (id) => {
  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== id)
  );
};
  return (
    <>

      <Routes>

        <Route element={<Layout       searchTerm={searchTerm}
      setSearchTerm={setSearchTerm} />}>

        <Route path="/" element={<Home  addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart}  searchTerm={searchTerm}/>} />
        <Route path="/products/:id" element={<ProductDetails addToCart={addToCart}       buyNow={buyNow} />} />

        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}
        increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
         removeFromCart={removeFromCart}
        />} />
     
 </Route>

 
 <Route element={<NavOnlyLayout       searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}/>}>

    <Route path="/profile" element={<Profile  orders={orders} />} />
   <Route path="/checkout" element={<CheckoutPage cartItems={cartItems}   
       decreaseQuantity={decreaseQuantity}
  increaseQuantity={increaseQuantity}      buyNowItem={buyNowItem}   placeOrder={placeOrder}  />} />
  </Route>



      

 <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={200}
        hideProgressBar
        limit={1}  
       
    closeButton={false}
          theme="dark"
        
      />
    </>
  );
}

export default App;
