import React from "react";
import Logo from "components/Logo";
import { useComponentVisible } from "hooks";
import NavItem from "./NavItem";
import { Hamburger, CloseIcon } from "svg";
import { navMenuItems, ticketNavMenuItems, foodNavMenuItems } from "data";
import Notifications from "./Notifications";
import NotificationDetails from "./NotificationDetails";
import { Link, useHistory } from "react-router-dom";
import User from "./User";
import Container from "components/Container";

export const buttonStyles = (color) =>
  `hover:bg-${color}-100 transform active:shadow-sm active:bg-${color}-200 hover:scale-105 active:scale-100 hover:shadow-xl focus:outline-none`;

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const Header = ({ setIsMenuOpen, isMenuOpen, prefrence, setPrefrence }) => {
  const history = useHistory();
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
  return (
    <>
      <header className="flex bg-white flex-col  pt-6  md:pt-3 fixed top-0 z-50 w-full shadow-md">
        <Container>
          <NotificationDetails
            setNotIsVisible={setNotIsVisible}
            closeNav={closeNav}
          />
          <div className="flex tracking-wide justify-between">
            <Link to="/" className="flex md:hidden">
              <Logo color="purple" text="SELLER CENTER" />
            </Link>
            <div className="hidden md:flex items-center">
              <div className="mr-2 mb-1">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`block px-2 py-3 rounded-md ${buttonStyles()}`}
                >
                  {!isMenuOpen ? (
                    <Hamburger scale={1} color="black" />
                  ) : (
                    <CloseIcon />
                  )}
                </button>
              </div>
              <Link to="/">
                <Logo color="purple" text="Admin" allowSub />
              </Link>
            </div>
            <div className="flex items-center pl-12">
              <select
                className="mr-5 border border-gray-300 px-3 py-2 rounded "
                onChange={(e) => {
                  setPrefrence(e.target.value);
                  history.push("/" + e.target.value.toLowerCase());
                }}
                value={prefrence}
              >
                <option value="" disabled>
                  Preference
                </option>
                {["Shopping", "Tickets", "Food"].map((pref, index) => (
                  <option value={pref} key={index}>
                    {pref}
                  </option>
                ))}
              </select>

              <Notifications
                notRef={notRef}
                setNotIsVisible={setNotIsVisible}
                notIsVisible={notIsVisible}
                openNav={openNav}
              />
              <User
                userRef={userRef}
                setUserIsVisible={setUserIsVisible}
                userIsVisible={userIsVisible}
              />
            </div>
          </div>
        </Container>
        <nav
          style={{
            color: "white",
            backgroundColor: "rgba(134, 97, 255, 1)",
          }}
          className="hidden md:flex items-center px-50 md:py-2  tracking-wide justify-center mt-6 "
        >
          <ul className="flex">
            {prefrence === "Shopping" &&
              navMenuItems.map((item) => (
                <NavItem
                  key={`${Math.random()}+${Date.now()}`}
                  color={item.color}
                  hasDropdown={item.hasDropdown}
                  svg={<item.SVG scale={0.255319148936} color="white" />}
                  url={item.url}
                  dropDownLinks={item.dropdownLinks}
                >
                  {item.text}
                </NavItem>
              ))}
            {prefrence === "Tickets" &&
              ticketNavMenuItems.map((item) => (
                <NavItem
                  key={`${Math.random()}+${Date.now()}`}
                  color={item.color}
                  hasDropdown={item.hasDropdown}
                  svg={<item.SVG scale={0.255319148936} color="white" />}
                  url={item.url}
                  dropDownLinks={item.dropdownLinks}
                >
                  {item.text}
                </NavItem>
              ))}
            {prefrence === "Food" &&
              foodNavMenuItems.map((item) => (
                <NavItem
                  key={`${Math.random()}+${Date.now()}`}
                  color={item.color}
                  hasDropdown={item.hasDropdown}
                  svg={<item.SVG scale={0.255319148936} color="white" />}
                  url={item.url}
                  dropDownLinks={item.dropdownLinks}
                >
                  {item.text}
                </NavItem>
              ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
