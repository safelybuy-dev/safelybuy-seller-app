import React from "react";
import { UserAvatar } from "../../../svg";

export const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const optionsAlt = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export default function Highlight() {
  const date = new Date();

  return (
    <div className="rounded-2xl bg-purple-500 md:text-center py-4 px-6 pb-8 text-white mr-8 md:mr-0">
      <p className="text-xs opacity-70">
        {new Intl.DateTimeFormat("en-GB", options).format(date)}
      </p>
      <h3 className="text-2xl pb-4">Seller of the month</h3>
      <div className="flex flex-col bg-purple-700 rounded-2xl p-3 divide-y divide-purple-500">
        <div className="flex pb-4 items-center md:justify-center">
          <span className="inline-block p-1">{<UserAvatar scale={1.7} />}</span>
          <div className="flex flex-col">
            <p className="mb-1 text">Kareem Chibuzor</p>
            <div className="text-xs bg-purple-800 py-px px-2 rounded-full inline-block">
              kareeemchi@gmail.com
            </div>
          </div>
        </div>
        <div className="py-6">
          <span className="block text-7xl tracking-widest font-extrabold">
            300
          </span>
          <span className="text opacity-60">Tickets sold this month</span>
        </div>
        <div className="py-5">
          <span className="block text-2xl tracking-widest font-semibold">
            500,590<span className="text-lg">NGN</span>
          </span>
          <div className="text mt-2 opacity-60">Total sales this month</div>
        </div>
      </div>
    </div>
  );
}
