import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
