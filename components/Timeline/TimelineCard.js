import React from "react";

export const TimelineCard = ({ icon, title, name, time, description }) => {
  return (
    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white rounded-xl shadow-2xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
      <div className="w-10 h-1 bg-gradient-to-r from-green-400 to-sky-500 absolute -left-10 top-3 z-0"></div>

      <div className="">
        <h1 className="flex items-center text-lg font-semibold text-black">
          {icon} {title}
        </h1>
        <h2 className="text-xs text-gray-400 pb-2">
          {name} | {time}
        </h2>
        <p className="text-sm md:text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
