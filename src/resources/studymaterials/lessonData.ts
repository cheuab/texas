import path from "path";
import { title } from "process";

export const subjects = [
	{
		name: "Lower Division ChE",
		classes: [
			{
				name: "ChE 210: Introduction to Computing",
				lessons: [
					{
						title: "Units and Dimensions",
						path: "/lessons/Units_210.pdf",
						description:
							"A review of units and dimensions.",
					},
                    {
                        title: "Guesstimation",
                        description:
                            "Introduction to guesstimation.",
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
						path: "/lessons/1st_Law.pdf",
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
					{
						title: "First law of Thermodynamics",
						path: "/lessons/1st_Law.pdf",
						description: "What is the First Law, reversible processes, and state functions.",
					},
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
					{
						title: "Dimensional Analysis and Scale-Up",
						path: "/lessons/Units_and_Dimensions.pdf",
						description: "Learn about dimensionless numbers, scaling, and Buckingham Pi.",
					},
					{
						title: "Fluid Statics",
						path: "/lessons/Fluid_Statics.pdf",
						description: "Learn about fluids at rest.",
					}
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
