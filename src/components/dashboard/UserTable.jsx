import React, { useState, useEffect } from "react";

const UserTable = ({ data }) => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // State for search
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on search term
    setFilteredData(
      data.filter((user) =>
        Object.values(user).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [data, searchTerm]);

  // Calculate the index range of data to display on the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = filteredData.slice(firstIndex, lastIndex);

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full mx-auto p-2 mt-4">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-fit px-2 text-base mb-4 border border-gray-300 rounded"
        />
        {filteredData.length > 0 ? (
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
                  <th className="px-4 py-2 text-center text-sm font-medium text-white w-32">
                    Gender
                  </th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-white">
                    Enrolled Course
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {firstIndex + index + 1}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {user.userID}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 capitalize">
                      {user.fullName}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {user.email}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {user.phone}
                    </td>
                    <td
                      className={`text-center text-sm capitalize ${
                        user.gender === "male"
                          ? "text-blue-700"
                          : "text-pink-700"
                      }`}
                    >
                      {user.gender}
                    </td>
                    <td
                      className={`px-4 py-2 text-sm whitespace-normal break-words ${
                        user.enrolledCourse !== "Not Enrolled"
                          ? "text-gray-700"
                          : "text-red-500 font-semibold"
                      }`}
                    >
                      {user.enrolledCourse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="mt-4 flex justify-between items-center flex-wrap">
              <div>
                <span className="text-sm text-gray-700">
                  Showing {firstIndex + 1} to{" "}
                  {Math.min(lastIndex, filteredData.length)} of{" "}
                  {filteredData.length} entries
                </span>
              </div>
              <div>
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
                    Math.ceil(filteredData.length / itemsPerPage)
                  }
                  className="px-3 py-1 text-sm mx-1 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center max-sm:h-[20ch] h-[40vh] text-red-500 font-semibold">
            <h1>No user found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
