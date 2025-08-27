import React, { useState } from "react";
import { problemSets } from "./problemBank";

const PracticeProblemsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [openClassIdx, setOpenClassIdx] = useState<number | null>(null);

  const handleClassToggle = (idx: number) => {
    setOpenClassIdx(openClassIdx === idx ? null : idx);
  };

  const filteredSets = problemSets.filter(set =>
    set.className.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#FFF8F0] py-12 px-4">
      <h1 className="text-5xl font-bold text-[#BF5700] mb-6 text-center">
        Practice Problems
      </h1>
      <p className="text-gray-700 mb-6 text-xl text-center max-w-2xl mx-auto">
        Search or select a class to view and solve practice problems for chemical engineering topics.
      </p>
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search classes..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
        />
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
        {filteredSets.map((set, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <button
              className="text-lg font-bold text-[#BF5700] mb-2 focus:outline-none hover:underline text-left"
              onClick={() => handleClassToggle(idx)}
            >
              {set.className}
            </button>
            {openClassIdx === idx && (
              <ul className="space-y-2">
                {set.problems.map((prob, pIdx) => (
                  <li key={pIdx} className="bg-[#FFF8F0] rounded shadow p-4 flex flex-col">
                    <span className="text-base text-[#BF5700] font-semibold mb-1">{prob.title}</span>
                    <span className="text-gray-700 mb-1 text-sm">{prob.description}</span>
                    <a href={prob.link} className="inline-block px-3 py-1 bg-[#BF5700] text-white rounded hover:bg-[#a64a00] transition-colors text-xs font-medium w-fit">View Problem</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {filteredSets.length === 0 && (
          <div className="text-gray-500 text-center">No classes found.</div>
        )}
      </div>
    </div>
  );
};

export default PracticeProblemsPage;
