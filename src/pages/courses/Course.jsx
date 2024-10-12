import React, { useState } from "react";
import CourseDetails from "../../components/course/CourseDetails";
import CourseModal from "../../components/model/CourseModel";

const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-4">
        <h1 className="max-sm:text-xl text-2xl font-medium text-teal-700 mb-4">
          Course Details
        </h1>
        <button
          className="bg-blue-500 rounded-lg w-fit px-2 hover:bg-blue-600 text-white"
          onClick={handleOpenModal}
        >
          Add Course
        </button>
      </div>

      <div className="px-2">
        <CourseDetails />
      </div>

      {isModalOpen && (
        <CourseModal isOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Course;
