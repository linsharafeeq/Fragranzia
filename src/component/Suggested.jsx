import data from "../data/products.json"; 
import ProductCarousel from "./ProductCarousel";

const Suggested = ({ currentProductId,addToCart }) => {

const customOrderIds = [4, 7, 9, 10, 1,2];


    const reordered = customOrderIds
  .map((id) => data.allproducts.find((p) => p.id === id))
  .filter((item) => item.id !== currentProductId)

  return (
    <ProductCarousel
      title="Suggested for you"
      addToCart={addToCart}
      allproducts={reordered}
    />
  );
};

export default Suggested;