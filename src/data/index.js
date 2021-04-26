import { Bag, reportSVG, orders, HomeSVG, InventorySVG } from "../svg";

export const navMenuItems = [
  {
    color: "white",
    hasDropdown: false,
    SVG: HomeSVG,
    text: "Home",
    url: "/",
    type: ['Shopping', 'Tickets']
  },
  {
    color: "black",
    hasDropdown: true,
    SVG: InventorySVG,
    dropdownLinks: [
      { text: "Manage Inventory", url: "/inventory" },
      { text: "Add a product", url: "/inventory/add" },
    ],
    text: "Inventory",
  },
  {
    color: "white",
    hasDropdown: false,
    SVG: orders,
    text: "Orders",
    url: "/orders",
  },
  {
    color: "white",
    hasDropdown: false,
    SVG: reportSVG,
    text: "Reports",
  },
];

export const mainMenuItems = [
  { url: "/users", text: "Administrator Management" },
  { url: "/customers", text: "Customer Management" },
  { url: "/contents", text: "Content Management" },
  { url: "/discounts", text: "Discount Promotion Management" },
  { url: "/sellers", text: "Sellers Management" },
  { url: "/mails", text: "Email Marketing" },
  { url: "/referrals", text: "Referral Management" },
  { url: "/payments", text: "Payment Request" },
];
