import React from "react";

import { AngleRight, CloseIcon } from "../../../svg";
import Logo from "../../../components/Logo";
import { mainMenuItems } from "../../../data";

const MenuItem = ({ text, url }) => {
  return (
    <a href={url}>
      <button className="flex py-4 justify-between w-full items-center">
        <span className="font-normal text-xl tracking-wide">{text}</span>{" "}
        <AngleRight scale={1.6} />
      </button>
    </a>
  );
};
export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="invisible flex flex-col fixed w-full h-screen bg-white z-30 md:visible">
      <div className="flex px-6 py-8 fixed w-full justify-between items-center">
        <Logo color="purple" text="Admin" allowSub />
        <button
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex h-full flex-col pt-28 pb-8 px-6 overflow-y-scroll">
        <small className="text-xs uppercase">other settings</small>
        <div className="flex flex-col py-4">
          {mainMenuItems.map((item) => (
            <MenuItem key={Math.random} text={item.text} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
