import React from "react";
import { UserAvatar } from "../../../svg";

export default function Highlight() {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="rounded-3xl bg-purple-500 p-10 text-white mr-10">
      <p className="text-xs opacity-70">
        {new Intl.DateTimeFormat("en-GB", options).format(date)}
      </p>
      <h3 className="text-3xl pb-8">Seller of the month</h3>
      <div className="flex flex-col bg-purple-700 rounded-2xl p-4 divide-y divide-purple-500">
        <div className="flex pb-6 items-center">
          <span className="inline-block p-2">{<UserAvatar />}</span>
          <div className="flex flex-col ml-1">
            <p className="mb-1">Kareem Chibuzor</p>
            <div className="text-xs bg-purple-800 py-1 px-2 rounded-full inline-block">
              kareeemchi@gmail.com
            </div>
          </div>
        </div>
        <div className="py-6">
          <span className="block text-7xl tracking-widest font-extrabold">
            300
          </span>
          <span className="text-lg opacity-70">Items sold this month</span>
        </div>
        <div className="py-4">
          <span className="block text-3xl tracking-widest font-semibold">
            500,590<span className="text-lg">NGN</span>
          </span>
          <div className="text-lg mt-2 opacity-70">Total sales this month</div>
        </div>
      </div>
    </div>
  );
}
