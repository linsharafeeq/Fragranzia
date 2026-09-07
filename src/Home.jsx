import Cards from "./component/Cards";
import Carousal from "./component/Carousal";
import ExploreCategory from "./component/ExploreCategory";
import Offerbar from "./component/Offerbar";
import Feature from "./component/Feature";
import FeaturedCollection from "./component/FeaturedCollection";
// import Test from "./Test";
import ElegenceBanner from "./component/ElegenceBanner";
import OfferZone from "./component/OfferZone";
import HoverGallery from "./component/HoverGallery";
const Home = ({ addToCart }) => {
  return (
 
  <>
   <Offerbar/>
  <Carousal/>
  <Cards/>
  <Feature/>

<FeaturedCollection addToCart={addToCart}/>
<HoverGallery/>
<ExploreCategory/>
<OfferZone addToCart={addToCart}/>
<ElegenceBanner/>

{/* <Test/> */}

  </>
  );
};

export default Home;