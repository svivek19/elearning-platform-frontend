import React, { useState } from "react";
import { FaHome, FaBook } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div
      className={`bg-slate-50 min-h-screen max-md:w-fit w-52 max-sm:p-2 p-4 ${
        location.pathname === "/" ? "hidden" : "block"
      }`}
    >
      <h2 className="text-xl font-bold mb-6 tracking-widest text-teal-700 max-sm:text-lg">
        VCode
      </h2>
      <ul className="space-y-4">
        <Link
          to="/dashboard"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/dashboard"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/dashboard")}
        >
          <FaHome className="mr-2" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
        <Link
          to="/courses"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/courses"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/courses")}
        >
          <FaBook className="mr-2" />
          <span className="hidden sm:inline">Courses</span>
        </Link>

        <Link
          to="/manage-accounts"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/manage-accounts"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/manage-accounts")}
        >
          <MdManageAccounts className="mr-2" />
          <span className="hidden sm:inline">Manage Users</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
