import { useLocation } from 'react-router-dom'
import Filter from '../../components/filter/Filter'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  return (
    <main>
      {location.pathname !== '/PostAnAd' && <Filter />}
      <div className='pl-[400px]'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;