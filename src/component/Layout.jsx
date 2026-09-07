import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <Nav
      searchTerm={searchTerm}
  setSearchTerm={setSearchTerm} />

<main className="pt-20">
      <Outlet />

</main>
      <Footer />
    </>
  );
};

export default Layout;