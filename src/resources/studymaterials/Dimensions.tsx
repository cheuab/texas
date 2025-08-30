import { Parentheses } from "lucide-react";
import React from "react";

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
          physical problem with <span className="font-mono">n</span> independent variables and <span className="font-mono">k</span> fundamental dimensions, you can 
          form <span className="font-mono">n - k + 1</span> independent dimensionless groups (π terms).
        </p>
        <hr className="my-8" />
        <p>Here's an example: Suppose you are studying the drag force <span className="font-mono">F<sub>d</sub></span> on a sphere moving through a fluid. 
        The drag force depends on the following variables:</p>
        <ul className="list-disc list-inside">
          <li>Diameter of the sphere <span className="font-mono">D</span> [L]</li>
          <li>Velocity of the sphere <span className="font-mono">V</span> [L/T]</li>
          <li>Density of the fluid <span className="font-mono">ρ</span> [M/L³]</li>
          <li>Viscosity of the fluid <span className="font-mono">μ</span> [M/(L·T)]</li>
        </ul>
        <p>
          So this is saying you have <span className="font-mono">F<sub>d</sub> &prop; D<sup>a</sup> V<sup>b</sup> &rho;<sup>c</sup> &mu;<sup>d</sup></span> (where a, b, c, d are exponents to be determined).<br/>
        
          1. List dimensions of each variable:<br/>
          <ul className="list-disc list-inside">
            <li><span className="font-mono">F<sub>d</sub></span>: [M·L/T²]</li>
            <li><span className="font-mono">D</span>: [L]</li>
            <li><span className="font-mono">V</span>: [L/T]</li>
            <li><span className="font-mono">ρ</span>: [M/L³]</li>
            <li><span className="font-mono">μ</span>: [M/(L·T)]</li>
          </ul>
          2. Set up the dimensional equation:<br/>
          <span className="font-mono">[M·L/T²] = [L]^a [L/T]^b [M/L³]^c [M/(L·T)]^d</span><br/>
          3. Expand and collect exponents for each dimension:<br/>
          <span className="font-mono">M: c + d</span><br/>
          <span className="font-mono">L: a + b - 3c - d</span><br/>
          <span className="font-mono">T: -b - d</span><br/>
          4. Set up system of equations to match dimensions:<br/>
          <ul className="list-disc list-inside">
            <li>M: 1 = c + d</li>
            <li>L: 1 = a + b - 3c - d</li>
            <li>T: -2 = -b - d</li>
          </ul>
          5. Solve for a, b, c:<br/>
          <span className="font-mono">a = 1 - d</span><br/>
          <span className="font-mono">b = 2 - d</span><br/>
          <span className="font-mono">c = 1 - d</span><br/>
          6. Substitute and simplify to get the dimensionless groups: <br/>
          <span className="font-mono">F<sub>d</sub> = D^(1-d) V^(-2-d) ρ^(1-d) μ^d</span><br/>
          7. Move integers to one side and group letters(d) on one side: <br/>
          <span className="font-mono">F<sub>d</sub> / (ρVD) = (ρVD/μ)^d</span><br/>
        </p>
        <p>One possible set of dimensionless groups is:</p>
        <ul className="list-disc list-inside">
          <li>Reynolds Number <span className="font-mono">Re = ρVD/μ</span></li>
          <li>Drag Coefficient <span className="font-mono">C<sub>d</sub> = F<sub>d</sub> / (½ρV²A)</span>, where <span className="font-mono">A</span> is the cross-sectional area of the sphere.</li>
        </ul>
        <p>By expressing the drag force in terms of these dimensionless groups, we can analyze the problem more easily
         and apply the results to different scales and conditions.</p>
      </section>
    </div>
  );
};

export default Dimensions;
