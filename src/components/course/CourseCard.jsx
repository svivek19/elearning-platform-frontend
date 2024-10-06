import React from "react";
import {
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaDatabase,
  FaBook,
} from "react-icons/fa";

const coursesData = [
  {
    title: "Java",
    description:
      "Learn the fundamentals of Java programming and object-oriented concepts.",
    icon: <FaJava size={50} className="text-teal-50" />,
  },
  {
    title: "React",
    description:
      "Understand the basics of React and how to build interactive UIs.",
    icon: <FaReact size={50} className="text-teal-50" />,
  },
  {
    title: "Python",
    description:
      "Explore Python and its applications in data science and web development.",
    icon: <FaPython size={50} className="text-teal-50" />,
  },
  {
    title: "Node.js",
    description: "Get started with server-side JavaScript using Node.js.",
    icon: <FaNodeJs size={50} className="text-teal-50" />,
  },
  {
    title: "HTML & CSS",
    description: "Learn the building blocks of web development: HTML and CSS.",
    icon: <FaHtml5 size={50} className="text-teal-50" />,
  },
  {
    title: "Database Management",
    description:
      "Understand the basics of databases and SQL for backend development.",
    icon: <FaDatabase size={50} className="text-teal-50" />,
  },
];

const CourseCard = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {coursesData.map((course, index) => (
        <div
          key={index}
          className="border-t-4 border-b-2 border-x border-teal-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 rounded-lg min-h-60 flex flex-col justify-between"
        >
          <div className="flex justify-center p-2 rounded-xl mb-4 bg-teal-900">
            {course.icon}
          </div>
          <h1 className="text-xl font-bold text-teal-700 text-center mb-2 truncate whitespace-nowrap">
            {course.title}
          </h1>
          <p className="text-sm text-teal-700">
            {course.description.length > 120
              ? `${course.description.slice(0, 150)}...`
              : course.description}
          </p>

          <div className="flex items-center gap-2 border-2 border-teal-500 text-sm p-2 w-fit mt-2 rounded-md hover:bg-teal-500 cursor-pointer transition duration-300">
            <p>Enroll</p>
            <span>
              <FaBook />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
