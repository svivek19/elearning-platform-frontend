import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaEnvelope,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className="bg-slate-50 min-h-screen max-md:w-fit w-52 max-sm:p-2 p-4">
      <h2 className="text-xl font-bold mb-6 tracking-widest text-teal-700 max-sm:text-lg">
        VCode
      </h2>
      <ul className="space-y-4">
        <Link
          to="/"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/")}
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
          to="/profile"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/profile"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/profile")}
        >
          <FaUser className="mr-2" />
          <span className="hidden sm:inline">Profile</span>
        </Link>
        <Link
          to="/settings"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/settings"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/settings")}
        >
          <FaCog className="mr-2" />
          <span className="hidden sm:inline">Settings</span>
        </Link>
        <Link
          to="/support"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/support"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/support")}
        >
          <FaEnvelope className="mr-2" />
          <span className="hidden sm:inline">Support</span>
        </Link>
        <Link
          to="/faq"
          className={`flex items-center p-4 text-teal-900 rounded-l-xl ${
            activeItem === "/faq"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("/faq")}
        >
          <FaQuestionCircle className="mr-2" />
          <span className="hidden sm:inline">FAQs</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
