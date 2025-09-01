import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Dimensions: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">Dimensional Analysis & Scale-Up</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        Dimensional analysis is a powerful tool in engineering and science for checking equations, 
        converting units, and deriving relationships between physical quantities. 
        Often, real problems are too complex for straightforward analysis. The Buckingham Pi theorem 
        is a key method for reducing complex physical problems to their fundamental dimensionless groups.
      </p>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Fundamental and Derived Units</li>
          <li>Dimensionless Groups</li>
          <li>Buckingham Pi Theorem</li>
          <li>Scale-Up</li>
        </ul>
      </section>

      {/* Definitions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Dimensionless number:</strong> A quantity with no units, used to compare different systems or scales.
          </li>
          <li>
            <strong>A units dimension:</strong> Basic units of measurement 
            (e.g., mass [M], length [L], time [T], temperature [Θ]). </li>
            <li>
                <strong>Dimensional homogeneity:</strong> An equation is dimensionally homogeneous if all terms have the same dimensions.
            </li>
        </ul>
      </section>

      {/* Fundamental and Derived Units */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Fundamental and Derived Units</h2>
        <p>
          Fundamental units are the basic building blocks of measurement, representing a single physical dimension. Examples include:
        </p>
        <ul className="list-disc list-inside">
          <li>Mass [M]</li>
          <li>Length [L]</li>
          <li>Time [T]</li>
          <li>Temperature [Θ]</li>
        </ul>
        <p>
          Derived units are combinations of fundamental units and represent more complex physical quantities. Examples include:
        </p>
        <ul className="list-disc list-inside">
          <li>Velocity [L/T]</li>
          <li>Acceleration [L/T²]</li>
          <li>Force [M·L/T²]</li>
          <li>Pressure [M/(L·T²)]</li>
        </ul>
        We can go even further and define other units like energy, power, and viscosity.
      </section>

      {/* Dimensionless Groups */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Dimensionless Groups</h2>
        <p>
          Dimensionless groups are quantities that have no units and are used to compare different 
          systems or scales. They are often formed by combining variables in a way that 
          cancels out all units. Dimensionless numbers are usually ratios of
          different quantities. Common dimensionless groups include:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Reynolds Number (Re):</strong> Ratio of inertial to viscous forces in fluid flow.</li>
          <li><strong>Froude Number (Fr):</strong> Ratio of inertial to gravitational forces.</li>
          <li><strong>Péclet Number (Pe):</strong> Ratio of advective to diffusive transport rates.</li>
          <li><strong>Prandtl Number (Pr):</strong> Ratio of momentum diffusivity to thermal diffusivity.</li>
        </ul>
        For a more detailed list of dimensionless numbers, visit here.
      </section>

      {/* Buckingham Pi Theorem */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Buckingham Pi Theorem</h2>
        <p>
          The Buckingham Pi theorem is a key principle in dimensional analysis 
          that provides a systematic way to reduce the number of variables in a problem 
          by identifying dimensionless groups. The theorem states that if you have a 
          physical problem with <InlineMath math="n" /> independent variables and <InlineMath math="k" /> fundamental dimensions, you can 
          form <InlineMath math="n - k + 1" /> independent dimensionless groups (π terms).
        </p>
        <hr className="my-8" />
        <p>Here's an example: Suppose you are studying the drag force <InlineMath math="F_d" /> on a sphere moving through a fluid. 
        The drag force depends on the following variables:</p>
        <ul className="list-disc list-inside">
          <li>Diameter of the sphere <InlineMath math="D" /> [L]</li>
          <li>Velocity of the sphere <InlineMath math="V" /> [L/T]</li>
          <li>Density of the fluid <InlineMath math="\rho" /> [M/L³]</li>
          <li>Viscosity of the fluid <InlineMath math="\mu" /> [M/(L·T)]</li>
        </ul>
        <BlockMath math={"F_d \propto D^a V^b \rho^c \mu^d"} />
        <p>(where a, b, c, d are exponents to be determined)</p>
        <ol className="list-decimal list-inside mb-4">
          <li>List dimensions of each variable:</li>
        </ol>
        <BlockMath math={"[M L T^{-2}] = [L]^a [L T^{-1}]^b [M L^{-3}]^c [M L^{-1} T^{-1}]^d"} />
        <ol className="list-decimal list-inside mb-4" start={2}>
          <li>Expand and collect exponents for each dimension:</li>
        </ol>
        <BlockMath math={"M: c + d"} />
        <BlockMath math={"L: a + b - 3c - d"} />
        <BlockMath math={"T: -b - d"} />
        <ol className="list-decimal list-inside mb-4" start={3}>
          <li>Set up system of equations to match dimensions:</li>
        </ol>
        <BlockMath math={"1 = c + d"} />
        <BlockMath math={"1 = a + b - 3c - d"} />
        <BlockMath math={"-2 = -b - d"} />
        <ol className="list-decimal list-inside mb-4" start={4}>
          <li>Solve for a, b, c:</li>
        </ol>
        <BlockMath math={"a = 1 - d"} />
        <BlockMath math={"b = 2 - d"} />
        <BlockMath math={"c = 1 - d"} />
        <ol className="list-decimal list-inside mb-4" start={5}>
          <li>Substitute and simplify to get the dimensionless groups:</li>
        </ol>
        <BlockMath math={"F_d = D^{1-d} V^{-2-d} \rho^{1-d} \mu^d"} />
        <ol className="list-decimal list-inside mb-4" start={6}>
          <li>Move integers to one side and group letters (d) on one side:</li>
        </ol>
        <BlockMath math={"\frac{F_d}{\rho V D} = \left( \frac{\rho V D}{\mu} \right)^d"} />
        <p>One possible set of dimensionless groups is:</p>
        <ul className="list-disc list-inside">
          <li><InlineMath math={"Re = \frac{\rho V D}{\mu}"} /></li>
          <li><InlineMath math={"C_d = \frac{F_d}{\frac{1}{2} \rho V^2 A}"} />, where <InlineMath math="A" /> is the cross-sectional area of the sphere.</li>
        </ul>
        <p>By expressing the drag force in terms of these dimensionless groups, we can analyze the problem more easily
         and apply the results to different scales and conditions.</p>
      </section>

        {/* Scale-Up */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Scale-Up</h2>
            <p>When scaling systems, maintaining similarity in dimensionless numbers 
                ensures that the scaled system behaves like the original. 
                This is crucial in engineering applications such as chemical reactors, 
                fluid flow systems, and heat exchangers. By keeping key dimensionless groups constant, we can 
                predict performance and behavior across different scales.</p>
        </section>

        {/* Recap */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Recap</h2>
            <p>Dimensional analysis and the Buckingham Pi theorem are essential tools for simplifying complex physical problems. 
                By identifying dimensionless groups, we can reduce the number of variables and analyze systems more effectively.
                This approach is particularly useful in scaling up processes, ensuring that the behavior of the system remains consistent across different sizes and conditions.</p>
        </section>
    </div>
  );
};

export default Dimensions;
