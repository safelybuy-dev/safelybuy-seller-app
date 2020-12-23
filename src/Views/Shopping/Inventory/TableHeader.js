import React from "react";
import { AngleRight, SearchIcon } from "../../../svg";
import SortBy from "./SortBy";
import ItemsPerPage from "./ItemsPerPage";
import { useComponentVisible } from "../../../hooks";

export default function TableHeader({ active, setActive }) {
  const {
    ref: sortRef,
    isComponentVisible: isSortVisible,
    setIsComponentVisible: setIsSortVisible,
  } = useComponentVisible(false);
  const {
    ref: itemsRef,
    isComponentVisible: isItemsVisible,
    setIsComponentVisible: setIsItemVisible,
  } = useComponentVisible(false);
  return (
    <div className="flex justify-between">
      {/* Search box */}
      <div className="flex">
        <div className="relative w-96">
          <input
            className="border-2 border-purple-100 w-full focus:outline-none mb-4 px-12 py-2 rounded-full"
            type="search"
            placeholder="Search by SKU, Product Name..."
          />
          <span className="absolute top-3 left-4">
            <SearchIcon color="#8661FF" />
          </span>
        </div>
        {/* Filter Items per page page */}
        <SortBy
          selectRef={sortRef}
          isVisible={isSortVisible}
          setIsVisible={setIsSortVisible}
        />
      </div>
      <div className="flex items-center">
        <ItemsPerPage
          selectRef={itemsRef}
          isVisible={isItemsVisible}
          setIsVisible={setIsItemVisible}
        />
        <div className="flex items-center">
          Page
          <input
            className="inline-block py-1 w-8 text-center mx-1 border rounded-md"
            defaultValue={1}
          />
          of 5
          <div className="flex ml-3">
            <span className="mr-3 transform rotate-180">
              <AngleRight scale={1.5} />
            </span>
            <span className="">
              <AngleRight scale={1.5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
