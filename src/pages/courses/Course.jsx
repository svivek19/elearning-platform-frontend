import React from "react";
import CourseCard from "../../components/course/CourseCard";

const Course = () => {
  return (
    <div>
      <h1 className="max-sm:text-xl text-2xl font-medium text-teal-700 mb-4">
        Explore & Learn
      </h1>

      <div>
        <CourseCard />
      </div>
    </div>
  );
};

export default Course;
