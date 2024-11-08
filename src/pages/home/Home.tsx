import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { useGetProductsQuery } from "../../redux/api/product-api";
import { Product } from "../../types";

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const limit: number = 8;


  const { data, isLoading } = useGetProductsQuery({ page, limit });
  const totalPages = data ? Math.ceil(data.total / limit) : 0;


  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };


  const productItems = data?.products?.map((product: Product) => (
    <div key={product.id} className="w-[390px] rounded-xl bg-[#FCA311] pb-[10px]">
      <img
        className="w-full bg-white h-[231px] object-contain rounded-tl-xl rounded-tr-xl"
        src={product.images[0]}
        alt="Product"
      />
      <div className="w-[390px] px-5 pt-5 pb-4 bg-white">
        <h3 className="text-[22px] mb-[41px] truncate">{product.title}</h3>
        <div className="flex justify-between">
          <div className="flex flex-col pl-[9px] items-start text-[#999] h-full">
            <p>10 - комнат</p>
            <p>5 - спален</p>
            <p>3 - сан. узла</p>
            <p>60 м2</p>
          </div>
          <div className="flex flex-col justify-between items-end gap-y-8 h-full">
            <button className="active:scale-125">
              <FaRegHeart className="text-2xl" />
            </button>
            <p className="text-2xl font-light text-[#6A9B0C]">$ {product.price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[15px]">
          <p className="text-xs">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
          <p className="text-[#999] text-xs">22:38 25-Окт</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-[#F6F6F6] pb-20">
      <div className="mx-auto container pl-[75px] pt-[54px]">
        {isLoading && <h2>Loading...</h2>}
        <div className="grid grid-cols-3 gap-y-[52px]">
          {productItems}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-3 py-1 bg-[#FCA311] text-white rounded-l-lg"
            disabled={page === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 ${
                page === index + 1 ? "bg-[#FCA311] text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-3 py-1 bg-[#FCA311] text-white rounded-r-lg"
            disabled={page === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;



// import { FaRegHeart } from "react-icons/fa";
// import { useGetProductsQuery } from "../../redux/api/product-api"
// import { Product } from "../../types"

// const Home = () => {
//   const {data, isLoading} = useGetProductsQuery({})
//   console.log(data);
  
//   const productItems: JSX.Element[] = data?.products?.map((product:Product): JSX.Element => (
//     <div key={product.id} className='w-[390px] rounded-xl bg-[#FCA311] pb-[10px]'>
//     <img className='w-full bg-white h-[231px] object-contain rounded-tl-xl rounded-tr-xl' src={product.images[0]} alt="img" />
//   <div className='w-[390px] px-5 pt-5 pb-4 bg-white'>
//     <h3 className='text-[22px] mb-[41px] text-nowrap'>{product.title}</h3>
//     <div className='flex justify-between'>
//       <div className='flex flex-col pl-[9px] items-start text-[#999] h-full'>
//         <p>10 - комнат</p>
//         <p>5 - спален</p>
//         <p>3 - сан. узла</p>
//         <p>60 м2</p>
//       </div>
//       <div className='flex flex-col justify-between items-end gap-y-8 h-full'>
//         <button className='active:scale-125'>
//           <FaRegHeart className='text-2xl'/>
//         </button>
//         <p className='text-2xl font-light text-[#6A9B0C]'>$ {product.price}</p>
//       </div>
//     </div>
//     <div className='flex items-center justify-between mt-[15px]'>
//       <p className='text-xs'>г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
//       <p className='text-[#999] text-xs'>22:38 25-Окт</p>
//     </div>
//   </div>
//   </div>

//   ) )
//   return (
//        <div className="bg-[#F6F6F6] pb-20">
//      <div className="mx-auto container pl-[75px] pt-[54px]">
//       {isLoading && <h2>Loading...</h2>}
//       <div className="grid grid-cols-3 gap-y-[52px]">

//       {productItems}
//       </div>
        
//     </div>
//      </div>
//   )
// }

// export default Home