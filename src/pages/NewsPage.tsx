import React from 'react';
const NewsPage = () => {
  const newsItems = [{
    title: 'September Newsletter',
    date: 'September 4th, 2025',
    summary: ' We hope that you all had a great start to your semester and have been having a good (and not too stressful) time in your classes! For the freshmen starting their journey at UT, we wish you the best of luck and hope that you make the most out of your first year on the Forty Acres!',
    image: '/lessons/CHEUAB Newsletter -September-.pdf',
    link: '/lessons/CHEUAB Newsletter -September-.pdf'
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
              {item.image.endsWith('.pdf') ? (
                <iframe 
                  src={item.image} 
                  className="w-full h-64 md:h-full border-0" 
                  title={`${item.title} preview`}
                />
              ) : (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="p-6 md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-[#BF5700] mb-3">{item.date}</p>
              <p className="text-gray-700">{item.summary}</p>
              <a 
                href={item.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#BF5700] hover:underline"
              >
                Read more
              </a>
            </div>
          </div>)}
      </div>
    </div>;
};
export default NewsPage;