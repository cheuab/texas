import React from 'react';
const AboutPage = () => {
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#BF5700] mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          The Chemical Engineering Undergraduate Advisory Board at UT Austin
          serves as a bridge between students and faculty. Our mission is to
          enhance the undergraduate experience by advocating for student needs,
          providing feedback on curriculum, and fostering a strong community
          within the department.
        </p>
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
          <li>Represent student interests in departmental decisions</li>
          <li>Organize academic and professional development events</li>
          <li>Facilitate communication between students and faculty</li>
          <li>Provide feedback on course content and teaching methods</li>
          <li>Create opportunities for community building within ChE</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-700">
          Established in 2015, the ChE Undergraduate Advisory Board has been
          instrumental in implementing positive changes within the department.
          From curriculum improvements to enhanced student resources, our board
          continues to work diligently to ensure that UT Austin remains at the
          forefront of chemical engineering education.
        </p>
      </div>
    </div>;
};
export default AboutPage;