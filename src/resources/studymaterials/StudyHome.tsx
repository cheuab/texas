import React from "react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Lesson 1: Introduction to Chemical Engineering",
    path: "/resources/study-materials/lesson1",
    description: "Fundamental concepts and overview of chemical engineering."
  },
  // Add more lessons here as needed
];

const StudyHome: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Study Materials</h1>
      <p className="mb-6 text-lg">Browse available lessons and resources for chemical engineering students.</p>
      <ul className="space-y-4">
        {lessons.map((lesson, idx) => (
          <li key={idx} className="border-b pb-4">
            <Link to={lesson.path} className="text-xl text-[#BF5700] font-semibold hover:underline">
              {lesson.title}
            </Link>
            <p className="text-gray-700">{lesson.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyHome;
