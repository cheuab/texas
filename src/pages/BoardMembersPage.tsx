import React from 'react';
const BoardMembersPage = () => {
  const boardMembers = [{
    name: 'Titus Loftin',
    role: 'Director',
    year: 'Sophomore',
    bio: "Chemical engineering major with a focus on sustainable energy. Titus leads the board's initiatives and represents student interests to faculty.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }, {
    name: 'Jai Kumaravel',
    role: 'Director',
    year: 'Sophomore',
    bio: 'Specializing in biochemical engineering. Jai coordinates events and manages board operations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }, {
    name: 'Radu Variu',
    role: 'Events Coordinator',
    year: 'Junior',
    bio: 'Focusing on process engineering. Radu documents meetings and manages communications.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }, {
    name: 'Rishita Jain',
    role: 'Communications Officer',
    year: 'Senior',
    bio: "Interested in materials science. Rishita manages the board's budget and financial planning.",
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }, {
    name: 'Jad Issa',
    role: 'Events Coordinator',
    year: 'Sophomore',
    bio: 'Passionate about environmental engineering. Jad plans and executes board events and activities.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }, {
    name: 'Junyan He',
    role: 'Outreach Coordinator',
    year: 'Sophomore',
    bio: 'Focusing on process control. Junyan manages relationships with industry partners and alumni.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }, {
    name: 'Venus Kumar',
    role: 'Creative Designer',
    year: 'Sophomore',
    bio: 'Focusing on process control. Junyan manages relationships with industry partners and alumni.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#BF5700] mb-6">Board Members</h1>
      <p className="text-gray-700 mb-8">
        Meet our dedicated team of undergraduate students who represent the
        Chemical Engineering student body at UT Austin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
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