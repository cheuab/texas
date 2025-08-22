import React from "react";

const Lesson1: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">Units and Dimensions</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        If you're here, you may be new to Chemical Engineering (ChemE). ChemE is a branch of engineering that applies physical sciences (physics and chemistry), life sciences (biology, microbiology), together with mathematics and economics to processes that convert raw materials or chemicals into more useful or valuable forms. A defining feature of a good chemical engineer is knowledge of units and dimensions, which are essential for communicating, analyzing, and solving engineering problems. This lesson will introduce you to the mathematical foundations and practical applications of units and dimensions in ChemE.
      </p>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Definitions</li>
          <li>Unit Systems</li>
          <li>Dimensional Analysis</li>
          <li>Unit Conversions</li>
          <li>Recap</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
        <p>
          <strong>Units</strong> are standardized quantities used to specify measurements (e.g., meter, kilogram, second). <strong>Dimensions</strong> refer to the physical nature of a quantity (e.g., length, mass, time). For example, velocity has the dimension of length/time (L/T) and can be measured in units such as m/s or ft/s. In equations, dimensions are often represented by symbols: [L] for length, [M] for mass, [T] for time.
        </p>
        <p className="mt-2">
          <strong>Example:</strong> The area of a rectangle is given by <span className="font-mono">A = l × w</span>, where both <span className="font-mono">l</span> and <span className="font-mono">w</span> have the dimension [L]. Thus, <span className="font-mono">[A] = [L] × [L] = [L²]</span>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Unit Systems</h2>
        <p>
          Chemical engineers commonly use two unit systems: <strong>SI (International System of Units)</strong> and <strong>Imperial (Customary)</strong>. SI units are based on meters, kilograms, and seconds, while Imperial units use feet, pounds, and seconds. Being able to work in both systems and convert between them is a key skill for engineers.
        </p>
        <ul className="list-disc list-inside">
          <li>SI: meter (m), kilogram (kg), second (s), mole (mol), kelvin (K)</li>
          <li>Imperial: foot (ft), pound (lb), second (s), gallon (gal), Fahrenheit (°F)</li>
        </ul>
        <p className="mt-2">
          <strong>Example:</strong> Pressure in SI is measured in pascals (Pa), where <span className="font-mono">1 Pa = 1 N/m² = 1 kg/(m·s²)</span>. In Imperial, pressure is often measured in pounds per square inch (psi).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Dimensional Analysis</h2>
        <p>
          Dimensional analysis is a method for checking the consistency of equations and converting between units. By expressing all quantities in terms of their fundamental dimensions, you can verify that both sides of an equation are equivalent and avoid calculation errors. This technique is also useful for deriving relationships and scaling up processes.
        </p>
        <p className="mt-2">
          <strong>Example:</strong> Consider the equation for force: <span className="font-mono">F = m × a</span>. The dimension of mass is [M], and acceleration is [L/T²], so <span className="font-mono">[F] = [M][L][T⁻²]</span>. In SI, the unit is newton (N), where <span className="font-mono">1 N = 1 kg·m/s²</span>.
        </p>
        <p className="mt-2">
          <strong>Dimensional Homogeneity:</strong> Every term in a physically meaningful equation must have the same dimensions. For example, in the equation <span className="font-mono">s = ut + ½at²</span>, all terms have the dimension of length [L].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Unit Conversions</h2>
        <p>
          Unit conversions are essential in chemical engineering, as you often need to switch between SI and Imperial units or convert within a system. Always use conversion factors and dimensional analysis to ensure accuracy. For example, <span className="font-mono">1 inch = 2.54 cm</span>, <span className="font-mono">1 lb = 0.4536 kg</span>.
        </p>
        <p className="mt-2">
          <strong>Example:</strong> Convert 10 feet to meters:
          <br />
          <span className="font-mono">10 ft × (0.3048 m / 1 ft) = 3.048 m</span>
        </p>
        <p className="mt-2">
          <strong>Multi-step Conversion:</strong> Convert 50 psi to kPa:
          <br />
          <span className="font-mono">50 psi × (6894.76 Pa / 1 psi) × (1 kPa / 1000 Pa) = 344.74 kPa</span>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recap</h2>
        <p>
          In this lesson, you learned the importance of units and dimensions in chemical engineering, the major unit systems, and how to use dimensional analysis and unit conversions. Mastery of these concepts is foundational for all future engineering coursework and professional practice. Always check your equations for dimensional consistency and practice unit conversions to build confidence in your calculations.
        </p>
      </section>
    </div>
  );
};

export default Lesson1;
