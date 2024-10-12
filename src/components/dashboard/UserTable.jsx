import React, { useState } from "react";

const UserTable = ({ data }) => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the index range of data to display on the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData =
    data && data.length ? data.slice(firstIndex, lastIndex) : [];

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return data && data.length > 0 ? (
    <div className="w-full mx-auto p-2 mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-teal-500">
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                S NO
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                User ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                Full Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                Phone
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                Gender
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-white">
                Enrolled Course
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-teal-50 transition-colors"
              >
                <td className="px-4 py-2 text-sm text-gray-700">
                  {firstIndex + index + 1}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {user.userID}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {user.fullName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {user.phone}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {user.gender}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 whitespace-normal break-words">
                  {user.enrolledCourse}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm mx-1 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage ===
            Math.ceil((data && data.length ? data.length : 0) / itemsPerPage)
          }
          className="px-3 py-1 text-sm mx-1 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center max-sm:h-[20ch] h-[40vh] text-red-500 font-semibold">
      <h1>No user found</h1>
    </div>
  );
};

export default UserTable;
