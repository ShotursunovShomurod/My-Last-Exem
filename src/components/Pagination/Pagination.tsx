import React from 'react';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalProducts: number; // New prop for total products on the current page
  limit: number; // New prop for the limit of products per page
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, totalProducts, limit }) => (
  <div className="flex items-center justify-center mt-10">
    <button
      className={`px-3 py-1 rounded-l-lg ${page === 1 ? 'bg-gray-300 text-gray-500' : 'bg-[#FCA311] text-white'}`}
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
    >
      {"<"}
    </button>
    <button className="px-3 py-1">{page}</button>
    <button
      className={`px-3 py-1 rounded-r-lg ${totalProducts < limit ? 'bg-gray-300 text-gray-500' : 'bg-[#FCA311] text-white'}`}
      onClick={() => setPage((prev) => prev + 1)}
      disabled={totalProducts < limit}
    >
      {">"}
    </button>
  </div>
);

export default Pagination;