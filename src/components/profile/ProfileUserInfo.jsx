import React from "react";
import accountvivek from "../../assets/account-vivek.svg";

const ProfileUserInfo = () => {
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
            placeholder="+91 9876543210"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button className="bg-blue-500 rounded-lg py-1 px-2 text-white text-base hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfileUserInfo;
