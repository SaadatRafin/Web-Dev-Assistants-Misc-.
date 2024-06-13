import React from 'react';

const Sidebar = () => {
  return (
    <div className="text-black w-60 flex flex-col ml-4 mt-4 gap-4">

      <div className="bg-purple-800 rounded border border-black">
        <div className="text-white p-2">Course Information</div>
        <div className="bg-white">
          <div className="py-2 px-3 hover:bg-gray-200">Announcements</div>
          <div className="border-t border-gray-300 py-2 px-3 hover:bg-gray-200">Sections</div>
          <div className="border-t border-gray-300 py-2 px-3 hover:bg-gray-200">Syllabus/Schedules</div>
        </div>
      </div>

      <div className="bg-purple-800 rounded border border-black">
        <div className="text-white p-2">Employees</div>
        <div className="bg-white">
          <div className="py-2 px-3 hover:bg-gray-200">Professors</div>
          <div className="border-t border-gray-300 py-2 px-3 hover:bg-gray-200">Staff</div>
          <div className="border-t border-gray-300 py-2 px-3 hover:bg-gray-200">Teaching Assistants</div>
          <div className="border-t border-gray-300 py-2 px-3 hover:bg-gray-200">Writing Professors</div>
        </div>
      </div>

      <div className="bg-purple-800 rounded border border-black">
        <div className="text-white p-2">Help Center</div>
        <div className="bg-white">
          <div className="py-2 px-3 hover:bg-gray-200">Student Manual</div>
          <div className="border-t border-gray-300 py-2 px-3 hover:bg-gray-200">Send Feedback</div>
        </div>
      </div>
  </div>
  );
};

export default Sidebar;