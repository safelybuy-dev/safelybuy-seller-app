import React from 'react';
import { MoreSVG } from 'svg';
import { useComponentVisible } from 'hooks';

function MoreButton({ links }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div className="relative mr-3" ref={ref}>
      <button
        className="bg-morebg-100 p-3 flex justify-center items-center rounded-sm"
        onClick={(e) => {
          setIsComponentVisible(!isComponentVisible);
          e.stopPropagation();
        }}>
        <MoreSVG />
      </button>
      {isComponentVisible && (
        <ul className="absolute list-none  bg-white rounded shadow-lg mt-2 w-40 z-[100]">
          {links.map((option, index) => (
            <li
              key={index}
              className={` ${
                option.text === 'Delete' && 'text-red-500'
              } py-2 px-3 border-b border-gray-100 cursor-pointer hover:bg-slate-50`}
              onClick={option.clickHandler}>
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoreButton;
