import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Import arrow icons

const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: any) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination mt-6 flex justify-center items-center space-x-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`flex items-center text-gray-500 px-4 py-2 rounded-md ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:text-blue-500"
        }`}
        disabled={currentPage === 1}
      >
        <LeftOutlined />
        <span className="ml-2">Previous</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`flex items-center text-gray-500 px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:text-blue-500"
        }`}
        disabled={currentPage === totalPages}
      >
        <span className="mr-2">Next</span>
        <RightOutlined />
      </button>
    </div>
  );
};

export default PaginationComponent;
