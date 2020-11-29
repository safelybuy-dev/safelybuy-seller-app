import React from "react";
import Logo from "../../../components/Logo";
import {
  ArrowDown,
  ArrowUp,
  Bag,
  Bell,
  BitcoinIcon,
  DeliveryIcon,
  GiftCardIcon,
  Hamburger,
  Tickets,
  UserAvatar,
} from "../../../svg";

const NavItem = ({ color, svg, hasDropdown, children, last }) => (
  <li className={`flex ${!last ? "mr-10" : "mr-0"} items-center text-sm`}>
    <div className={`bg-${color}-400 mr-2 rounded-full inline-block p-2`}>
      {svg}
    </div>
    <span>{children}</span>
    {hasDropdown && (
      <span className="mt-1 ml-2 inline-block">
        <ArrowDown color="#000" />
      </span>
    )}
  </li>
);

const Header = () => {
  return (
    <header className="flex bg-white flex-col px-12 py-6 md:p-6 md:py-3">
      <div className="flex tracking-wide justify-between">
        <Logo color="purple" text="Administrator" />
        <div className="flex items-center">
          <div className="p-4 rounded-xl shadow-xl mr-2">{<Bell />}</div>
          <div className="flex px-4 py-2 rounded-full shadow-xl ml-2 items-center">
            {<UserAvatar />}
            <div className="ml-3 flex flex-col">
              <span className="font-normal text-xs">Kareem Chibuzor</span>
              <span className="uppercase text-gray-400 text-xs">
                Super Admin
              </span>
            </div>
            <div className="ml-4 flex flex-col justify-between">
              <div className="mb-px">
                <ArrowUp />
              </div>
              <div className="mt-px">{<ArrowDown />}</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex items-center ml-4 tracking-wide justify-between mt-6">
        <ul className="flex">
          <NavItem color="lime" hasDropdown svg={<Bag />}>
            Shopping
          </NavItem>
          <NavItem color="green" svg={<DeliveryIcon />}>
            Delivery
          </NavItem>
          <NavItem color="purple" hasDropdown svg={<Tickets />}>
            Tickets
          </NavItem>
          <NavItem color="yellow" hasDropdown svg={<BitcoinIcon />}>
            Bitcoin
          </NavItem>
          <NavItem color="orange" hasDropdown svg={<GiftCardIcon />} last>
            Giftcard
          </NavItem>
        </ul>
        <div className="bg-purple-100 px-2 py-3 rounded-md">
          {<Hamburger />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
