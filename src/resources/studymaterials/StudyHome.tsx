import React from "react";
import { Link } from "react-router-dom";

const lessons = [
	{
		title: "Lesson 1: Introduction to Chemical Engineering",
		path: "/resources/study-materials/lesson1",
		description: "Fundamental concepts and overview of chemical engineering.",
	},
	// Add more lessons here as needed
];

const StudyHome: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold text-[#BF5700] mb-6">
				Study Materials
			</h1>
			<p className="text-gray-700 mb-8 text-lg">
				Browse available lessons and resources for chemical engineering students.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{lessons.map((lesson, idx) => (
					<div
						key={idx}
						className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
					>
						<div>
							<Link
								to={lesson.path}
								className="text-2xl text-[#BF5700] font-semibold hover:underline"
							>
								{lesson.title}
							</Link>
							<p className="text-gray-700 mt-2">
								{lesson.description}
							</p>
						</div>
						<div className="mt-4">
							<Link
								to={lesson.path}
								className="inline-block px-4 py-2 bg-[#BF5700] text-white rounded hover:bg-[#a64a00] transition-colors"
							>
								View Lesson
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StudyHome;
