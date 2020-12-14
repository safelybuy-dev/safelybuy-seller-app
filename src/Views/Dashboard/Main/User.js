import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp, AngleRight, UserAvatar } from "../../../svg";
import { buttonStyles } from "./Header";
import { UserMenuMobile } from "./UserMenuMobile";

const User = ({ userIsVisible, setUserIsVisible, userRef }) => (
  <div className="relative">
    <div className="relative">
      <button
        onClick={(e) => {
          if (userIsVisible) setUserIsVisible(false);
          else setUserIsVisible(true);
          e.stopPropagation();
        }}
        className={`flex p-1 pr-4 md:pr-1 rounded-full shadow-xl ml-2 items-center ${buttonStyles(
          "purple"
        )}`}
      >
        {<UserAvatar scale={1.5} />}
        <div className="ml-3 flex flex-col md:hidden">
          <span className="font-normal text-xs">Kareem Chibuzor</span>
          <span className="uppercase text-gray-400 text-xs">Super Admin</span>
        </div>
        <div className="ml-4 flex flex-col justify-between md:hidden">
          <div className="mb-px">
            <ArrowUp />
          </div>
          <div className="mt-px">{<ArrowDown />}</div>
        </div>
      </button>
      <div ref={userRef}>
        {userIsVisible && (
          <UserMenuMobile
            isMenuOpen={userIsVisible}
            setIsMenuOpen={setUserIsVisible}
          />
        )}
        {userIsVisible && (
          <ul
            className={`absolute w-40 mt-2 bg-white z-10 rounded-xl border-gray-100 border-2 md:invisible`}
          >
            {[
              {
                url: "/admin/messages",
                text: "Messages",
                unread: true,
                svg: <AngleRight />,
              },
              { url: "#", text: "Settings" },
              { url: "#", text: "Logout", color: "red" },
            ].map((e) => (
              <Link key={Date.now() + Math.random()} to={e.url}>
                <li
                  className={`py-2 px-4 rounded-xl hover:bg-purple-100 flex items-center justify-between`}
                >
                  <div>
                    <span className={`${e.color && `text-${e.color}-500`}`}>
                      {e.text}
                    </span>
                    {e.unread && (
                      <div className="relative h-2 w-2 ml-1 -top-2 inline-block bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  {e.svg && e.svg}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default User;
