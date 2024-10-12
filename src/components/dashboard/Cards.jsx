import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaUserGraduate, FaUserCheck } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import AxiosInstance from "../../utils/AxiosInstance";

const Cards = ({ data }) => {
  const [courseCount, setCourseCount] = useState("");

  const enrolledUserCount = data.filter(
    (user) => user.status === "Enrolled"
  ).length;

  const completedUserCount = data.filter(
    (user) => user.status === "Completed"
  ).length;

  const getCourseCount = async () => {
    try {
      const response = await AxiosInstance.get("/course/get-count");
      setCourseCount(response.data.count || 0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseCount();
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-between flex-wrap gap-4">
        <div className="bg-teal-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Total Courses</h1>
          <MdSchool className="text-teal-600 my-2" size={30} />
          <p className="text-2xl font-semibold">{courseCount}</p>
        </div>
        <div className="bg-violet-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Enrolled Students</h1>
          <FaGraduationCap className="text-violet-600 my-2" size={30} />
          <p className="text-2xl font-semibold">{enrolledUserCount || 0}</p>
        </div>
        <div className="bg-orange-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Graduates</h1>
          <FaUserGraduate className="text-orange-600 my-2" size={30} />
          <p className="text-2xl font-semibold">{completedUserCount || 0}</p>
        </div>
        <div className="bg-gray-50 shadow-sm max-sm:w-full w-52 rounded-lg flex flex-col items-center justify-center p-4">
          <h1 className="font-medium">Active Learners</h1>
          <FaUserCheck className="text-gray-600 my-2" size={30} />
          <p className="text-2xl font-semibold">{data.length || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
