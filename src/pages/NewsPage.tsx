import React from 'react';
const NewsPage = () => {
  const newsItems = [{
    title: 'New Course Offerings for Spring Semester',
    date: 'November 15, 2023',
    summary: 'The Chemical Engineering department has announced several new elective courses for the upcoming spring semester, including Advanced Biofuels and Pharmaceutical Process Design.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'ChE Students Win Regional Competition',
    date: 'October 28, 2023',
    summary: 'A team of UT Austin Chemical Engineering students took first place at the regional AIChE Chem-E-Car competition with their innovative design powered by an aluminum-air battery.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Industry Panel: Careers in Sustainable Energy',
    date: 'October 10, 2023',
    summary: 'The Advisory Board hosted a successful panel discussion featuring alumni working in sustainable energy. Panelists shared insights about career paths and emerging opportunities in the field.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Curriculum Changes Approved for Next Academic Year',
    date: 'September 22, 2023',
    summary: 'Based on student feedback collected by the Advisory Board, the department has approved changes to the core curriculum that will provide more hands-on laboratory experience.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
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