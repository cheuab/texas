import React from 'react';
const BoardMembersPage = () => {
  const boardMembers = [{
    name: 'Titus Loftin',
    role: 'Director',
    year: 'Sophomore',
    bio: "",
    image: ''
  }, {
    name: 'Jai Kumaravel',
    role: 'Director',
    year: 'Sophomore',
    bio: '',
    image: ''
  }, {
    name: 'Radu Variu',
    role: 'Events Coordinator',
    year: 'Sophomore',
    bio: '',
    image: ''
  }, {
    name: 'Gabriel Jesurum',
    role: 'Officer of Finance',
    year: 'Junior',
    bio: '',
    image: ''
  }, {
    name: 'Rishita Jain',
    role: 'Communications Officer',
    year: 'Sophomore',
    bio: ".",
    image: ''
  }, {
    name: 'Jad Issa',
    role: 'Outreach Coordinator',
    year: 'Sophomore',
    bio: '',
    image: ''
  }, {
    name: 'Junyan He',
    role: 'Outreach Coordinator',
    year: 'Sophomore',
    bio: '',
    image: ''
  }, {
    name: 'Venus Kumar',
    role: 'Creative Designer',
    year: 'Sophomore',
    bio: '',
    image: ''
  }];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#BF5700] mb-6">Board Members</h1>
      <p className="text-gray-700 mb-8">
        Meet our dedicated team of undergraduate students who represent the
        Chemical Engineering student body at UT Austin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64 flex items-center justify-center bg-white">
              {/* Clock SVG as a placeholder for 'coming soon' */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="#BF5700" strokeWidth="4" fill="#FFF8F0" />
                <circle cx="32" cy="32" r="3" fill="#BF5700" />
                <rect x="30" y="18" width="4" height="18" rx="2" fill="#BF5700" />
                <rect x="32" y="32" width="14" height="4" rx="2" fill="#BF5700" transform="rotate(45 32 32)" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
              <p className="text-[#BF5700] font-medium">{member.role}</p>
              <p className="text-gray-600 mb-2">{member.year}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          </div>)}
      </div>
    </div>;
};
export default BoardMembersPage;