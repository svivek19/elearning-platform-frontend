import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaEnvelope,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-slate-50 min-h-screen max-md:w-fit w-52 max-sm:p-2 p-4">
      <h2 className="text-xl font-bold mb-6 tracking-widest text-teal-700 max-sm:text-lg">
        ProCode
      </h2>
      <ul className="space-y-4">
        <li
          className={`flex items-center p-4 text-teal-900 rounded-l-xl  ${
            activeItem === "Dashboard"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <FaHome className="mr-2" />
          <span className="hidden sm:inline">Dashboard</span>
        </li>
        <li
          className={`flex items-center p-4 text-teal-900 rounded-l-xl  ${
            activeItem === "Courses"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("Courses")}
        >
          <FaBook className="mr-2" />
          <span className="hidden sm:inline">Courses</span>
        </li>
        <li
          className={`flex items-center p-4 text-teal-900 rounded-l-xl  ${
            activeItem === "Profile"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("Profile")}
        >
          <FaUser className="mr-2" />
          <span className="hidden sm:inline">Profile</span>
        </li>
        <li
          className={`flex items-center p-4 text-teal-900 rounded-l-xl  ${
            activeItem === "Settings"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("Settings")}
        >
          <FaCog className="mr-2" />
          <span className="hidden sm:inline">Settings</span>
        </li>
        <li
          className={`flex items-center p-4 text-teal-900 rounded-l-xl  ${
            activeItem === "Support"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("Support")}
        >
          <FaEnvelope className="mr-2" />
          <span className="hidden sm:inline">Support</span>
        </li>
        <li
          className={`flex items-center p-4 text-teal-900 rounded-l-xl  ${
            activeItem === "FAQs"
              ? "bg-teal-100 border-teal-700 border-r-4"
              : "hover:bg-teal-100"
          } max-sm:justify-center`}
          onClick={() => handleItemClick("FAQs")}
        >
          <FaQuestionCircle className="mr-2" />
          <span className="hidden sm:inline">FAQs</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
