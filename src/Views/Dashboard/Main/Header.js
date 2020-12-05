import React from "react";
import Logo from "../../../components/Logo";
import { useComponentVisible } from "../../../hooks";
import NavItem from "./NavItem";
import { Hamburger } from "../../../svg";
import { navMenuItems } from "../../../data";
import Notifications from "./Notifications";
import User from "./User";
import MenuBar from "./MenuBar";

export const buttonStyles = (color) =>
  `hover:bg-${color}-100 transform active:shadow-sm active:bg-${color}-200 hover:scale-105 active:scale-100 hover:shadow-xl focus:outline-none`;

const Header = ({ setIsMenuOpen }) => {
  const {
    ref: notRef,
    isComponentVisible: notIsVisible,
    setIsComponentVisible: setNotIsVisible,
  } = useComponentVisible(false);

  const {
    ref: userRef,
    isComponentVisible: userIsVisible,
    setIsComponentVisible: setUserIsVisible,
  } = useComponentVisible(false);

  const {
    ref: barRef,
    isComponentVisible: barIsVisible,
    setIsComponentVisible: setBarIsVisible,
  } = useComponentVisible(false);

  return (
    <header className="flex bg-white flex-col px-12 py-6 md:p-6 md:py-3 md:fixed md:top-0 md:z-20 md:w-full shadow-md">
      <div className="flex tracking-wide justify-between">
        <div className="flex md:hidden">
          <Logo color="purple" text="Administrator" />
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-2 mb-1">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`block px-2 py-3 rounded-md ${buttonStyles()}`}
            >
              <Hamburger scale={1} color="black" />
            </button>
          </div>
          <Logo color="purple" text="Admin" allowSub />
        </div>
        <div className="flex items-center">
          <Notifications
            notRef={notRef}
            setNotIsVisible={setNotIsVisible}
            notIsVisible={notIsVisible}
          />
          <User
            userRef={userRef}
            setUserIsVisible={setUserIsVisible}
            userIsVisible={userIsVisible}
          />
        </div>
      </div>
      <nav className="flex items-center ml-4 tracking-wide justify-between mt-6 md:hidden">
        <ul className="flex">
          {navMenuItems.map((item) => (
            <NavItem
              key={`${Math.random()}+${Date.now()}`}
              color={item.color}
              hasDropdown={item.hasDropdown}
              svg={<item.SVG scale={0.255319148936} color="white" />}
              dropDownLinks={item.dropdownLinks}
            >
              {item.text}
            </NavItem>
          ))}
        </ul>
        <MenuBar
          barRef={barRef}
          setBarIsVisible={setBarIsVisible}
          barIsVisible={barIsVisible}
        />
      </nav>
    </header>
  );
};

export default Header;
