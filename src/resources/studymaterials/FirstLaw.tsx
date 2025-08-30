import React from "react";

const FirstLaw: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">First Law of Thermodynamics</h1>

      {/* Lesson Introduction */}
      <p className="mb-6 text-lg">
        The First Law of Thermodynamics is a fundamental principle in chemical
        engineering and physics. It states that energy cannot be created or
        destroyed, only transformed from one form to another. This law forms the
        basis for energy balances in chemical processes and is essential for
        understanding how systems exchange energy with their surroundings.
      </p>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc list-inside">
          <li>State and Path Functions</li>
          <li>Energy Conservation</li>
          <li>Internal Energy</li>
          <li>Work and Heat</li>
          <li>Closed and Open Systems</li>
          <li>Reversible and Irreversible processes</li>
        </ul>
      </section>

      {/* Definitions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Internal Energy (U):</strong> The total energy contained
            within a system. Think of it as the energy stored in molecular motion, configuration, and position.
          </li>
          <li>
            <strong>Heat (Q):</strong> Energy transferred into/from a system due to a temperature
            difference.
          </li>
          <li>
            <strong>Work (W):</strong> Energy transferred when a force moves an
            object.
          </li>
            <li>
            <strong>System:</strong> The part of the universe being studied.
            </li>
            <li>
              <strong>Surroundings:</strong> Everything outside the system.
            </li>
            <li>
              <strong>Reversible Process:</strong> A process that can be reversed without leaving any effect on the surroundings.
            </li>
            <li>
              <strong>State Function:</strong> A property that depends only on the current state of a system, not on the path taken to reach that state.
            </li>
            <li>
              <strong>Path Function:</strong> A property that depends on the specific path taken to reach a particular state. Examples include work and heat.
            </li>
        </ul>
      </section>

      {/* State Functions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">State and Path Functions</h2>
        <p>
          State functions are properties that depend only on the current state of
          a system, not on the path taken to reach that state. Examples include
          internal energy, enthalpy, and entropy. Changes in state functions are
          independent of the process path. Path functions, on the other hand,
          depend on the specific path taken to reach a particular state. Examples
          include work and heat.
        </p>
      </section>

      {/* Energy Conservation */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Energy Conservation</h2>
        <p>
          The First Law is the law of energy conservation: energy cannot be
          created or destroyed, only transferred or transformed. The energy in the universe must stay constant.
          The First Law can be mathematically expressed as:
          <br />
          <span className="font-mono">ΔU = Q + W</span>
          <br />
          where <span className="font-mono">ΔU</span> is the change in internal
          energy, <span className="font-mono">Q</span> is the heat transfer of the
          system, and <span className="font-mono">W</span> is the work done by or on
          the system.
        </p>
      </section>

      {/* Internal Energy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Internal Energy</h2>
        <p>
          Internal energy (U) is the total energy contained within a system,
          including kinetic and potential energy of molecules, chemical bonds,
          and intermolecular forces. Changes in internal energy are central to
          the First Law. It can be hard to grasp the concept of internal energy,
          but think of each little molecule in a system having its own tiny bit of energy 
          whether it's due to motion, position, or interactions with other molecules. Now take each
            of those tiny bits and add them all up; That's your system's internal energy.
        </p>
      </section>

      {/* Work and Heat */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Work and Heat</h2>
        <p>
          Work (W) and heat (Q) are two ways energy can be transferred between a
          system and its surroundings. Work is energy transfer due to force
          acting over a distance, while heat is energy transfer due to
          temperature difference. Note that both work and heat are path
          functions, meaning their values depend on the specific process path
          taken. Also note that different texts will have different convenctions. Generally,
          in UT ChE, if Work is done by the system, it is negative, as in the system is losing energy. 
          However if work is done on the system, it is positive, as in the system is gaining energy.
          Same concept goes for heat transfer, if heat is added to the system, so is energy, so it is positive,
          and vice versa.
        </p>
      </section>

      {/* Closed and Open Systems */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Closed and Open Systems</h2>
        <p>
          A closed system does not exchange matter with its surroundings, only
          energy. An open system can exchange both matter and
          energy. The First Law is applied differently depending on the type of
          system. A common misconception is that if a system exchanges energy, it is an open system.
          This is not true, as closed systems can exchange energy but cannot exchange matter.
        </p>
      </section>

      {/* Reversible and Irreversible Processes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Reversible and Irreversible Processes</h2>
        <p>
          Reversible processes are idealized processes that occur infinitely
          slowly, allowing the system to remain in equilibrium. They make calculations easy, and can sometimes
          be approximated in real-world scenarios. However, a system in real life cannot be fully reversible.
          Irreversible processes are real-world processes with losses due to friction,
          turbulence, and other factors.
        </p>
      </section>

      {/* Recap */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recap</h2>
        <p>
          The First Law of Thermodynamics is a cornerstone of energy analysis in
          chemical engineering. It ensures that all energy changes are accounted
          for and helps engineers design efficient processes. There are many different
          rules you need to follow when making thermodynamic calculations with the first law, so 
          make sure you have a solid understanding of these concepts.
        </p>
      </section>
    </div>
  );
};

export default FirstLaw;
