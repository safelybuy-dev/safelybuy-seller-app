import React from "react";

const TopStat = ({ title, value, caption, svg, last, color, loading }) => {
  if (loading)
    return (
      <div
        className={`flex ${
          !last ? "mr-10" : ""
        } p-8 flex-col bg-white w-1/3 md:w-full md:mr-0 md:mb-10 rounded-2xl relative animate-pulse`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="h-6 my-2 bg-gray-200 rounded w-32"></div>
            <div className="h-4 my-2 bg-gray-100 rounded w-48"></div>
          </div>
          <div
            className={`bg-${color}-100 p-6 rounded-full top-0 right-0 h-10 w-10`}
          ></div>
        </div>
        <div className="flex my-2 justify-between items-center">
          <div className="rounded-full bg-gray-300 h-8 w-8"></div>
          <div className="h-6 bg-purple-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  return (
    <div
      className={`flex ${
        !last ? "mr-6" : ""
      } p-4 flex-col bg-white rounded-2xl relative w-1/4 md:w-5/12 md:mr-0 md:mb-6`}
    >
      <span className="text-xl md:text-lg pb-1">{title}</span>
      <span className="block py-4 md:py-2 text-4xl md:text-3xl font-extrabold">
        {value}
      </span>
      <span className="text-sm opacity-40">{caption}</span>
      <div
        className={`absolute bg-${color}-400 p-3 -m-4 rounded-full top-0 right-0`}
      >
        {svg}
      </div>
    </div>
  );
};

export default TopStat;
