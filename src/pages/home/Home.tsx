import { FC, useState } from 'react';
import { useGetProductsQuery } from '../../redux/api/product-api';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import listIcon from '../../assets/Frame.png';
import gridIconActive from '../../assets/Frame (1).png';
import listIconActive from '../../assets/Frame (2).png';
import gridIcon from '../../assets/Frame (3).png';

const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>(() => {
    return (localStorage.getItem('viewMode') as 'list' | 'grid') || 'grid';
  });

  const limit = 9;
  const { data, isLoading } = useGetProductsQuery({ page, limit });
  const products = data || [];

  const handleViewModeChange = (mode: 'list' | 'grid') => {
    setViewMode(mode);
    localStorage.setItem('viewMode', mode);
  };

  return (
    <div className="bg-[#F6F6F6] pb-20 relative z-10">
      <div className="container mx-auto pl-[75px] pt-[68px]">
        <div className="flex justify-between items-center mb-[54px]">
          <p className="text-[#161A1D] font-medium text-[30px]">Мои объявления</p>
          <div className="flex items-center gap-[5px] pr-[75px]">
            <button onClick={() => handleViewModeChange('list')}>
              <img src={viewMode === 'list' ? listIconActive : listIcon} alt="List view" />
            </button>
            <button onClick={() => handleViewModeChange('grid')}>
              <img src={viewMode === 'grid' ? gridIconActive : gridIcon} alt="Grid view" />
            </button>
          </div>
        </div>

        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-y-[52px]' : 'flex flex-col gap-y-4'}>
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}

        <div className='flex items-center justify-end container mx-auto pr-[75px]'>
          <Pagination 
            page={page} 
            setPage={setPage} 
            totalProducts={products.length} // Number of products fetched
            limit={limit} // Number of products per page
          />
        </div>
      </div>
    </div>
  );
};

export default Home;