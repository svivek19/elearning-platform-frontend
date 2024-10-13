import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/AxiosInstance";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axiosInstance.get("/course/get-all");
        setCourses(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllCourses();
  }, []);

  return (
    <div className="space-y-4">
      {courses.length === 0 ? (
        <div className="flex justify-center items-center max-sm:h-[40vh] h-[60vh] font-semibold text-red-500">
          No courses available
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-50 text-teal-700">
                <th className="border border-teal-500 px-6 py-4 text-left">
                  Course Name
                </th>
                <th className="border border-teal-500 px-6 py-4 text-left">
                  Type
                </th>
                <th className="border border-teal-500 px-6 py-4 text-left">
                  Duration
                </th>
                <th className="border border-teal-500 px-6 py-4 text-left">
                  Description
                </th>
                <th className="border border-teal-500 px-6 py-4 text-left">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.courseID} className="bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 capitalize">
                    {course.courseName}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 capitalize">
                    {course.type}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 capitalize">
                    {course.duration}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 capitalize">
                    {course.description}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="bg-teal-100 border border-teal-500 text-teal-700 rounded-lg w-fit px-2">
                      <a href={course.link} target="_blank" rel="noreferrer">
                        Explore
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
