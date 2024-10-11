import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TbDoorExit } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData");
  // convert string to object
  const user = JSON.parse(userData);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("userData");
    toast.success("Logout successful!", {
      icon: <TbDoorExit />,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <nav
      className={`bg-white shadow-md w-full p-4 ${
        location.pathname === "/" ? "hidden" : "block"
      }`}
    >
      <Toaster />
      <div className="flex justify-end items-center">
        <div className="flex space-x-4">
          <div>
            <h3>
              Welcome,{" "}
              <span className="capitalize text-teal-700 font-semibold">
                {" "}
                {user?.fullName || "Admin"}{" "}
              </span>{" "}
            </h3>
          </div>

          <button
            className="flex items-center cursor-pointer"
            title="Logout"
            onClick={handleLogout}
          >
            <RiLogoutCircleRLine size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
