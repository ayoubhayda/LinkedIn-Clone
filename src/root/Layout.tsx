import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const Layout = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full h-[50px]" />
      <section className="w-full h-full overflow-y-scroll">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
