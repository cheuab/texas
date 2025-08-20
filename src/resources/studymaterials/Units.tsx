import React from "react";

const Lesson1: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">Units and Dimensions</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        If you're here, you may be new to Chemical Engineering (ChemE). ChemE is a 
        branch of engineering that applies physical sciences (physics and chemistry), 
        life sciences (biology, microbiology), together with mathematics and economics to 
        processes that convert raw materials or chemicals into more useful or valuable forms.
        A defining feature of a good chemical engineer, is knowledge of units and dimensions.
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
          In this lesson, we will explore the basics of material and energy balances, which are foundational to all chemical engineering processes. Understanding how to account for the flow of materials and energy in a system is crucial for designing safe and efficient chemical plants.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Unit Systems</h2>
        <p>
          In this lesson, we will explore the basics of material and energy balances, which are foundational to all chemical engineering processes. Understanding how to account for the flow of materials and energy in a system is crucial for designing safe and efficient chemical plants.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Dimensional Analysis</h2>
        <p>
          In this lesson, we will explore the basics of material and energy balances, which are foundational to all chemical engineering processes. Understanding how to account for the flow of materials and energy in a system is crucial for designing safe and efficient chemical plants.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Unit Conversions</h2>
        <p>
          In this lesson, we will explore the basics of material and energy balances, which are foundational to all chemical engineering processes. Understanding how to account for the flow of materials and energy in a system is crucial for designing safe and efficient chemical plants.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recap</h2>
        <p>
          This lesson introduced the fundamental concepts of chemical engineering and set the stage for deeper exploration in future lessons. Stay tuned for more detailed discussions on each key topic!
        </p>
      </section>
    </div>
  );
};

export default Lesson1;
