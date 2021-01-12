import React from "react";

const Button = ({
  text,
  primary,
  secondary,
  full,
  alternate,
  primaryOutline,
  secondaryOutline,
  dangerOutline,
  danger,
  underlined,
  disabled,
  rounded,
  roundedMd,
  roundedLg,
  roundedFull,
  icon,
  children,
  xSmall,
  preTagText,
}) => (
  <div className={`relative inline-block ${full ? `w-full` : ""}`}>
    {preTagText && (
      <div
        className={`absolute top-2 rounded-full left-4 px-2 text-white text-xs py-1 ${
          primary && "bg-green-800"
        } ${secondary && "bg-purple-800"} ${danger && "bg-red-800"}`}
      >
        {preTagText}
      </div>
    )}
    <button
      className={`${
        primary ? `bg-green-500 text-white px-10 py-2 border-green-500` : ""
      } ${alternate ? `text-white bg-black px-6 py-1 text-sm md:px-1` : ""} ${
        underlined ? `border-b-2 border-black pb-1 mr-3` : ""
      } ${rounded ? `rounded` : ""} ${roundedMd ? `rounded-md` : ""} ${
        roundedLg ? `rounded-lg` : ""
      } ${roundedFull ? `rounded-full` : ""} ${
        disabled ? `text-white bg-gray cursor-not-allowed` : ""
      } ${primaryOutline ? `border-2 text-green-500 bg-white` : ""} ${
        secondaryOutline ? `border-2 text-purple-500 bg-white` : ""
      } ${full ? `w-full` : ""} ${
        secondary ? `bg-purple-600 text-white px-8 py-2` : ""
      }  ${danger ? `bg-red-500 text-white px-8 py-2` : ""} ${
        preTagText ? `pl-16` : ""
      } ${icon ? `pr-16` : ""} ${dangerOutline ? `border-2 border-red-500 text-red-500 bg-white  px-8 py-2` : ""}`}
      disabled={disabled}
      style={{ [xSmall && "fontSize"]: "7px" }}
    >
      {text || children}
    </button>
    <div className="absolute right-6 bottom-3 pb-px">{icon}</div>
  </div>
);

export default Button;
