import { Bag, BitcoinIcon, DeliveryIcon, GiftCardIcon, Tickets } from "../svg";

export const navMenuItems = [
  {
    color: "lime",
    hasDropdown: true,
    SVG: Bag,
    dropdownLinks: [
      { text: "Manage Inventory", url: "#" },
      { text: "Order Mannagement", url: "#" },
    ],
    text: "Shopping",
  },
  {
    color: "green",
    hasDropdown: false,
    SVG: DeliveryIcon,
    text: "Delivery",
  },
  {
    color: "purple",
    hasDropdown: true,
    SVG: Tickets,
    dropdownLinks: [
      { text: "Manage Inventory", url: "#" },
      { text: "Tickets Mannagement", url: "#" },
    ],
    text: "Tickets",
  },
  {
    color: "yellow",
    hasDropdown: true,
    SVG: BitcoinIcon,
    dropdownLinks: [
      { text: "Bitcoin History", url: "#" },
      { text: "Set Bitcoin Prices", url: "#" },
    ],
    text: "Bitcoin",
  },
  {
    color: "orange",
    hasDropdown: true,
    SVG: GiftCardIcon,
    dropdownLinks: [
      { text: "Gift Card History", url: "#" },
      { text: "Set Giftcard Prices", url: "#" },
    ],
    text: "Gift Card",
  },
];

export const mainMenuItems = [
  { url: "#", text: "Administrator Management" },
  { url: "#", text: "Customer Management" },
  { url: "#", text: "Content Management" },
  { url: "#", text: "Discount Promotion Management" },
  { url: "#", text: "Seller's Management" },
  { url: "#", text: "Email Marketing" },
  { url: "#", text: "Referral Management" },
  { url: "#", text: "Payment Request" },
];
