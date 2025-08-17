import React from 'react';
const Stats = () => {
  const stats = [{
    number: '6',
    label: 'Board Members'
  }, {
    number: '500+',
    label: 'ChE Students'
  }, {
    number: '12',
    label: 'Monthly Events'
  }, {
    number: '100%',
    label: 'Student Focused'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => <div key={index} className="space-y-2">
              <p className="text-[#BF5700] text-3xl md:text-4xl font-bold">
                {stat.number}
              </p>
              <p className="text-gray-700">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Stats;