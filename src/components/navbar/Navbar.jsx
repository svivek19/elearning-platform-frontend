import React from "react";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className={`bg-white shadow-md w-full p-4 ${
        location.pathname === "/" ? "hidden" : "block"
      }`}
    >
      <div className="flex justify-end items-center">
        <div className="flex space-x-8">
          <div>
            <FaRegBell size={20} />
          </div>
          <div>
            <FaRegUserCircle size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
