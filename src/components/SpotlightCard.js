import React from "react";
import Button from "./Button";

export default function SpotlightCard({ svg, text, tag, tagText }) {
  return (
    <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:transform md:scale-75 md:p-3 md:m-1">
      <div className="relative rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
        {tag && (
          <div className="absolute rounded-lg text-xs text-white bg-red-500 -top-2.5 -right-2.5 p-1 z-20">
            {tagText}
          </div>
        )}
        {svg}
      </div>
      <Button text={text} alternate roundedLg />
    </div>
  );
}
