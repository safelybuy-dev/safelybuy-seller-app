import React from "react";
import Button from "./Button";

export default function SpotlightCard({ svg, text, tag, tagText }) {
  return (
    <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:mx-2 md:mt-6 md:p-3 md:m-1">
      <div className="relative rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
        {tag && (
          <div
            className="absolute rounded-lg text-xs text-white bg-red-500 -top-2.5 -right-2.5 p-1 z-20"
            style={{ fontSize: "10px" }}
          >
            {tagText}
          </div>
        )}
        {svg}
      </div>
      <Button xSmall full text={text} alternate roundedLg />
    </div>
  );
}
