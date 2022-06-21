import { useState, useEffect } from 'react';
import { ArrowDown } from 'svg';

function OptionsSelector({ preference, options, cb }) {
  const [isOptionOPen, setIsOptionOpen] = useState(false);
  const [current, setCurrent] = useState(preference);
  let timeout = null;

  const handleClick = () => setIsOptionOpen((prev) => !prev);
  const handleFocus = () => {
    clearTimeout(timeout);
  };
  const handleBlur = () => {
    timeout = setTimeout(() => {
      setIsOptionOpen(false);
    });
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);
  return (
    <div
      className="mx-2 hidden md:w-40 relative  md:mx-0 md:flex flex-col"
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex justify-between items-center px-3  py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500  sm:text-sm">
        <span className="ml-3 block text-purple-500 truncate md:ml-0">
          {current}
        </span>
        <span className="ml-3  inset-y-0  flex items-center  pointer-events-none">
          {/* <!-- Heroicon name: selector --> */}
          <ArrowDown scale={2} />
        </span>
      </button>
      {isOptionOPen && (
        <div className="transition  ease-in duration-100 absolute mt-10  w-full rounded-md bg-white shadow-lg z-50">
          <ul className="max-h-56 rounded-md  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option}
                className="text-gray-900 cursor-default  relative  hover:text-white hover:bg-purple-600">
                <button
                  type="button"
                  className="bg-transparent w-full h-full p-3 flex justify-between"
                  onClick={() => {
                    setCurrent(option);
                    cb(option);
                    setIsOptionOpen(false);
                  }}>
                  <span
                    className={`${
                      current === option ? 'font-semibold' : 'font-normal'
                    }  block font-normal truncate`}>
                    {option}
                  </span>
                  {current === option && (
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OptionsSelector;
