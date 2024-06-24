import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [startPage, setStartPage] = useState(1);
  const pageSize = 5;

  const handlePrev = () => {
    if (currentPage > 1) {
        const prevPage = currentPage - 1;
        if(prevPage < startPage ) {
            handleMorePrev();
            onPageChange(prevPage);
        } else {
            onPageChange(prevPage);
        }
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
        const nextPage = currentPage + 1;
        if(nextPage > (startPage + pageSize - 1 ) ) {
            handleMoreNext();
        } else {
            onPageChange(nextPage);
        }
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handleMoreNext = () => {
    const newStartPage = Math.min(startPage + pageSize, totalPages - pageSize + 1);
    setStartPage(newStartPage);
    onPageChange(newStartPage);
  };

  const handleMorePrev = () => {
    const newStartPage = Math.max(startPage - pageSize, 1);
    setStartPage( newStartPage);
    onPageChange(newStartPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = startPage; i < startPage + pageSize && i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={` px-3 py-1 rounded ${i === currentPage ? 'bg-[#313f56] text-white' : 'bg-gray-300 text-gray-800'} mx-1`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-[#313f56] text-white px-4 py-2 rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      {startPage > 1 && (
        <button
          onClick={handleMorePrev}
          className="bg-[#313f56] text-white px-3 py-1 rounded mx-1"
        >
          &laquo;
        </button>
      )}
      {renderPageNumbers()}
      {startPage + pageSize <= totalPages && (
        <button
          onClick={handleMoreNext}
          className="bg-[#313f56] text-white px-3 py-1 rounded mx-1"
        >
          &raquo;
        </button>
      )}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-[#313f56] text-white px-4 py-2 rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
