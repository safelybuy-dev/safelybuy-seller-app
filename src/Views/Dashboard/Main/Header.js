import React from "react";
import Logo from "../../../components/Logo";
import { useComponentVisible } from "../../../hooks";
import {
  ArrowDown,
  ArrowUp,
  AngleRight,
  Bag,
  Bell,
  BitcoinIcon,
  DeliveryIcon,
  GiftCardIcon,
  Hamburger,
  Tickets,
  UserAvatar,
  ArrowRight,
  Invoice,
  Archive,
} from "../../../svg";

const buttonStyles = (color) =>
  `hover:bg-${color}-100 transform active:shadow-sm active:bg-${color}-200 hover:scale-105 active:scale-100 hover:shadow-xl focus:outline-none`;

const NavItem = ({
  color,
  svg,
  hasDropdown,
  children,
  last,
  dropDownLinks,
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  return (
    <div className="relative">
      <button
        onClick={(e) => {
          if (isComponentVisible) setIsComponentVisible(false);
          else setIsComponentVisible(true);
          e.stopPropagation();
        }}
        className={`flex ${
          !last ? "mr-14" : "mr-0"
        } items-center focus:outline-none cursor-pointer hover:bg-${color}-100 transform active:shadow-sm active:bg-${color}-200 hover:scale-105 active:scale-100 hover:shadow-xl rounded-full pr-4 text-sm`}
      >
        <div className={`bg-${color}-400 mr-2 rounded-full inline-block p-2`}>
          {svg}
        </div>
        <span>{children}</span>
        {hasDropdown && (
          <span
            className={`mt-px ml-2 inline-block transform duration-200 ${
              isComponentVisible ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDown className="bg-red-500" color="#000" />
          </span>
        )}
      </button>
      <div ref={ref}>
        {hasDropdown && isComponentVisible && (
          <ul
            className={`absolute header-dropdown mt-2 bg-white w-60 z-10 rounded-xl border-gray-100 border-2`}
          >
            {dropDownLinks.map((e) => (
              <a key={Date.now() + Math.random()} href={e.url}>
                <li className={`py-2 px-4 rounded-xl hover:bg-${color}-100`}>
                  {e.text}
                </li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Header = () => {
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
    <header className="flex bg-white flex-col px-12 py-6 md:p-6 md:py-3">
      <div className="flex tracking-wide justify-between">
        <div className="flex md:hidden">
          <Logo color="purple" text="Administrator" />
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-2 mb-1">
            <Hamburger scale={1} color="black" />
          </div>
          <Logo color="purple" text="Admin" allowSub />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={(e) => {
                if (notIsVisible) setNotIsVisible(false);
                else setNotIsVisible(true);
                e.stopPropagation();
              }}
              className={`transform p-3 focus:outline-none md:p-2 rounded-xl md:rounded-lg shadow-xl md:shadow-lg mr-2 md:mr-1 hover:bg-purple-100 transform active:shadow-sm active:bg-purple-200 hover:scale-105 active:scale-100 hover:shadow-xl`}
            >
              <Bell />
            </button>
            <div ref={notRef}>
              {notIsVisible && (
                <div
                  className={`absolute w-80 -right-24 mt-2 bg-white z-10 rounded-xl border-gray-100 border-2`}
                >
                  <div className="flex justify-between p-4 border-gray-100 border-b-2">
                    <span className="text-purple-500">Notifications</span>
                    <div className="relative inline-block px-2 py-px text-sm bg-purple-500 text-white rounded-full">
                      3
                    </div>
                  </div>
                  <ul>
                    {[
                      {
                        url: "#",
                        text: "Order #1233434434 has been delivered.",
                        svg: <Invoice />,
                        color: "orange",
                      },
                      {
                        url: "#",
                        text: "Order #1233434434 has been delivered.",
                        svg: <Invoice />,
                        color: "orange",
                      },
                      {
                        url: "#",
                        text: "One or more products are out of stock.",
                        svg: <Archive />,
                        color: "blue",
                      },
                    ].map((e) => (
                      <a key={Date.now() + Math.random()} href={e.url}>
                        <li
                          className={`py-2 px-4 hover:bg-purple-100 flex items-center justify-between`}
                        >
                          <div>
                            <div className={`flex text-gray-800`}>
                              <div>
                                <div
                                  className={`bg-${e.color}-100 mr-3 mt-2 rounded-full p-2`}
                                >
                                  {e.svg}
                                </div>
                              </div>
                              <div className="flex flex-col">
                                {e.text}
                                <span className="text-xs text-gray-300">
                                  a min. ago
                                </span>
                              </div>
                            </div>
                          </div>
                          <AngleRight />
                        </li>
                      </a>
                    ))}
                  </ul>
                  <button className="align-center rounded-b-xl hover:bg-purple-100 w-full p-4 border-gray-100 border-t-2">
                    <span className="text-purple-500 inline-block mr-4">
                      See more
                    </span>
                    <ArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <button
              onClick={(e) => {
                if (userIsVisible) setUserIsVisible(false);
                else setUserIsVisible(true);
                e.stopPropagation();
              }}
              className={`flex p-1  pr-4 rounded-full shadow-xl ml-2 md:ml-0 items-center ${buttonStyles(
                "purple"
              )}`}
            >
              {<UserAvatar scale={1.5} />}
              <div className="ml-3 flex flex-col md:hidden">
                <span className="font-normal text-xs">Kareem Chibuzor</span>
                <span className="uppercase text-gray-400 text-xs">
                  Super Admin
                </span>
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
                <ul
                  className={`absolute w-40 mt-2 bg-white z-10 rounded-xl border-gray-100 border-2`}
                >
                  {[
                    {
                      url: "#",
                      text: "Messages",
                      unread: true,
                      svg: <AngleRight />,
                    },
                    { url: "#", text: "Settings" },
                    { url: "#", text: "Logout", color: "red" },
                  ].map((e) => (
                    <a key={Date.now() + Math.random()} href={e.url}>
                      <li
                        className={`py-2 px-4 rounded-xl hover:bg-purple-100 flex items-center justify-between`}
                      >
                        <div>
                          <span
                            className={`${e.color && `text-${e.color}-500`}`}
                          >
                            {e.text}
                          </span>
                          {e.unread && (
                            <div className="relative h-2 w-2 ml-1 -top-2 inline-block bg-red-500 rounded-full"></div>
                          )}
                        </div>
                        {e.svg && e.svg}
                      </li>
                    </a>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <nav className="flex items-center ml-4 tracking-wide justify-between mt-6 md:hidden">
        <ul className="flex">
          <NavItem
            color="lime"
            hasDropdown
            svg={<Bag scale={0.255319148936} color="white" />}
            dropDownLinks={[
              { text: "Manage Inventory", url: "#" },
              { text: "Order Mannagement", url: "#" },
            ]}
          >
            Shopping
          </NavItem>
          <NavItem
            color="green"
            svg={<DeliveryIcon scale={0.255319148936} color="white" />}
          >
            Delivery
          </NavItem>
          <NavItem
            color="purple"
            hasDropdown
            svg={<Tickets scale={0.255319148936} color={"white"} />}
            dropDownLinks={[
              { text: "Manage Inventory", url: "#" },
              { text: "Tickets Mannagement", url: "#" },
            ]}
          >
            Tickets
          </NavItem>
          <NavItem
            color="yellow"
            hasDropdown
            svg={<BitcoinIcon scale={0.255319148936} color={"white"} />}
            dropDownLinks={[
              { text: "Bitcoin History", url: "#" },
              { text: "Set Bitcoin Prices", url: "#" },
            ]}
          >
            Bitcoin
          </NavItem>
          <NavItem
            color="orange"
            hasDropdown
            svg={<GiftCardIcon scale={0.255319148936} color={"white"} />}
            dropDownLinks={[
              { text: "Gift Card History", url: "#" },
              { text: "Set Giftcard Prices", url: "#" },
            ]}
          >
            Giftcard
          </NavItem>
        </ul>
        <div className="relative">
          <button
            onClick={(e) => {
              if (barIsVisible) setBarIsVisible(false);
              else setBarIsVisible(true);
              e.stopPropagation();
            }}
            className={`bg-purple-100 block px-2 py-3 rounded-md ${buttonStyles()}`}
          >
            {<Hamburger />}
          </button>
          <div ref={barRef}>
            {barIsVisible && (
              <ul
                className={`absolute right-0 w-72 mt-2 bg-white z-10 rounded-xl border-gray-100 border-2`}
              >
                {[
                  { url: "#", text: "Administrator Management" },
                  { url: "#", text: "Customer Management" },
                  { url: "#", text: "Content Management" },
                  { url: "#", text: "Discount Promotion Management" },
                  { url: "#", text: "Seller's Management" },
                  { url: "#", text: "Email Marketing" },
                  { url: "#", text: "Referral Management" },
                  { url: "#", text: "Payment Request" },
                ].map((e) => (
                  <a key={Date.now() + Math.random()} href={e.url}>
                    <li className={`py-2 px-4 rounded-xl hover:bg-purple-100`}>
                      {e.text}
                    </li>
                  </a>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
