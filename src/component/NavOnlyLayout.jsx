import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const NavOnlyLayout = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <Nav
        searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
      />
      <main className="pt-20">
      <Outlet />
      </main>
    </>
  );
};

export default NavOnlyLayout;