import React from 'react';

const GetInvolved = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#BF5700] mb-8">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Become a Member</h3>
            <p className="mb-4">Join our organization to connect, learn, and grow with fellow students.</p>
            <a href="/join" className="inline-block bg-[#BF5700] text-white px-4 py-2 rounded">Sign Up</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Keep updated</h3>
            <p className="mb-4">Join our Slack to stay informed on exciting things happening in the department.</p>
            <a href="https://join.slack.com/t/texasuab/shared_invite/zt-2uv8xbwno-q5ySBfUtWfNWl2RCA3mTVQ" className="inline-block bg-[#BF5700] text-white px-4 py-2 rounded">Newsletter</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Attend Events</h3>
            <p className="mb-4">Participate in our monthly events and workshops to expand your skills and network.</p>
            <a href="/events" className="inline-block bg-[#BF5700] text-white px-4 py-2 rounded">View Events</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;