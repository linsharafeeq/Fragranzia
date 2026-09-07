import data from "../data/products.json";
import ProductCarousel from "./ProductCarousel";

const FeaturedCollection = ({addToCart}) => {

const customOrderIds = [1, 10, 4, 9, 7];

 const reordered = customOrderIds .map((id) => data.allproducts.find((p) => p.id === id))
    .filter(Boolean);




  return (
    <ProductCarousel
      title="Featured"
      highlight="Collections"
      allproducts={reordered}
      addToCart={addToCart}
      showBadge
    />
  );
};

export default FeaturedCollection;