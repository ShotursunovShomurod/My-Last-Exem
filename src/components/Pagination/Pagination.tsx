import React from 'react';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => (
  <div className="flex items-center justify-center mt-10">
    <button
      className="px-3 py-1 bg-[#FCA311] text-white rounded-l-lg"
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
    >
      {"<"}
    </button>
    <button className="px-3 py-1">{page}</button>
    <button
      className="px-3 py-1 bg-[#FCA311] text-white rounded-r-lg"
      onClick={() => setPage((prev) => prev + 1)}
    >
      {">"}
    </button>
  </div>
);

export default Pagination;
