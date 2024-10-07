import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with data:", loginData);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto justify-center h-full">
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
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            required
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
