import React from "react";

const Button = ({
  text,
  primary,
  secondary,
  alternate,
  primaryOutline,
  secondaryOutline,
  danger,
  underlined,
  disabled,
  rounded,
  roundedMd,
  roundedLg,
  roundedFull,
  icon,
  children,
}) => (
  <div className="relative inline-block">
    <button
      className={`${
        primary ? `bg-green-500 text-white px-10 py-2 border-green-500` : ""
      } ${alternate ? `text-white bg-black px-6 py-1 text-xs md:px-3` : ""} ${
        underlined ? `border-b-2 border-black pb-1 mr-3` : ""
      } ${rounded ? `rounded` : ""} ${roundedMd ? `rounded-md` : ""} ${
        roundedLg ? `rounded-lg` : ""
      } ${roundedFull ? `rounded-full` : ""} ${
        disabled ? `text-white bg-gray cursor-not-allowed` : ""
      } ${primaryOutline ? `border-2 text-green-500 bg-white` : ""} ${
        secondaryOutline ? `border-2 text-purple-500 bg-white` : ""
      }`}
      disabled={disabled}
    >
      {text || children}
    </button>
    <div className="absolute right-3">{icon}</div>
  </div>
);

export default Button;
