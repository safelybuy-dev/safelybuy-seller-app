import React from "react";

const TopStat = ({ title, value, caption, svg, last, color }) => {
  return (
    <div className="flex mr-8 py-6 px-8 flex-col bg-white rounded-3xl relative w-1/4">
      <span className="text-2xl pb-3">{title}</span>
      <span className="block py-4 text-7xl font-extrabold">{value}</span>
      <span className="text-small opacity-40">{caption}</span>
      <div
        className={`absolute bg-${color}-400 p-6 -m-6 rounded-full top-0 right-0`}
      >
        {svg}
      </div>
    </div>
  );
};

export default TopStat;
