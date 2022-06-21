import React, { useState } from 'react';
import { AngleRight, CloseIcon, ArrowDown, UserAvatar, LogOut } from 'svg';
import { foodNavMenuItems, navMenuItems, ticketNavMenuItems } from 'data';
import { useComponentVisible } from 'hooks';
import { Link, useHistory } from 'react-router-dom';

const preferences = {
  Shopping: navMenuItems,
  Tickets: ticketNavMenuItems,
  Food: foodNavMenuItems,
};
function NavItem({
  svg,
  hasDropdown,
  children,
  last,
  dropDownLinks,
  url,
  closeMenuCallback,
}) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const history = useHistory();
  return (
    <div className="relative py-3">
      <button
        onClick={(e) => {
          if (!hasDropdown) {
            closeMenuCallback();
            history.push(url);
          }
          if (isComponentVisible) setIsComponentVisible(false);
          else {
            setIsComponentVisible(true);
          }
          e.stopPropagation();
        }}
        className={`flex ${
          !last ? 'mr-14' : 'mr-0'
        } items-center focus:outline-none cursor-pointer    pr-4 text-sm`}>
        <div className={`mr-2 rounded-full inline-block p-2`}>{svg}</div>
        <span
          className="text-[#828282]
           tracking-[0.06em]">
          {children}
        </span>
        {hasDropdown && (
          <span
            className={`mt-px ml-2 inline-block transform duration-200 ${
              isComponentVisible ? 'rotate-180' : 'rotate-0'
            }`}>
            <ArrowDown className="bg-red-500" color="#000" />
          </span>
        )}
      </button>
      <div ref={ref}>
        {hasDropdown && isComponentVisible && (
          <ul className="header-dropdown text-[#828282]  ml-4">
            {dropDownLinks.map((e) => (
              <Link
                key={Date.now() + Math.random()}
                onClick={() => {
                  closeMenuCallback();
                }}
                to={e.url}>
                <li
                  className={`py-3 px-4 text-sm rounded-xl tracking-[0.06em]`}>
                  {e.text}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function UserMenuMobile({
  isMenuOpen,
  setIsMenuOpen,
  username,
  preference,
  setPrefrence,
  handleSettingsOpen,
}) {
  const [activePreference, setActivePreference] = useState(false);

  const history = useHistory();
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div
      className="left-0 top-0 flex flex-col fixed w-full h-screen bg-[#E5E5E5] z-30"
      onClick={(e) => e.stopPropagation()}>
      <div className="flex px-6 py-8 fixed w-full justify-between items-center bg-[#E5E5E5] z-50">
        <div className="flex px-4 py-2 rounded-full shadow-2xl items-center bg-white">
          <UserAvatar scale={1.5} />
          <div className="ml-3 flex flex-col">
            <span className="font-normal text-xs">
              {username || 'Loading...'}
            </span>
            <span className="uppercase text-gray-400 text-xs">SELLER</span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsMenuOpen(false);
          }}>
          <CloseIcon />
        </button>
      </div>
      <div className="flex h-full flex-col pt-28 pb-8 px-6 overflow-y-scroll">
        <Link onClick={() => setIsMenuOpen(false)} to="/messages">
          <button className="flex py-4 justify-between w-full items-center">
            <div>
              <span className="font-normal text-xl tracking-wide">
                Messages
              </span>
              {true && (
                <div className="relative h-2 w-2 ml-1 -top-2 inline-block bg-red-500 rounded-full" />
              )}
            </div>
            <AngleRight scale={1.6} />
          </button>
        </Link>
        <button
          onClick={() => {
            setIsMenuOpen(false);
            handleSettingsOpen();
          }}
          className="flex py-4 justify-between w-full items-center">
          <div>
            <span className="font-normal text-xl tracking-wide">Settings</span>
          </div>
          <AngleRight scale={1.6} />
        </button>
        <div>
          <button
            onClick={() => {
              setActivePreference((prev) => !prev);
            }}
            className="flex py-4 justify-between w-full items-center outline-none">
            <div>
              <span className="font-normal text-xl tracking-wide">
                Switch From {preference}
              </span>
            </div>
            <span
              className={`${
                activePreference && 'rotate-90'
              } transition-transform`}>
              <AngleRight scale={1.6} />
            </span>
          </button>
          {activePreference && (
            <div className="bg-white p-4 w-full  rounded-xl">
              <ul>
                {Object.keys(preferences)
                  .filter((pref) => pref !== preference)
                  .map((pref) => (
                    <li key={pref} className="mb-2">
                      <Link
                        onClick={() => {
                          setPrefrence(pref);
                          setIsMenuOpen(false);
                        }}
                        to={`/${pref.toLowerCase()}`}
                        className="text-[#828282]">
                        {pref}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <small className="pt-7 pb-4 text-xs uppercase">Navigation</small>
        <div className="flex flex-col py-4 rounded-3xl bg-white shadow-2xl p-6">
          {preferences[preference].map((item) => (
            <NavItem
              key={`${Math.random()}+${Date.now()}`}
              hasDropdown={item.hasDropdown}
              svg={<item.SVG scale={0.255319148936} color="#828282" />}
              dropDownLinks={item.dropdownLinks}
              closeMenuCallback={() => setIsMenuOpen(false)}
              url={item.url}>
              {item.text}
            </NavItem>
          ))}
        </div>
        <Link
          onClick={(e) => {
            localStorage.removeItem('safely_buy_token');
            history.push('/login');
          }}
          to="/login">
          <button className="flex pt-8 w-full items-center">
            <LogOut />
            <div className="pl-3">
              <span className="font-normal text-xl tracking-wide">Logout</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
