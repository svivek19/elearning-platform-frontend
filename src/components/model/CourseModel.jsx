import React, { useState } from "react";
import { Modal } from "antd";
import { MdOutlineDoneAll } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import AxiosInstance from "../../utils/AxiosInstance";

const CourseModal = ({ isOpen, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    courseName: "",
    type: "",
    duration: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post("/course/new", formData);
      toast.success("Course added successfully!", {
        icon: <MdOutlineDoneAll />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      handleCloseModal();
      setFormData({
        courseName: "",
        type: "",
        duration: "",
        description: "",
        link: "",
      });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <Modal
      title="Add Course"
      open={isOpen}
      onCancel={handleCloseModal}
      footer={null}
    >
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="courseName" className="block font-medium">
            Course Name:
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="type" className="block font-medium">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block font-medium">
            Duration:
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="link" className="block font-medium">
            Link:
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Add Course
        </button>
      </form>
    </Modal>
  );
};

export default CourseModal;
