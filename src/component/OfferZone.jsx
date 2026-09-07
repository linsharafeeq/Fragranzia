import data from "../data/products.json"; 
import ProductCarousel from "./ProductCarousel";

const OfferZone = ({addToCart}) => {

const customOrderIds = [9, 10, 7, 4, 1];

 const reordered = customOrderIds .map((id) => data.allproducts.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <ProductCarousel
      title="Offer Zone"
    //   highlight="Zone"
      allproducts={reordered}
       addToCart={addToCart}
    />
  );
};

export default OfferZone;