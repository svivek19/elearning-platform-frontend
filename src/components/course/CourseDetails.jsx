import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance";

const CourseDetails = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
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

  const toggleCourse = (courseID) => {
    setExpandedCourse(expandedCourse === courseID ? null : courseID);
  };

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={course.courseID}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          <div
            className="bg-teal-50 border border-teal-500 text-teal-700 px-6 py-4 cursor-pointer flex justify-between items-center"
            onClick={() => toggleCourse(course.courseID)}
          >
            <h3 className="text-lg font-medium">{course.courseName}</h3>
            <span>{expandedCourse === course.courseID ? "▲" : "▼"}</span>
          </div>
          {expandedCourse === course.courseID && (
            <div className="px-6 py-4 bg-white">
              <p>
                <strong>Type:</strong> {course.type}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Description:</strong> {course.description}
              </p>

              <Link
                to={`/courses/${course.courseID}`}
                className="bg-teal-100 border border-teal-500 text-teal-700 rounded-lg w-fit my-2 px-2"
              >
                Explore
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
