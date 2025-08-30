import React from "react";

const FirstLaw: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">First Law of Thermodynamics</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        The First Law of Thermodynamics is a fundamental principle in chemical engineering and physics. It states that energy cannot be created or destroyed, only transformed from one form to another. This law forms the basis for energy balances in chemical processes and is essential for understanding how systems exchange energy with their surroundings.
      </p>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Energy Conservation</li>
          <li>Internal Energy</li>
          <li>Work and Heat</li>
          <li>Closed and Open Systems</li>
          <li>Applications in ChemE</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Statement of the First Law</h2>
        <p>
          The First Law can be mathematically expressed as:
          <br />
          <span className="font-mono">ΔU = Q - W</span>
          <br />
          where <span className="font-mono">ΔU</span> is the change in internal energy, <span className="font-mono">Q</span> is the heat added to the system, and <span className="font-mono">W</span> is the work done by the system.
        </p>
        <p className="mt-2">
          For open systems (control volumes), the law is often written as an energy balance including enthalpy, kinetic, and potential energy terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
        <ul className="list-disc list-inside">
          <li><strong>Internal Energy (U):</strong> The total energy contained within a system.</li>
          <li><strong>Heat (Q):</strong> Energy transferred due to temperature difference.</li>
          <li><strong>Work (W):</strong> Energy transferred when a force moves an object.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Applications</h2>
        <p>
          The First Law is used to analyze energy changes in chemical reactors, heat exchangers, pumps, and other process equipment. Engineers use it to calculate required energy inputs, efficiency, and losses in real systems.
        </p>
        <p className="mt-2">
          <strong>Example:</strong> Calculating the heat required to raise the temperature of water in a tank, or the work produced by a steam turbine.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recap</h2>
        <p>
          The First Law of Thermodynamics is a cornerstone of energy analysis in chemical engineering. It ensures that all energy changes are accounted for and helps engineers design efficient processes. Always apply energy balances and check units and dimensions when solving problems.
        </p>
      </section>
    </div>
  );
};

export default FirstLaw;
