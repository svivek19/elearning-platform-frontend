import React, { useState } from "react";
import accountvivek from "../../assets/account-vivek.svg";
import AxiosInstance from "../../utils/AxiosInstance";

const ProfileUserInfo = () => {
  // State for form fields
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send user data
  const sendUserData = async () => {
    try {
      const response = await AxiosInstance.post("/user/create", userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={accountvivek}
          className="h-48 md:h-full object-cover w-full"
          alt="Profile"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            placeholder="Vivek"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email ID
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="vivek@example.com"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          onClick={sendUserData}
          className="bg-blue-500 rounded-lg py-1 px-2 text-white text-base hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfileUserInfo;
