import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[620px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
