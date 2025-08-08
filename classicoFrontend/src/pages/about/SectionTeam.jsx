import React from 'react';

const SectionTeam = () => {
  return (
    <div className="my-24 px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {/* Team Member */}
        <div className="text-center max-w-xs">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Team member"
            className="mx-auto rounded-full w-32 h-32 object-cover shadow-md"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h3>
          <p className="text-purple-600 font-medium">Founder & CEO</p>
        </div>

        {/* Team Member */}
        <div className="text-center max-w-xs">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Team member"
            className="mx-auto rounded-full w-32 h-32 object-cover shadow-md"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Smith</h3>
          <p className="text-purple-600 font-medium">Head of Marketing</p>
        </div>

        {/* Team Member */}
        <div className="text-center max-w-xs">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Team member"
            className="mx-auto rounded-full w-32 h-32 object-cover shadow-md"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Alex Johnson</h3>
          <p className="text-purple-600 font-medium">Lead Designer</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTeam;