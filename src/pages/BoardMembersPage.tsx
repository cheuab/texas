import React from 'react';
const BoardMembersPage = () => {
  const boardMembers = [{
    name: 'Titus Loftin',
    role: 'Director',
    year: 'Sophomore',
    bio: "",
    image: '/titus.jpeg'
  }, {
    name: 'Jai Kumaravel',
    role: 'Director',
    year: 'Sophomore',
    bio: '',
    image: '/jai.jpeg'
  }, {
    name: 'Radu Variu',
    role: 'Events Coordinator',
    year: 'Sophomore',
    bio: '',
    image: '/radu.jpeg'
  }, {
    name: 'Gabriel Jesurum',
    role: 'Officer of Finance',
    year: 'Junior',
    bio: '',
    image: '/gabriel.jpeg'
  }, {
    name: 'Rishita Jain',
    role: 'Communications Officer',
    year: 'Sophomore',
    bio: ".",
    image: '/rishita.jpeg'
  }, {
    name: 'Jad Issa',
    role: 'Outreach Coordinator',
    year: 'Sophomore',
    bio: '',
    image: '/jad.jpeg'
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
    image: '/venus.jpeg'
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
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover ${['Titus Loftin', 'Rishita Jain', 'Jad Issa', 'Junyan He', 'Venus Kumar'].includes(member.name) ? 'object-[center_75%]' : ''}`} 
                />
              ) : (
                <div className="text-gray-500">No image available</div>
              )}
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