import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      name: "Introduction to React",
      type: "Web Development",
      duration: "8 weeks",
      description:
        "Learn the basics of React and build interactive web applications.",
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      type: "Programming",
      duration: "10 weeks",
      description:
        "Dive deep into JavaScript concepts and advanced programming techniques.",
    },
    {
      id: 3,
      name: "Data Structures and Algorithms",
      type: "Computer Science",
      duration: "12 weeks",
      description:
        "Master fundamental data structures and algorithms used in computer science.",
    },
    {
      id: 4,
      name: "Machine Learning Fundamentals",
      type: "Artificial Intelligence",
      duration: "16 weeks",
      description:
        "Explore the basics of machine learning and its applications in AI.",
    },
    {
      id: 5,
      name: "Mobile App Development with React Native",
      type: "Mobile Development",
      duration: "10 weeks",
      description:
        "Build cross-platform mobile apps using React Native framework.",
    },
  ];

  const toggleCourse = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          <div
            className="bg-teal-50 border border-teal-500 text-teal-700 px-6 py-4 cursor-pointer flex justify-between items-center"
            onClick={() => toggleCourse(course.id)}
          >
            <h3 className="text-lg font-medium">{course.name}</h3>
            <span>{expandedCourse === course.id ? "▲" : "▼"}</span>
          </div>
          {expandedCourse === course.id && (
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

              <Link className="bg-teal-100 border border-teal-500 text-teal-700 rounded-lg w-fit my-2 px-2">
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
