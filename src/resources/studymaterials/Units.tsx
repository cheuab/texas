import React from "react";

const Lesson1: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">Introduction to Chemical Engineering: Lesson 1</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        Chemical engineering is a branch of engineering that applies physical sciences (physics and chemistry), life sciences (biology, microbiology), together with mathematics and economics to processes that convert raw materials or chemicals into more useful or valuable forms.
      </p>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>Material and Energy Balances</li>
          <li>Thermodynamics</li>
          <li>Fluid Mechanics</li>
          <li>Heat and Mass Transfer</li>
          <li>Chemical Reaction Engineering</li>
        </ul>
      </section>

      {/* Detailed Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Lesson Details</h2>
        <p>
          In this lesson, we will explore the basics of material and energy balances, which are foundational to all chemical engineering processes. Understanding how to account for the flow of materials and energy in a system is crucial for designing safe and efficient chemical plants.
        </p>
        {/* Example Diagram/Image */}
        <img src="/uab.jpg" alt="Chemical Engineering Diagram" className="my-4 rounded shadow" />
      </section>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          This lesson introduced the fundamental concepts of chemical engineering and set the stage for deeper exploration in future lessons. Stay tuned for more detailed discussions on each key topic!
        </p>
      </section>
    </div>
  );
};

export default Lesson1;
