import React, { useState, useEffect, useRef } from "react";
import { subjects } from "./lessonData";
import { Link } from "react-router-dom";

const isPdf = (path: string) => path && path.endsWith('.pdf');

const StudyHome: React.FC = () => {
	const [search, setSearch] = useState("");
	const [openClassIdx, setOpenClassIdx] = useState<number | null>(null);
	const userClickedRef = useRef(false);

	// Flatten all classes from all subjects
	const allClasses = subjects.flatMap((subject) =>
		subject.classes.map((course) => ({
			...course,
			subject: subject.name,
		}))
	);

	// Filter classes by search
	const filteredClasses = allClasses.filter(
		(course) =>
			course.name.toLowerCase().includes(search.toLowerCase()) ||
			course.lessons.some((lesson) =>
				lesson.title.toLowerCase().includes(search.toLowerCase())
			)
	);

	// Auto-expand course card if searching for a lesson
	useEffect(() => {
		if (userClickedRef.current) {
			userClickedRef.current = false;
			return;
		}
		if (search.trim() === "") {
			setOpenClassIdx(null);
			return;
		}
		// Find first course with a matching lesson
		const idx = filteredClasses.findIndex((course) =>
			course.lessons.some((lesson) =>
				lesson.title.toLowerCase().includes(search.toLowerCase())
			)
		);
		if (idx !== -1) {
			setOpenClassIdx(idx);
		} else {
			// If only course name matches, open first match
			const courseIdx = filteredClasses.findIndex((course) =>
				course.name.toLowerCase().includes(search.toLowerCase())
			);
			setOpenClassIdx(courseIdx !== -1 ? courseIdx : null);
		}
	}, [search, filteredClasses]);

	// Helper for lesson paths
	const safeLessons = (lessons: any[]) =>
		lessons.map((lesson) => ({
			...lesson,
			path: lesson.path
				? isPdf(lesson.path)
					? `/pdf-viewer?file=${lesson.path}`
					: lesson.path
				: "#",
		}));

	return (
		<div className="min-h-screen w-full bg-[#FFF8F0] py-12 px-4">
			<h1 className="text-5xl font-bold text-[#BF5700] mb-6 text-center">
				Learning Resources
			</h1>
			<p className="text-gray-700 mb-6 text-xl text-center max-w-2xl mx-auto">
				Search or select a course to view lessons and study materials for
				chemical engineering topics.
			</p>
			<div className="max-w-2xl mx-auto mb-8">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search courses or lessons..."
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
				/>
			</div>
			<div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
				{filteredClasses.map((course, idx) => (
					<div
						key={idx}
						className="bg-white rounded-lg shadow p-4 flex flex-col"
					>
						<button
							className="text-lg font-bold text-[#BF5700] mb-2 focus:outline-none hover:underline text-left"
							onClick={() => {
								userClickedRef.current = true;
								setOpenClassIdx(openClassIdx === idx ? null : idx);
							}}
						>
							{course.name}
							<span className="ml-2 text-sm text-gray-500">
								({course.subject})
							</span>
						</button>
						{openClassIdx === idx && (
							<ul className="space-y-2">
								{safeLessons((() => {
									if (search.trim() && openClassIdx === idx) {
										const match = course.lessons.filter((lesson) =>
											lesson.title.toLowerCase().includes(search.toLowerCase())
										);
										const rest = course.lessons.filter((lesson) =>
											!lesson.title.toLowerCase().includes(search.toLowerCase())
										);
										return [...match, ...rest];
									}
									return course.lessons;
								})()).map((lesson, lIdx) => (
									<li
										key={lIdx}
										className="bg-[#FFF8F0] rounded shadow p-4 flex flex-col"
									>
										<span className="text-base text-[#BF5700] font-semibold mb-1">
											{lesson.title}
										</span>
										<span className="text-gray-700 mb-1 text-sm">
											{lesson.description}
										</span>
										<Link
											to={lesson.path}
											className="inline-block px-3 py-1 bg-[#BF5700] text-white rounded hover:bg-[#a64a00] transition-colors text-xs font-medium w-fit"
										>
											View Lesson
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
				{filteredClasses.length === 0 && (
					<div className="text-gray-500 text-center">
						No courses or lessons found.
					</div>
				)}
			</div>
		</div>
	);
};

export default StudyHome;
