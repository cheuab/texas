import React from 'react';
const NewsPage = () => {
  const newsItems = [{
    title: 'News will be here soon',
    date: 'August 18, 2025',
    summary: 'Will all be here soon.',
    image: ''
  },];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#BF5700] mb-6">
        News & Announcements
      </h1>
      <p className="text-gray-700 mb-8">
        Stay up-to-date with the latest happenings in the UT Austin Chemical
        Engineering department and Advisory Board activities.
      </p>
      <div className="space-y-8">
        {newsItems.map((item, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-[#BF5700] mb-3">{item.date}</p>
              <p className="text-gray-700">{item.summary}</p>
              <a href="#" className="inline-block mt-4 text-[#BF5700] hover:underline">
                Read more
              </a>
            </div>
          </div>)}
      </div>
    </div>;
};
export default NewsPage;