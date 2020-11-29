import React from "react";
import { safelyBuyLogo } from "../svg";

export default function Logo({ text, color }) {
  return (
    <div className="flex items-center">
      <div>{safelyBuyLogo}</div>
      <div
        className={`bg-${
          color === "black" ? "black" : `${color}-500`
        } h-12 w-px border-0 mx-6 md:hidden`}
      ></div>
      <div
        className={`uppercase text-sm md:hidden text-${
          color === "black" ? "black" : `${color}-500`
        }`}
      >
        {text}
      </div>
    </div>
  );
}
