import { useLocation } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
 import SecendHeader from "../../components/secendHeader/SecendHeader";

const Layout = () => {
  const location = useLocation();

  return (
    <main>
      {location.pathname !== "/PostAnAd" && <Filter />}
      {location.pathname !== "/PostAnAd" ? (
        <div className="pl-[400px]">
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <>
          <SecendHeader />
          <Outlet />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Layout;
