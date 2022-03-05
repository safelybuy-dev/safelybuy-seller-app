import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MoreSVG } from "svg";

function MoreButton({ id, handleDelete }) {
  const history = useHistory();
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="relative mr-3 items-center ">
      <button
        className="bg-morebg-100 p-3 flex justify-center items-center rounded-sm"
        onClick={() => setDropDown(!dropDown)}
      >
        <MoreSVG />
      </button>
      {dropDown && (
        <ul className="absolute list-none rounded shadow-lg mt-2 w-40 z-[100]">
          {[
            {
              text: "View Menu",
              clickHandler: () => history.push(`/food/restaurant/${id}`),
            },
            {
              text: "View Orders",
              clickHandler: () => history.push(`/food/orders`),
            },
            {
              text: "Delete",
              clickHandler: () => handleDelete(id),
            },
          ].map((option, index) => (
            <li
              key={index}
              className={` ${
                option.text === "Delete" && "text-red-500"
              } py-2 px-3 border-b border-gray-100 cursor-pointer hover:bg-slate-50`}
              onClick={option.clickHandler}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoreButton;
