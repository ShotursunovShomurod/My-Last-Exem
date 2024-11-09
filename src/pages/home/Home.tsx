import { FC, useState, useEffect } from 'react';
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
    return localStorage.getItem('viewMode') as 'list' | 'grid' || 'grid';
  });
  const limit = 8;

  const { data, isLoading } = useGetProductsQuery({ page, limit });

  const handleViewModeChange = (mode: 'list' | 'grid') => {
    setViewMode(mode);
    localStorage.setItem('viewMode', mode);
  };

  return (
    <div className="bg-[#F6F6F6] pb-20">
      <div className="mx-auto container pl-[75px] pt-[68px]">
        <div className="flex justify-between items-center mb-[54px]">
          <p className="text-[#161A1D] font-medium text-[30px]">Мои объявления</p>
          <div className="flex items-center gap-[5px]">
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
            {data?.products?.map((product: any) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}

        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;



// import { FC, useState } from 'react';
// import { useGetProductsQuery } from '../../redux/api/product-api';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import Pagination from '../../components/Pagination/Pagination';
// import listIcon from '../../assets/Frame.png';
// import gridIconActive from '../../assets/Frame (1).png';
// import listIconActive from '../../assets/Frame (2).png';
// import gridIcon from '../../assets/Frame (3).png';

// const Home: FC = () => {
//   const [page, setPage] = useState(1);
//   const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
//   const limit = 8;

//   const { data, isLoading } = useGetProductsQuery({ page, limit });

//   return (
//     <div className="bg-[#F6F6F6] pb-20">
//       <div className="mx-auto container pl-[75px] pt-[68px]">
//         <div className="flex justify-between items-center mb-[54px]">
//           <p className="text-[#161A1D] font-medium text-[30px]">Мои объявления</p>
//           <div className="flex items-center gap-[5px]">
//             <button onClick={() => setViewMode('list')}>
//               <img src={viewMode === 'list' ? listIconActive : listIcon} alt="List view" />
//             </button>
//             <button onClick={() => setViewMode('grid')}>
//               <img src={viewMode === 'grid' ? gridIconActive : gridIcon} alt="Grid view" />
//             </button>
//           </div>
//         </div>

//         {isLoading ? (
//           <h2>Loading...</h2>
//         ) : (
//           <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-y-[52px]' : 'flex flex-col gap-y-4'}>
//             {data?.products?.map((product: any) => (
//               <ProductCard key={product.id} product={product} viewMode={viewMode} />
//             ))}
//           </div>
//         )}

//         <Pagination page={page} setPage={setPage} />
//       </div>
//     </div>
//   );
// };

// export default Home;




// import { FC, useState } from 'react';
// import { useGetProductsQuery } from "../../redux/api/product-api";
// import ProductCard from "../../components/ProductCard/ProductCard";
// import listIcon from "../../assets/Frame.png";
// import gridIconActive from "../../assets/Frame (1).png";
// import listIconActive from "../../assets/Frame (2).png";
// import gridIcon from "../../assets/Frame (3).png";
// import Pagination from '../../components/Pagination/Pagination';

// const Home: FC = () => {
//   const [page, setPage] = useState<number>(1);
//   const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
//   const limit = 8;
  
//   const { data, isLoading } = useGetProductsQuery({ page, limit });

//   return (
//     <div className="bg-[#F6F6F6] pb-20">
//       <div className="mx-auto container pl-[75px] pt-[68px]">
//         <div className='flex justify-between items-center mb-[54px]'>
//           <p className='text-[#161A1D] font-medium text-[30px]'>Мои объявления</p>
//           <div className='flex items-center gap-[5px]'>
//             <button onClick={() => setViewMode('list')}>
//               <img src={viewMode === 'list' ? listIconActive : listIcon} alt="List view" />
//             </button>
//             <button onClick={() => setViewMode('grid')}>
//               <img src={viewMode === 'grid' ? gridIconActive : gridIcon} alt="Grid view" />
//             </button>
//           </div>
//         </div>
//         {isLoading ? <h2>Loading...</h2> : (
//           <div className={`${viewMode === 'grid' ? 'grid grid-cols-3 gap-y-[52px]' : 'flex flex-col gap-y-4'}`}>
//             {data?.products?.map((product:any) => (
//               <ProductCard key={product.id} product={product} viewMode={viewMode} />
//             ))}
//           </div>
//         )}
//         <Pagination page={page} setPage={setPage} />
//       </div>
//     </div>
//   );
//   console.log(setPage);
  
// };

// export default Home;



// // import { useState } from 'react';
// // import { FaRegHeart } from "react-icons/fa";
// // import { useGetProductsQuery } from "../../redux/api/product-api";
// // import { Product } from "../../types";
// // import listIcon from "../../assets/Frame.png";
// // import gridIconActive from "../../assets/Frame (1).png";
// // import listIconActive from "../../assets/Frame (2).png";
// // import gridIcon from "../../assets/Frame (3).png";
// // import roomIcon from "../../assets/Room.png";

// // const Home: React.FC = () => {
// //   const [page, setPage] = useState<number>(1);
// //   const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
// //   const limit: number = 8;

// //   const { data, isLoading } = useGetProductsQuery({ page, limit });

// //   const productItems = data?.products?.map((product: Product) => (
// //     <div
// //       key={product.id}
// //       className={`relative rounded-xl bg-white ${viewMode === 'grid' ? 'w-[390px]' : 'w-full'} pb-[10px] flex ${
// //         viewMode === 'list' ? 'flex-row items-center p-4' : 'flex-col'
// //       } border-b-[10px] border-[#FCA311]`}
// //     >
// //       <img
// //         className={`object-cover ${viewMode === 'grid' ? 'w-full h-[231px]' : 'w-[120px] h-[120px]'} bg-white rounded-tl-xl rounded-tr-xl`}
// //         src={product.images[0] || 'default_image_url'} 
// //         alt="Product"
// //       />
// //       <div className={`p-5 ${viewMode === 'list' ? 'flex-1 pl-6' : ''}`}>
// //         <h3 className={`text-[22px] font-semibold ${viewMode === 'list' ? 'mb-2' : 'mb-[20px]'} truncate`}>
// //           {product.title || "Hi-Tech Penthouse"}
// //         </h3>
// //         <div className="flex justify-between text-[#666]">
// //           <div className="flex items-center space-x-2">
// //             <p><img src={roomIcon} alt="rooms" className="inline w-5 h-5" /> 28</p>
// //             <p>5 - Bedrooms</p>
// //             <p>3 - Bathrooms</p>
// //             <p>100 m²</p>
// //           </div>
// //           <div className="flex flex-col justify-between items-end gap-y-8 h-full">
// //             <button className="active:scale-125">
// //               <FaRegHeart className="text-2xl text-gray-500" />
// //             </button>
// //             <p className="text-2xl font-light text-[#6A9B0C]">$ {product.price || "750,000"}</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center justify-between mt-[15px]">
// //           <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// //           <p className="text-[#999] text-xs">22:38 25-Окт</p>
// //         </div>
// //       </div>
// //     </div>
// //   ));

// //   return (
// //     <div className="bg-[#F6F6F6] pb-20">
// //       <div className="mx-auto container pl-[75px] pt-[68px]">
// //         <div className='flex justify-between items-center mb-[54px]'>
// //           <p className='text-[#161A1D] font-medium text-[30px]'>Мои объявления</p>
// //           <div className='flex items-center gap-[5px]'>
// //             <button onClick={() => setViewMode('list')}>
// //               <img src={viewMode === 'list' ? listIconActive : listIcon} alt="List view" />
// //             </button>
// //             <button onClick={() => setViewMode('grid')}>
// //               <img src={viewMode === 'grid' ? gridIconActive : gridIcon} alt="Grid view" />
// //             </button>
// //           </div>
// //         </div>
// //         {isLoading && <h2>Loading...</h2>}
        
// //         <div className={`${viewMode === 'grid' ? 'grid grid-cols-3 gap-y-[52px]' : 'flex flex-col gap-y-4'}`}>
// //           {productItems}
// //         </div>

// //         <div className="flex items-center justify-center mt-10">
// //           <button
// //             className="px-3 py-1 bg-[#FCA311] text-white rounded-l-lg"
// //             onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             {"<"}
// //           </button>
// //           <button className="px-3 py-1">
// //             {page}
// //           </button>
// //           <button
// //             className="px-3 py-1 bg-[#FCA311] text-white rounded-r-lg"
// //             onClick={() => setPage((prev) => prev + 1)}
// //           >
// //             {">"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;



// // // import { useState } from 'react';
// // // import { FaRegHeart } from "react-icons/fa";
// // // import { useGetProductsQuery } from "../../redux/api/product-api";
// // // import { Product } from "../../types";
// // // import two from "../../assets/Frame.png";
// // // import tree from "../../assets/Frame (1).png";
// // // import four from "../../assets/Frame (2).png";
// // // import five from "../../assets/Frame (3).png";
// // // import room from "../../assets/Room.png";

// // // const Home: React.FC = () => {
// // //   const [page, setPage] = useState<number>(1);
// // //   const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid'); // viewMode qo'shildi
// // //   const limit: number = 8;

// // //   const { data, isLoading } = useGetProductsQuery({ page, limit });

// // //   const productItems = data?.products?.map((product: Product) => (
// // //     <div
// // //       key={product.id}
// // //       className={`rounded-xl bg-white ${viewMode === 'grid' ? 'w-[390px]' : 'w-full'} pb-[10px] flex ${
// // //         viewMode === 'list' ? 'flex-row items-center p-4' : 'flex-col'
// // //       }`} // Card turi grid va list uchun moslashdi
// // //     >
// // //       <img
// // //         className={`object-contain ${viewMode === 'grid' ? 'w-full h-[231px]' : 'w-[120px] h-[120px]'} bg-white rounded-tl-xl rounded-tr-xl`}
// // //         src={product.images[0]}
// // //         alt="Product"
// // //       />
// // //       <div className={`p-5 ${viewMode === 'list' ? 'flex-1 pl-6' : ''}`}>
// // //         <h3 className={`text-[22px] ${viewMode === 'list' ? 'mb-2' : 'mb-[41px]'} truncate`}>
// // //           {product.title}
// // //         </h3>
// // //         <div className="flex justify-between">
// // //           <div className="flex pl-[9px] pt-[30px] items-start text-[#999] h-full">
// // //             <p>  <img src={room} alt="" /> 10</p>
// // //             <p>5 - спален</p>
// // //             <p>3 - сан. узла</p>
// // //             <p>60 м2</p>
// // //           </div>
// // //           <div className="flex flex-col justify-between items-end gap-y-8 h-full">
// // //             <button className="active:scale-125">
// // //               <FaRegHeart className="text-2xl" />
// // //             </button>
// // //             <p className="text-2xl font-light text-[#6A9B0C]">$ {product.price}</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center justify-between mt-[15px]">
// // //           <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// // //           <p className="text-[#999] text-xs">22:38 25-Окт</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   ));

// // //   return (
// // //     <div className="bg-[#F6F6F6] pb-20">
// // //       <div className="mx-auto container pl-[75px] pt-[68px]">
// // //         <div className='flex justify-between items-center'>
// // //           <p className='mb-[54px] text-[#161A1D] font-medium text-[30px]'>Мои объявления</p>
// // //           <div className='flex items-center gap-[5px]'>
// // //             <button onClick={() => setViewMode('list')}>
// // //               <img src={viewMode === 'list' ? four : two} alt="List view" />
// // //             </button>
// // //             <button onClick={() => setViewMode('grid')}>
// // //               <img src={viewMode === 'grid' ? five : tree} alt="Grid view" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         {isLoading && <h2>Loading...</h2>}
        
// // //         <div className={`${viewMode === 'grid' ? 'grid grid-cols-3 gap-y-[52px]' : 'flex flex-col gap-y-4'}`}>
// // //           {productItems}
// // //         </div>

// // //         <div className="flex items-center justify-center mt-10">
// // //           <button
// // //             className="px-3 py-1 bg-[#FCA311] text-white rounded-l-lg"
// // //             disabled={page === 1}
// // //           >
// // //             {"<"}
// // //           </button>
// // //           <button className="px-3 py-1">
// // //             {/* Sahifa raqami yoki boshqa kontent qo'shishingiz mumkin */}
// // //           </button>
// // //           <button className="px-3 py-1 bg-[#FCA311] text-white rounded-r-lg">
// // //             {">"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;



// // // // import { useState } from 'react';
// // // // import { FaRegHeart } from "react-icons/fa";
// // // // import { useGetProductsQuery } from "../../redux/api/product-api";
// // // // import { Product } from "../../types";
// // // // import two from "../../assets/Frame.png";
// // // // import tree from "../../assets/Frame (1).png";
// // // // import four from "../../assets/Frame (2).png";
// // // // import five from "../../assets/Frame (3).png";

// // // // const Home: React.FC = () => {
// // // //   const [page, setPage] = useState<number>(1);
// // // //   const [isFirstButtonActive, setIsFirstButtonActive] = useState<boolean>(true); // Yangi holat qo'shildi
// // // //   const limit: number = 8;

// // // //   const { data, isLoading } = useGetProductsQuery({ page, limit });

// // // //   const productItems = data?.products?.map((product: Product) => (
// // // //     <div key={product.id} className="w-[390px] rounded-xl bg-[#FCA311] pb-[10px]">
// // // //       <img
// // // //         className="w-full bg-white h-[231px] object-contain rounded-tl-xl rounded-tr-xl"
// // // //         src={product.images[0]}
// // // //         alt="Product"
// // // //       />
// // // //       <div className="w-[390px] px-5 pt-5 pb-4 bg-white">
// // // //         <h3 className="text-[22px] mb-[41px] truncate">{product.title}</h3>
// // // //         <div className="flex justify-between">
// // // //           <div className="flex flex-col pl-[9px] items-start text-[#999] h-full">
// // // //             <p>10 - комнат</p>
// // // //             <p>5 - спален</p>
// // // //             <p>3 - сан. узла</p>
// // // //             <p>60 м2</p>
// // // //           </div>
// // // //           <div className="flex flex-col justify-between items-end gap-y-8 h-full">
// // // //             <button className="active:scale-125">
// // // //               <FaRegHeart className="text-2xl" />
// // // //             </button>
// // // //             <p className="text-2xl font-light text-[#6A9B0C]">$ {product.price}</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="flex items-center justify-between mt-[15px]">
// // // //           <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// // // //           <p className="text-[#999] text-xs">22:38 25-Окт</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   ));

// // // //   return (
// // // //     <div className="bg-[#F6F6F6] pb-20">
// // // //       <div className="mx-auto container pl-[75px] pt-[68px]">
// // // //         <div className='flex justify-between items-center'>
// // // //           <p className='mb-[54px] text-[#161A1D] font-medium text-[30px]'>Мои объявления</p>
// // // //           <div className='flex items-center gap-[5px]'>
// // // //             <button onClick={() => setIsFirstButtonActive(true)}>
// // // //               <img src={isFirstButtonActive ? four : two} alt="" />
// // // //             </button>
// // // //             <button onClick={() => setIsFirstButtonActive(false)}>
// // // //               <img className='text-[#999999]' src={isFirstButtonActive ? five : tree} alt="" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //         {isLoading && <h2>Loading...</h2>}
// // // //         <div className="grid grid-cols-3 gap-y-[52px]">
// // // //           {productItems}
// // // //         </div>

// // // //         <div className="flex items-center justify-center mt-10">
// // // //           <button
// // // //             className="px-3 py-1 bg-[#FCA311] text-white rounded-l-lg"
// // // //             disabled={page === 1}
// // // //           >
// // // //             {"<"}
// // // //           </button>
// // // //           <button className="px-3 py-1">
// // // //             {/* Sahifa raqami yoki boshqa kontent qo'shishingiz mumkin */}
// // // //           </button>
// // // //           <button className="px-3 py-1 bg-[#FCA311] text-white rounded-r-lg">
// // // //             {">"}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;



// // // // // import { useState } from 'react';
// // // // // import { FaRegHeart } from "react-icons/fa";
// // // // // import { useGetProductsQuery } from "../../redux/api/product-api";
// // // // // import { Product } from "../../types";
// // // // // import two from "../../assets/Frame.png"
// // // // // import tree from "../../assets/Frame (1).png"
// // // // // import four from "../../assets/Frame (2).png"
// // // // // import five from "../../assets/Frame (3).png"

// // // // // const Home: React.FC = () => {

  
// // // // //   const [page, setPage] = useState<number>(1);
// // // // //   const limit: number = 8; 


// // // // //   const { data, isLoading } = useGetProductsQuery({ page, limit });
// // // // //   // const totalPages = data ? Math.ceil(data.total / limit) : 0;

// // // // //   // const handlePageChange = (newPage: number) => {
// // // // //   //   if (newPage > 0 && newPage <= totalPages) {
// // // // //   //     setPage(newPage);
// // // // //   //   }
// // // // //   // };

// // // // //   const productItems = data?.products?.map((product: Product) => (
// // // // //     <div key={product.id} className="w-[390px] rounded-xl bg-[#FCA311] pb-[10px]">
// // // // //       <img
// // // // //         className="w-full bg-white h-[231px] object-contain rounded-tl-xl rounded-tr-xl"
// // // // //         src={product.images[0]}
// // // // //         alt="Product"
// // // // //       />
// // // // //       <div className="w-[390px] px-5 pt-5 pb-4 bg-white">
// // // // //         <h3 className="text-[22px] mb-[41px] truncate">{product.title}</h3>
// // // // //         <div className="flex justify-between">
// // // // //           <div className="flex flex-col pl-[9px] items-start text-[#999] h-full">
// // // // //             <p>10 - комнат</p>
// // // // //             <p>5 - спален</p>
// // // // //             <p>3 - сан. узла</p>
// // // // //             <p>60 м2</p>
// // // // //           </div>
// // // // //           <div className="flex flex-col justify-between items-end gap-y-8 h-full">
// // // // //             <button className="active:scale-125">
// // // // //               <FaRegHeart className="text-2xl" />
// // // // //             </button>
// // // // //             <p className="text-2xl font-light text-[#6A9B0C]">$ {product.price}</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="flex items-center justify-between mt-[15px]">
// // // // //           <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// // // // //           <p className="text-[#999] text-xs">22:38 25-Окт</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   ));

// // // // //   return (
// // // // //     <div className="bg-[#F6F6F6] pb-20">
// // // // //       <div className="mx-auto container pl-[75px] pt-[68px]">
// // // // //         <div className='flex justify-between items-center'>
// // // // //         <p className='mb-[54px] text-[#161A1D] font-medium text-[30px]'>Мои объявления</p>
// // // // //         <div className='flex items-center gap-[5px]'>
// // // // //           <button>
// // // // //             <img src={two} alt="" />
// // // // //           </button>
// // // // //           <button>
// // // // //             <img className='text-[#999999]' src={tree} alt="" />
// // // // //           </button>
// // // // //         </div>
// // // // //         </div>
// // // // //         {isLoading && <h2>Loading...</h2>}
// // // // //         <div className="grid grid-cols-3 gap-y-[52px]">
// // // // //           {productItems}
// // // // //         </div>


// // // // //         <div className="flex items-center justify-center mt-10">
// // // // //           <button
// // // // //             className="px-3 py-1 bg-[#FCA311] text-white rounded-l-lg"
// // // // //             disabled={page === 1}
// // // // //           >
// // // // //             {"<"}
// // // // //           </button>
// // // // //           {
// // // // //             <button 
// // // // //               className={`px-3 py-1`}
// // // // //             >
// // // // //             </button>}
// // // // //           <button
// // // // //             className="px-3 py-1 bg-[#FCA311] text-white rounded-r-lg"
// // // // //           >
// // // // //             {">"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;



// // // // // // import { FaRegHeart } from "react-icons/fa";
// // // // // // import { useGetProductsQuery } from "../../redux/api/product-api"
// // // // // // import { Product } from "../../types"

// // // // // // const Home = () => {
// // // // // //   const {data, isLoading} = useGetProductsQuery({})
// // // // // //   console.log(data);
  
// // // // // //   const productItems: JSX.Element[] = data?.products?.map((product:Product): JSX.Element => (
// // // // // //     <div key={product.id} className='w-[390px] rounded-xl bg-[#FCA311] pb-[10px]'>
// // // // // //     <img className='w-full bg-white h-[231px] object-contain rounded-tl-xl rounded-tr-xl' src={product.images[0]} alt="img" />
// // // // // //   <div className='w-[390px] px-5 pt-5 pb-4 bg-white'>
// // // // // //     <h3 className='text-[22px] mb-[41px] text-nowrap'>{product.title}</h3>
// // // // // //     <div className='flex justify-between'>
// // // // // //       <div className='flex flex-col pl-[9px] items-start text-[#999] h-full'>
// // // // // //         <p>10 - комнат</p>
// // // // // //         <p>5 - спален</p>
// // // // // //         <p>3 - сан. узла</p>
// // // // // //         <p>60 м2</p>
// // // // // //       </div>
// // // // // //       <div className='flex flex-col justify-between items-end gap-y-8 h-full'>
// // // // // //         <button className='active:scale-125'>
// // // // // //           <FaRegHeart className='text-2xl'/>
// // // // // //         </button>
// // // // // //         <p className='text-2xl font-light text-[#6A9B0C]'>$ {product.price}</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //     <div className='flex items-center justify-between mt-[15px]'>
// // // // // //       <p className='text-xs'>г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
// // // // // //       <p className='text-[#999] text-xs'>22:38 25-Окт</p>
// // // // // //     </div>
// // // // // //   </div>
// // // // // //   </div>

// // // // // //   ) )
// // // // // //   return (
// // // // // //        <div className="bg-[#F6F6F6] pb-20">
// // // // // //      <div className="mx-auto container pl-[75px] pt-[54px]">
// // // // // //       {isLoading && <h2>Loading...</h2>}
// // // // // //       <div className="grid grid-cols-3 gap-y-[52px]">

// // // // // //       {productItems}
// // // // // //       </div>
        
// // // // // //     </div>
// // // // // //      </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Home