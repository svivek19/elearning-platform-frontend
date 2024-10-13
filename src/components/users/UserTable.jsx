import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import AxiosInstance from "../../utils/AxiosInstance";
import toast, { Toaster } from "react-hot-toast";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await AxiosInstance.get("/user/get");
        setUsers(response.data.response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await AxiosInstance.delete(`/user/delete/${userID}`);
      toast.success(response.data.message, {
        icon: <MdOutlineDeleteForever />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error("Error deleting user:", error.response);
    }
  };

  return (
    <div className="overflow-x-auto mt-6">
      <Toaster />
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-teal-500">
            <th className="py-2 px-2 bg-teal-500 text-left text-sm font-semibold text-teal-50">
              S No
            </th>
            <th className="py-2 px-4 bg-teal-500 text-left text-sm font-semibold text-teal-50">
              User ID
            </th>
            <th className="py-2 px-4 bg-teal-500 text-left text-sm font-semibold text-teal-50">
              Full Name
            </th>
            <th className="py-2 px-4 bg-teal-500 text-left text-sm font-semibold text-teal-50">
              Email
            </th>
            <th className="py-2 px-4 bg-teal-500 text-left text-sm font-semibold text-teal-50">
              Phone
            </th>
            <th className="py-2 px-4 bg-teal-500 text-left text-sm font-semibold text-teal-50">
              Gender
            </th>
            <th className="py-2 px-4 bg-teal-500 text-center text-sm font-semibold text-teal-50">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.userID}
              className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
            >
              <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
              <td className="py-2 px-4 text-sm text-gray-800">{user.userID}</td>
              <td className="py-2 px-4 text-sm text-gray-800 capitalize">
                {user.fullName}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800">{user.email}</td>
              <td className="py-2 px-4 text-sm text-gray-800">{user.phone}</td>
              <td className="py-2 px-4 text-sm text-gray-800 capitalize">
                {user.gender}
              </td>
              <td className="py-2 text-center px-4 text-sm text-gray-800">
                <button
                  className="text-red-500 hover:text-red-700 transition-colors"
                  onClick={() => handleDelete(user.userID)}
                >
                  <MdDeleteForever size={25} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
