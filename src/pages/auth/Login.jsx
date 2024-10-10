import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdOutlineDoneAll } from "react-icons/md";
import AxiosInstance from "../../utils/AxiosInstance";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(loginData);

    if (loginData.email === "" || loginData.phone === "") {
      toast.error("Fill all required fields", {
        icon: <RiErrorWarningFill />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    try {
      const response = await AxiosInstance.post("/user/login", loginData);
      if (response.status === 200) {
        toast.success("Login successful!", {
          icon: <MdOutlineDoneAll />,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.response)
        );
      } else {
        toast.error("Failed to login. Please try again.", {
          icon: <RiErrorWarningFill />,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to login. Please try again.", {
        icon: <RiErrorWarningFill />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto justify-center h-full">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Login Here</h2>
      <form className="w-full" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="phone"
            name="phone"
            value={loginData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full rounded-lg py-2 text-white text-base hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="my-4 bg-teal-950 text-white text-base">
        <Link to={"/dashboard"}>demo</Link>
      </div>
    </div>
  );
};

export default Login;
