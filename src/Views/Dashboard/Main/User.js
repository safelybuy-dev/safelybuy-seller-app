import React, { useContext } from 'react';
import { ArrowDown, ArrowUp, AngleRight, UserAvatar } from 'svg';
import { ContextUser } from 'context';
import { buttonStyles } from './Header';
// import { UserMenuMobile } from './UserMenuMobile';

function User({
  userIsVisible,
  setUserIsVisible,
  userRef,
  handleSettingsOpen,
}) {
  const [state] = useContext(ContextUser);
  const dropdownItems = [
    {
      text: 'Messages',
      hasNotification: true,
      hasIcon: true,
      icon: <AngleRight />,
      clickHandler() {},
    },
    {
      text: 'Settings',
      clickHandler() {
        handleSettingsOpen();
      },
    },
    {
      text: 'Logout',
      clickHandler() {},
      color: 'red',
    },
  ];
  return (
    <div className="relative">
      <div className="relative ml-4">
        <button
          onClick={(e) => {
            if (userIsVisible) setUserIsVisible(false);
            else setUserIsVisible(true);
            e.stopPropagation();
          }}
          className={`flex py-2 px-4 rounded-full shadow-xl ml-2 items-center ${buttonStyles(
            'purple'
          )}`}>
          <UserAvatar scale={1.5} />
          <div className="ml-3 md:flex flex-col hidden">
            <span className="font-normal capitalize text-xs">
              {state?.user &&
                state?.user?.firstname &&
                `${state?.user?.firstname} ${state?.user?.lastname}`}
            </span>
            <span className="uppercase text-gray-400 text-xs">
              {state.user.role}
            </span>
          </div>
          <div className="ml-4 md:flex flex-col justify-between hidden">
            <div className="mb-px">
              <ArrowUp />
            </div>
            <div className="mt-px">
              <ArrowDown />
            </div>
          </div>
        </button>
        {userIsVisible && (
          <div
            ref={userRef}
            className="absolute bg-white w-full h-[9rem] p-4 -mt-4 rounded-[0.625rem] border-2 border-[#F7F7F7]">
            <ul className="h-full w-full flex flex-col justify-between">
              {dropdownItems.map((item) => (
                <li
                  key={item.text}
                  className={` cursor-pointer relative ${
                    item.color && 'text-' + item.color + '-500'
                  } `}>
                  <button
                    className="flex justify-between items-center w-full"
                    onClick={item.clickHandler}>
                    <span>{item.text}</span>
                    {item.hasIcon && <span>{item.icon}</span>}
                    {item.hasNotification && (
                      <span className="absolute bg-[#EB5757] h-[0.375rem] w-[0.375rem] top-1 left-[4.3rem] rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
