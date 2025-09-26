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
					{
						title: "Closed Systems",
						path: "/lessons/Closed_Systems.pdf",
						description: "Thermodynamics of closed systems."
					},
					{
						title: "Open Systems",
						path: "/lessons/Open_Systems.pdf",
						description: "Thermodynamics of open systems."
					},
					{
						title: "Thermodynamic Cycles",
						path: "/lessons/Thermodynamic_Cycles.pdf",
						description: "Understanding thermodynamic cycles, specifically Carnot cycles, and their applications."
					},
					{
						title: "Second Law of Thermodynamics",
						description: "Understanding the Second Law and its implications."
					},
					{
						title: "Intermolecular Forces (IMFS)",
						description: "Overview of intermolecular forces in thermodynamics."
					},
					{
						title: "Equations of State",
						description: "Equations of state and their applications."
					},
					{
						title: "Mixtures",
						description: "Thermodynamics of mixtures."
					},
					{
						title: "Thermodynamic Relationships",
						description: "Key thermodynamic relationships."
					},
					{
						title: "Departure Functions",
						description: "Understanding departure functions in thermodynamics."
					},
					{
						title: "Phase Equilibrium",
						description: "Principles of phase equilibrium."
					},
					{
						title: "Fugacity",
						description: "Definition and use of fugacity."
					},
					{
						title: "Gibbs Energy",
						description: "Gibbs energy and its significance."
					},
					{
						title: "Vapor-Liquid Equilibrium (VLE)",
						description: "VLE concepts and calculations."
					},
					{
						title: "Liquid-Liquid Equilibrium (LLE)",
						description: "LLE concepts and calculations."
					},
					{
						title: "Colligative Properties",
						description: "Overview of colligative properties."
					},
				],
			},
            {
				name: "ChE 338: Biochemical Engineering",
				lessons: [
					{
						title: "Cellular Structure",
						description: "Overview of cellular structure in biochemical engineering."
					},
					{
						title: "Growth Models",
						description: "Introduction to growth models for biological systems."
					},
					{
						title: "Bioreactors",
						description: "Types and operation of bioreactors."
					},
					{
						title: "Cell differentiation",
						description: "Understanding cell differentiation processes."
					},
					{
						title: "Synthetic cells",
						description: "Introduction to synthetic cells and their applications."
					},
					{
						title: "Cell Energetics",
						description: "Energy processes in cells."
					},
					{
						title: "Cell Metabolism",
						description: "Metabolic pathways and their significance."
					},
					{
						title: "Enzyme Kinetics",
						description: "Principles of enzyme kinetics."
					},
					{
						title: "Flux Balance",
						description: "Flux balance analysis in metabolic networks."
					},
					{
						title: "Gene Expression",
						description: "Mechanisms and regulation of gene expression."
					},
					{
						title: "Protein Folding",
						description: "Introduction to protein folding and its importance."
					}
				],
			},
            {
				name: "ChE 348: Numerical Methods",
				lessons: [
					{
						title: "Conditioning",
						description: "Understanding conditioning in numerical analysis."
					},
					{
						title: "Gaussian Elimination",
						path: "/lessons/Gaussian_Elimination.pdf",
						description: "Solving systems using Gaussian elimination."
					},
					{
						title: "LU Decomposition",
						description: "Matrix factorization using LU decomposition."
					},
					{
						title: "Iterative Methods",
						description: "Overview of iterative methods for solving equations."
					},
					{
						title: "Systems of Nonlinear Equations (NLE)",
						description: "Solving systems of nonlinear equations."
					},
					{
						title: "Initial Value Problems (IVP)",
						description: "Numerical methods for initial value problems."
					},
					{
						title: "Boundary Value Problems (BVP)",
						description: "Numerical methods for boundary value problems."
					},
					{
						title: "Interpolation",
						description: "Techniques for interpolation in numerical analysis."
					},
					{
						title: "Dynamical Systems",
						description: "Introduction to dynamical systems."
					},
					{
						title: "Partial Differential Equations (PDE)",
						description: "Numerical solutions to PDEs."
					},
					{
						title: "Optimization",
						description: "Numerical optimization techniques."
					}
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
					{
						title: "Probability",
						description: "Introduction to probability concepts."
					},
					{
						title: "Bayes Theorem",
						description: "Understanding Bayes Theorem and its applications."
					},
					{
						title: "Discrete Probability Functions",
						description: "Overview of discrete probability functions."
					},
					{
						title: "Binomial PDF",
						description: "Binomial probability distribution function."
					},
					{
						title: "Continuous PDF",
						description: "Continuous probability distribution functions."
					},
					{
						title: "Confidence Intervals",
						description: "Calculating and interpreting confidence intervals."
					},
					{
						title: "Hypothesis Testing",
						description: "Principles and methods of hypothesis testing."
					},
					{
						title: "Statistical Process Control",
						description: "Introduction to statistical process control."
					},
					{
						title: "Regression",
						description: "Regression analysis and its applications."
					},
					{
						title: "Design of Experiment",
						description: "Principles of experimental design."
					}
				],
			},
            {
				name: "ChE 354: Transport Processes",
				lessons: [
					{
						title: "Dimensional Analysis and Scale-Up",
						path: "/lessons/Units_and_Dimensions.pdf",
						description: "Learn about dimensionless numbers, scaling, and Buckingham Pi."
					},
					{
						title: "Fluid Statics",
						path: "/lessons/Fluid_Statics.pdf",
						description: "Learn about fluids at rest."
					},
					{
						title: "Macroscopic Balances",
						path:"/lessons/Macroscopic_Balances.pdf",
						description: "Overview of macroscopic balances in transport processes."
					},
					{
						title: "Friction Losses",
						path: "/lessons/Friction_Losses.pdf",
						description: "Understanding friction losses in fluid flow."
					},
					{
						title: "Non-Newtonian Fluids",
						description: "Properties and behavior of non-Newtonian fluids."
					},
					{
						title: "Pumps",
						description: "Types and operation of pumps."
					},
					{
						title: "Flow Measurement",
						description: "Techniques for measuring flow."
					},
					{
						title: "Flow Around Objects",
						description: "Analysis of flow around objects."
					},
					{
						title: "Compressible Flow",
						description: "Principles of compressible flow."
					},
					{
						title: "Thermodynamic Flow",
						description: "Thermodynamic aspects of flow."
					},
					{
						title: "Shock Behavior",
						description: "Understanding shock behavior in compressible flows."
					},
					{
						title: "Compressors",
						description: "Types and operation of compressors."
					},
					{
						title: "Overall Heat Transfer Coefficient",
						description: "Overall heat transfer coefficient (U)."
					},
					{
						title: "SATHE",
						description: "SATHE method and applications."
					},
					{
						title: "Radiant Heat Transfer",
						description: "Principles of radiant heat transfer."
					},
					{
						title: "HEN Design",
						description: "Heat exchanger network (HEN) design."
					}
				],
			},
            {
				name: "ChE 360: Process Controls",
				lessons: [
					{
						title: "Models of Processes",
						description: "Introduction to modeling of chemical processes."
					},
					{
						title: "Laplace Transforms",
						description: "Application of Laplace transforms in process control."
					},
					{
						title: "Transfer Functions",
						description: "Understanding transfer functions in control systems."
					},
					{
						title: "First and Second Order Systems",
						description: "Analysis of first and second order systems."
					},
					{
						title: "Empirical Models",
						description: "Development and use of empirical models."
					},
					{
						title: "PID Algorithm",
						description: "Principles and implementation of PID algorithms."
					},
					{
						title: "Control Instrumentation",
						description: "Overview of control instrumentation."
					},
					{
						title: "Closed-loop Analysis",
						description: "Analysis of closed-loop control systems."
					},
					{
						title: "PID Design",
						description: "Designing PID controllers."
					},
					{
						title: "Ratio Control",
						description: "Principles and applications of ratio control."
					},
					{
						title: "Model Predictive Control (MPC)",
						description: "Introduction to model predictive control."
					},
					{
						title: "Real-Time Optimization (RTO)",
						description: "Overview of real-time optimization in process control."
					},
					{
						title: "Process Safety",
						description: "Principles and practices of process safety."
					}
				],
			},
            {
				name: "ChE 363: Seperation Processes",
				lessons: [
					{
						title: "Steady-State Transfer in Phases",
						description: "Analysis of steady-state transfer in different phases."
					},
					{
						title: "Unsteady-State Transfer in Phases",
						description: "Analysis of unsteady-state transfer in different phases."
					},
					{
						title: "Equilibrium Stage Operations",
						description: "Principles of equilibrium stage operations."
					},
					{
						title: "Extraction",
						description: "Techniques and principles of extraction."
					},
					{
						title: "Gas Absorption",
						description: "Principles and applications of gas absorption."
					},
					{
						title: "Distillation",
						description: "Distillation processes and design."
					},
					{
						title: "Fixed Bed Separation",
						description: "Principles and applications of fixed bed separation."
					},
					{
						title: "Membrane Separation",
						description: "Overview of membrane separation techniques."
					}
				],
			},
            {
				name: "ChE 372: Reactor",
				lessons: [
					{
						title: "Batch",
						description: "Principles and operation of batch reactors."
					},
					{
						title: "CSTR",
						description: "Continuous Stirred Tank Reactor (CSTR) concepts."
					},
					{
						title: "Semi-batch",
						description: "Operation and analysis of semi-batch reactors."
					},
					{
						title: "PFR",
						description: "Plug Flow Reactor (PFR) principles."
					},
					{
						title: "Multiple Reactions",
						description: "Analysis of reactors with multiple reactions."
					},
					{
						title: "Defining K",
						description: "Defining reaction rate constants (K)."
					},
					{
						title: "Batch Energy balances",
						description: "Energy balances for batch reactors."
					},
					{
						title: "CSTR Energy balances",
						description: "Energy balances for CSTRs."
					},
					{
						title: "PFR Energy balances",
						description: "Energy balances for PFRs."
					},
					{
						title: "Heterogeneous Catalysis",
						description: "Principles of heterogeneous catalysis."
					},
					{
						title: "Defining Catalyst K",
						description: "Defining rate constants for catalysts."
					},
					{
						title: "External Diffusion",
						description: "External diffusion effects in reactors."
					},
					{
						title: "Internal Diffusion",
						description: "Internal diffusion effects in reactors."
					},
					{
						title: "Packed Bed",
						description: "Principles and operation of packed bed reactors."
					}
				],
			},
		],
	},
	{
		name: "Chemistry",
		classes: [
            {
				name: "CH 328: Organic Chemistry",
				lessons: [
					{
						title: "Alkanes",
						description: "Structure and reactions of alkanes."
					},
					{
						title: "Stereochemistry",
						description: "Principles of stereochemistry in organic molecules."
					},
					{
						title: "Acids and Bases",
						description: "Acid-base chemistry in organic reactions."
					},
					{
						title: "Alkenes",
						description: "Structure and reactions of alkenes."
					},
					{
						title: "Alkynes",
						description: "Structure and reactions of alkynes."
					},
					{
						title: "SN Reactions",
						description: "Substitution (SN) reactions in organic chemistry."
					},
					{
						title: "E Reactions",
						description: "Elimination (E) reactions in organic chemistry."
					},
					{
						title: "Alcohols",
						description: "Structure and reactions of alcohols."
					},
					{
						title: "Ethers",
						description: "Structure and reactions of ethers."
					},
					{
						title: "Aldehydes and Ketones",
						description: "Structure and reactions of aldehydes and ketones."
					},
					{
						title: "Carboxylic Acids",
						description: "Structure and reactions of carboxylic acids."
					},
					{
						title: "Enolates",
						description: "Enolate chemistry and reactions."
					},
					{
						title: "Aromaticity",
						description: "Principles and reactions of aromatic compounds."
					},
					{
						title: "Amines",
						description: "Structure and reactions of amines."
					},
					{
						title: "Reaction Sheet",
						description: "Summary of key organic reactions."
					}
				],
			},
            {
				name: "CH 353: Physical Chemistry",
				lessons: [
					{
						title: "First Law of Thermodynamics",
						description: "Understanding the First Law of Thermodynamics."
					},
					{
						title: "Second Law of Thermodynamics",
						description: "Understanding the Second Law of Thermodynamics."
					},
					{
						title: "Third Law of Thermodynamics",
						description: "Understanding the Third Law of Thermodynamics."
					},
					{
						title: "Free Energy",
						description: "Concepts and applications of free energy."
					},
					{
						title: "Phase Equilibria",
						description: "Principles of phase equilibria."
					},
					{
						title: "Solutions and Mixtures",
						description: "Properties and behavior of solutions and mixtures."
					},
					{
						title: "Chemical Equilibrium",
						description: "Principles of chemical equilibrium."
					},
					{
						title: "Maxwell's Relations",
						description: "Understanding Maxwell's relations in thermodynamics."
					}
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
					{ 
						title: "Integrals", 
						description: "Techniques and applications of integrals." 
					},
					{ 
						title: "Series", 
						description: "Understanding series and convergence." 
					},
					{ 
						title: "Multivariable", 
						description: "Introduction to multivariable calculus." 
					}
				],
			},
			{
				name: "M 427J: Differential Equations and Linear Algebra",
				lessons: [
					{ 
						title: "Integrating Factor", 
						description: "Solving ODEs using integrating factors." 
					},
					{ 
						title:"Separable Equations",
						description: "Solving separable differential equations." 
					},
					{ title: 
						"Higher Order Equations", 
						description: "Solving higher order differential equations." 
					},
					{ 
						title: "Particular Solutions", 
						description: "Finding particular solutions to ODEs." 
					},
					{ 
						title: "Linear Systems", 
						description: "Analysis of linear systems of equations." 
					},
					{ 
						title: "Linear Independence", 
						description: "Understanding linear independence in vectors." 
					},
					{ 
						title: "Eigenvalues and Eigenvectors", 
						description: "Finding eigenvalues and eigenvectors." 
					},
					{ 
						title: "Systems of ODEs", 
						description: "Solving systems of ordinary differential equations." 
					},
					{ 
						title: "PDE", 
						description: "Partial differential equations and their solutions." 
					}
				],
			},
			{
				name: "M 427L: Vector Calculus",
				lessons: [
					{ 
						title: "Vectors", 
						description: "Vector operations and applications." 
					},
					{ 
						title: "Change of Variables", 
						description: "Techniques for changing variables in integrals." 
					},
					{ 
						title: "Line Integrals", 
						description: "Calculating line integrals." 
					},
					{ 
						title: "Green's Theorem", 
						description: "Understanding and applying Green's theorem." 
					},
					{ 
						title: "Stokes' Theorem", 
						description: "Understanding and applying Stokes' theorem." 
					}
				],
			},
		],
	},
    {
		name: "Physics",
		classes: [
			{
				name: "PHYS 303: Engineering Physics",
				lessons: [
					{ 
						title: "Statics", 
						description: "Principles of statics in physics." 
					},
					{ 
						title: "Dynamics", 
						description: "Principles of dynamics in physics." 
					},
					{ 
						title: "Electricity", 
						description: "Understanding electricity and its principles." 
					},
					{ 
						title: "Magnetism", 
						description: "Properties and behavior of magnetic fields." 
					},
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
	
];
