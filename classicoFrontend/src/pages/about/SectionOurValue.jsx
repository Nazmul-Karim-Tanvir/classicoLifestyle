import React from 'react';
import { BadgeCheck, Smile, Sparkles } from 'lucide-react';

const SectionOurValue = () => {
  const values = [
    {
      title: 'Quality',
      description: 'We source only the best products so you get premium quality every time.',
      icon: <BadgeCheck className="w-10 h-10 text-purple-600 mb-4" />,
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority. We offer support and easy returns.',
      icon: <Smile className="w-10 h-10 text-purple-600 mb-4" />,
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of trends to bring you fresh and exciting products.',
      icon: <Sparkles className="w-10 h-10 text-purple-600 mb-4" />,
    },
  ];

  return (
    <div className="my-24 text-center">
      <h2 className="text-3xl font-semibold text-purple-900 mb-12 font-serif">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-purple-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center text-center">
              {value.icon}
              <h3 className="text-xl font-bold text-purple-700 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOurValue;