import React, { useState } from "react";
import { Link } from "react-router-dom";

const subjects = [
	{
		name: "Chemistry",
		classes: [
			{
				name: "CHEM 101: Fundamentals",
				lessons: [
					{
						title: "Lesson 1: Introduction to Chemical Engineering",
						path: "/resources/study-materials/lesson1",
						description:
							"Fundamental concepts and overview of chemical engineering.",
					},
					// Add more CHEM 101 lessons here
				],
			},
			{
				name: "CHEM 201: Advanced Topics",
				lessons: [
					// Example placeholder for future lessons
				],
			},
		],
	},
	{
		name: "Physics",
		classes: [
			// Add physics classes and lessons here
		],
	},
	{
		name: "Mathematics",
		classes: [
			// Add math classes and lessons here
		],
	},
	// Add more subjects as needed
];

const StudyHome: React.FC = () => {
	const [openSubjectIdx, setOpenSubjectIdx] = useState<number | null>(null);
	const [openClassIdx, setOpenClassIdx] = useState<{
		[key: number]: number | null;
	}>({});

	const handleSubjectToggle = (idx: number) => {
		setOpenSubjectIdx(openSubjectIdx === idx ? null : idx);
	};

	const handleClassToggle = (subjectIdx: number, classIdx: number) => {
		setOpenClassIdx((prev) => ({
			...prev,
			[subjectIdx]: prev[subjectIdx] === classIdx ? null : classIdx,
		}));
	};

	return (
		<div className="min-h-screen w-full bg-[#FFF8F0] py-12 px-4">
			<h1 className="text-5xl font-bold text-[#BF5700] mb-10 text-center">
				Study Materials
			</h1>
			<p className="text-gray-700 mb-12 text-xl text-center max-w-2xl mx-auto">
				Explore subjects, classes, and lessons for chemical engineering and
				related fields. Click a subject to expand its classes, then select a
				class to view lessons.
			</p>
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{subjects.map((subject, sIdx) => (
					<div
						key={sIdx}
						className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
					>
						<button
							className="text-3xl font-bold text-[#BF5700] mb-4 focus:outline-none hover:underline"
							onClick={() => handleSubjectToggle(sIdx)}
						>
							{subject.name}
						</button>
						{openSubjectIdx === sIdx && (
							<div className="space-y-6">
								{subject.classes.length === 0 ? (
									<div className="text-gray-500 italic">
										No classes available yet.
									</div>
								) : (
									subject.classes.map((course, cIdx) => (
										<div
											key={cIdx}
											className="bg-[#FFF8F0] rounded-lg shadow p-4"
										>
											<button
												className="text-xl font-semibold text-[#BF5700] mb-2 focus:outline-none hover:underline"
												onClick={() => handleClassToggle(sIdx, cIdx)}
											>
												{course.name}
											</button>
											{openClassIdx[sIdx] === cIdx && (
												<div className="mt-2">
													{course.lessons.length === 0 ? (
														<div className="text-gray-500 italic">
															No lessons available yet.
														</div>
													) : (
														<ul className="space-y-2">
															{course.lessons.map(
																(lesson, lIdx) => (
																	<li
																		key={lIdx}
																		className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded p-3 border"
																	>
																		<div>
																			<Link
																				to={lesson.path}
																				className="text-lg text-[#BF5700] font-medium hover:underline"
																			>
																				{lesson.title}
																			</Link>
																			<p className="text-gray-700 text-sm">
																				{lesson.description}
																			</p>
																		</div>
																		<Link
																			to={lesson.path}
																			className="mt-2 md:mt-0 inline-block px-3 py-1 bg-[#BF5700] text-white rounded hover:bg-[#a64a00] transition-colors text-sm"
																		>
																			View Lesson
																		</Link>
																	</li>
																)
															)}
														</ul>
													)}
												</div>
											)}
										</div>
									))
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default StudyHome;
