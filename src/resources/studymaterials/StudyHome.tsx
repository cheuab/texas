import React, { useState } from "react";
import { Link } from "react-router-dom";

const subjects = [
	{
		name: "Lower Division ChE",
		classes: [
			{
				name: "ChE 210: Introduction to Computing",
				lessons: [
					{
						title: "Units and Dimensions",
						path: "/resources/study-materials/units",
						description:
							"A review of units and dimensions.",
					},

                    {
                        title: "Guesstimation",
                        description:
                            "Introduction to the powerful engineering tool of guesstimation.",
                    },

                    {
                        title: "Process Flow Diagrams",
                        description: 
                            "Learn how to read and create an essential part of ChE.",
                    },

                    {
                        title: "Introduction to Material Balances",
                        description:
                            "Learn how how to balance processes.",
                    },

                    {
                        title: "Atomic Balances",
                        description:
                            "Learn a helpful trick to solve systems.",
                    },

                    {
                        title: "Solver",
                        description:
                            "Learn how to use Solver.",
                    },
					// Add more lessons here
				],
			},
			{
				name: "ChE 317: Introduction to Chemical Engineering Analysis",
				lessons: [
					{
						title: "Simultaneous and Sequential Solving",
						description:
							"Solving systems by hand.",
					},

                    {
                        title: "Transient Material Balances",
                        description:
                            "Learning how to solve systems not at steady state.",
                    },

                    {
                        title: "Material Balances on Reactive systems.",
                        description:
                            "What happens when there are reactions in a system.",
                    },

                    {
                        title: "Chemical Equilibrium",
                        description:
                            "Solving systems reactive systems with equilibirums.",
                    },

                    {
                        title: "Stoichometry of reactions",
                        descritption:
                            "Some tips and tricks for stoichometry.",
                    },

                    {
                        title: "Reactors",
                        description: "An overview of the different reactors you'll encounter.",
                    },

                    {
                        title: "PVT Properties",
                        description: "Different gas laws and their applications.",
                    },

                    {
                        title: "Flash Processes",
                        description: "How flash processes work for separations.",
                    },

                    {
                        title: "First law of Thermodynamics",
                        description: "What the first law has to do with what we're doing.",
                    },

                    {
                        title: "Isentropic Processes",
                        description: "What are isentropic processes?",
                    },

                    {
                        title: "Energy Balances",
                        description: "An overview of energy balances.",
                    },
				],
			},

            {
				name: "ChE 319: Transport Phenomena",
				lessons: [
					{
                        title: "Macroscopic Heat Transfer",
                        description: "An overview of the most basic heat transfer.",
                    },

                    {
                        title: "Microscopic Heat Transfer",
                        description: "Learn a more detailed way of heat transfer.",
                    },

                    {
                        title: "Fins",
                        description: "An overview of Fins and their calculations.",
                    },

                    {
                        title: "Macroscopic Mass Transfer",
                        description: "An overview of the most basic mass transfer.",
                    },

                    {
                        title: "Microscopic Mass Transfer",
                        description: "Learn a more detailed way of mass transfer.",
                    },

                    {
                        title: "Pores and Catalysts.",
                        description: "Similar to fins, learn about pores and catalysts.",
                    },

                    {
                        title: "Mass transfer through multiple phases",
                        description: "Learn how to account for mass transfer in multiple phases.",
                    },

                    {
                        title: "Identifying pressure variations",
                        description: "Figure out how to identify different pressures in systems.",
                    },

                    {
                        title: "Momentum Transport",
                        description: "How fluids move through space.",
                    },

                    {
                        title: "Navier Stokes Equations",
                        description: "A more complicated way for how fluids move through space.",
                    },
				],
			},
		],
	},
	{
		name: "Upper Division ChE",
		classes: [
			{
				name: "ChE 322: Thermodynamics",
				lessons: [
				],
			},

            {
				name: "ChE 338: Biochemical Engineering",
				lessons: [
				],
			},

            {
				name: "ChE 348: Numerical Methods",
				lessons: [
				],
			},

            {
				name: "ChE 350: Materials",
				lessons: [
				],
			},

            {
				name: "ChE 253k: Statistics",
				lessons: [
				],
			},

            {
				name: "ChE 354: Transport Processes",
				lessons: [
				],
			},

            {
				name: "ChE 360: Process Controls",
				lessons: [
				],
			},

            {
				name: "ChE 363: Seperation Processes",
				lessons: [
				],
			},

            {
				name: "ChE 372: Reactor",
				lessons: [
				],
			},

            
		],
	},
	{
		name: "Chemistry",
		classes: [
			{
				name: "CH 301/302: General Chemistry",
				lessons: [
				],
			},

            {
				name: "CH 328: Organic Chemistry",
				lessons: [
				],
			},

            {
				name: "CH 353: Physical Chemistry",
				lessons: [
				],
			},
		],
	},
	{
		name: "Mathematics",
		classes: [
			{
				name: "M408: Calculus",
				lessons: [
				],
			},

            {
				name: "M 427J: Differential Equations and Linear Algebra",
				lessons: [
				],
			},

            {
				name: "M 427L: Vector Calculus",
				lessons: [
				],
			},
		],
	},

    {
		name: "Physics",
		classes: [
			{
				name: "PHYS 303L: Engineering Physics I",
				lessons: [
				],
			},

            {
				name: "PHYS 303K: Engineering Physics II",
				lessons: [
				],
			},
		],
	},

    {
		name: "Electives",
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
