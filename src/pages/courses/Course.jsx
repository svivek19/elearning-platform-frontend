import React from "react";
import CourseDetails from "../../components/course/CourseDetails";

const Course = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="max-sm:text-xl text-2xl font-medium text-teal-700 mb-4">
          Course Details
        </h1>
        <button className="bg-blue-500 rounded-lg w-fit px-2 hover:bg-blue-600 text-white">
          Add Course
        </button>
      </div>

      <div>
        <CourseDetails />
      </div>
    </div>
  );
};

export default Course;
