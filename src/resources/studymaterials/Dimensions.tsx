import React from "react";

const Dimensions: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">Dimensional Analysis & Scale-Up</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        Dimensional analysis is a powerful tool in engineering and science for checking equations, converting units, and deriving relationships between physical quantities. It is essential for scale-up problems and for understanding how systems behave when their size changes. The Buckingham Pi theorem is a key method for reducing complex physical problems to their fundamental dimensionless groups.
      </p>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Dimensional Homogeneity</li>
          <li>Fundamental and Derived Units</li>
          <li>Buckingham Pi Theorem</li>
          <li>Dimensionless Groups</li>
          <li>Scale-Up and Similarity</li>
        </ul>
      </section>

      {/* Dimensional Analysis */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Dimensional Analysis</h2>
        <p>
          Dimensional analysis involves expressing physical quantities in terms of their fundamental dimensions (such as mass [M], length [L], time [T], temperature [Θ], etc.). Equations must be dimensionally homogeneous, meaning both sides have the same dimensions. This helps check the validity of equations and convert between units.
        </p>
      </section>

      {/* Buckingham Pi Theorem */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Buckingham Pi Theorem</h2>
        <p>
          The Buckingham Pi theorem is a systematic method for finding dimensionless groups (Pi terms) that govern a physical system. If a problem involves <span className="font-mono">n</span> variables and <span className="font-mono">k</span> fundamental dimensions, you can form <span className="font-mono">n - k</span> independent dimensionless groups. These groups simplify experiments and modeling, allowing results to be generalized across different scales.
        </p>
        <ul className="list-disc list-inside">
          <li>Identify all variables and their dimensions.</li>
          <li>Determine the fundamental dimensions involved.</li>
          <li>Form dimensionless groups using the variables.</li>
          <li>Express the physical relationship in terms of these groups.</li>
        </ul>
      </section>

      {/* Scale-Up Problems */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Scale-Up Problems</h2>
        <p>
          Scale-up refers to applying laboratory or pilot-scale results to full-scale processes. Dimensional analysis and similarity principles are crucial for successful scale-up. By ensuring that dimensionless groups (like Reynolds number, Froude number, etc.) are matched between scales, engineers can predict how changes in size affect system behavior. Failure to account for these effects can lead to inaccurate predictions and process failures.
        </p>
      </section>

      {/* Common Dimensionless Groups */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Common Dimensionless Groups</h2>
        <ul className="list-disc list-inside">
          <li><strong>Reynolds Number (Re):</strong> Ratio of inertial to viscous forces in fluid flow.</li>
          <li><strong>Froude Number (Fr):</strong> Ratio of inertial to gravitational forces.</li>
          <li><strong>Péclet Number (Pe):</strong> Ratio of advective to diffusive transport rates.</li>
          <li><strong>Prandtl Number (Pr):</strong> Ratio of momentum diffusivity to thermal diffusivity.</li>
        </ul>
      </section>

      {/* Recap */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recap</h2>
        <p>
          Dimensional analysis and the Buckingham Pi theorem are essential tools for engineers. They help ensure equations are correct, simplify complex problems, and enable successful scale-up from lab to plant. Always check for dimensional homogeneity and use dimensionless groups to generalize results.
        </p>
      </section>
    </div>
  );
};

export default Dimensions;
