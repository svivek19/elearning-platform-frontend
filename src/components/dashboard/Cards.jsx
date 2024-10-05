import React from "react";
import { FaBookOpen, FaRegStar, FaRegQuestionCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const Cards = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between flex-wrap gap-4">
        <div className="bg-teal-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Current Course</h1>
          <PiStudentFill className="text-teal-600 my-2" size={30} />
          <p className="text-2xl font-semibold">JavaScript</p>
        </div>
        <div className="bg-violet-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Days Learning</h1>
          <FaBookOpen className="text-violet-600 my-2" size={30} />
          <p className="text-2xl font-semibold">15 Days</p>
        </div>
        <div className="bg-orange-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Projects Done</h1>
          <FaRegStar className="text-orange-600 my-2" size={30} />
          <p className="text-2xl font-semibold">10</p>
        </div>
        <div className="bg-gray-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Cert. Eligibility</h1>
          <FaRegQuestionCircle className="text-gray-600 my-2" size={30} />
          <p className="text-2xl font-semibold">30%</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
