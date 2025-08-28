import React from 'react';
import { BookOpenIcon, CalendarIcon, GraduationCapIcon, BriefcaseIcon } from 'lucide-react';
import { link } from 'fs';
const ResourcesPage = () => {
  // the const resourceCategories is basically your list of resources, 
  // each category has a title, an icon, and a list of resources with names and links that you can change
  const resourceCategories = [{
    title: 'Academic Resources',
    icon: <BookOpenIcon className="w-8 h-8 text-[#BF5700]" />,
    resources: [{
      name: 'Learning Resources',
      link: '/resources/studyhome'
    }, {
      name: 'Study Materials',
      link: '/resources/study-materials'
    }, {
      name: 'Registration Information',
      link: '/resources/registration'
    }, {
      name: 'Getting around Campus',
      link: '/resources/getting-around'
    }, {
      name: 'Textbook Request',
      link: '/resources/textbooks'
    }
  ]
  }, {
    title: 'Events & Activities',
    icon: <CalendarIcon className="w-8 h-8 text-[#BF5700]" />,
    resources: [{
      name: 'Upcoming Events',
      link: '/pages/events'
    }, {
      name: 'Latest News',
      link: '/pages/news'
    }, {
      name: 'Department Events',
      link: 'https://che.utexas.edu/events'
    }]
  }, {
    title: 'Career Development',
    icon: <BriefcaseIcon className="w-8 h-8 text-[#BF5700]" />,
    resources: [{
      name: 'Internship and Research Opportunities',
      link: 'https://enterprise.login.utexas.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s2'
    }, {
      name: 'Resume Templates',
      link: 'https://cockrell.utexas.edu/wp-content/uploads/2024/11/2025-ECAC-Resume-Template.pdf'
    }, {
      name: 'Interview Preparation',
      link: 'https://students.engr.utexas.edu/career-resources/interviews'
    }, {
      name: 'Career Planning',
      link: 'https://students.engr.utexas.edu/career-resources/career-planning'
    }]
  }, {
    title: 'Department Information',
    icon: <GraduationCapIcon className="w-8 h-8 text-[#BF5700]" />,
    resources: [{
      name: 'Department Website',
      link: 'https://che.utexas.edu'
    }, {
      name: 'Faculty and Staff Directory',
      link: 'https://che.utexas.edu/people/faculty'
    }, {
      name: 'Degree Requirements',
      link: 'https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-chemical-engineering/'
    }, {
      name: 'Course Descriptions',
      link: 'https://catalog.utexas.edu/general-information/coursesatoz/che/'
    }]
  }];
  return <div className="container mx-auto px-4 py-12">

       {/* This is the main content of the ResourcesPage component, it's weird that its below the
       other code, but its just the title */}
      <h1 className="text-3xl font-bold text-[#BF5700] mb-6">Resources</h1>
      <p className="text-gray-700 mb-8">
        Access a variety of resources to support your academic and professional
        journey in Chemical Engineering at UT Austin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resourceCategories.map((category, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-xl font-bold ml-3">{category.title}</h2>
            </div>
            <ul className="space-y-2">
              {category.resources.map((resource, idx) => <li key={idx}>
                  <a href={resource.link} className="text-[#BF5700] hover:underline">
                    {resource.name}
                  </a>
                </li>)}
            </ul>
          </div>)}
      </div>
    </div>;
};
export default ResourcesPage;