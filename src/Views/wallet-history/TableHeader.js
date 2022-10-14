import React from 'react';
import { AngleRight, SearchIcon } from 'svg';
import { useComponentVisible } from 'hooks';
import ItemsPerPage from './ItemsPerPage';

export default function TableHeader({
  searchTerm,
  handleSearchTerm,
  currentPage,
  setCurrentPage,
  lastPage,
  itemsPerPage,
  setItemsPerPage,
  options,
}) {
  const {
    ref: itemsRef,
    isComponentVisible: isItemsVisible,
    setIsComponentVisible: setIsItemVisible,
  } = useComponentVisible(false);

  const handlePagination = (number) => {
    if (
      (number === 1 && currentPage < lastPage) ||
      (number === -1 && currentPage > 1)
    ) {
      setCurrentPage((prev) => prev + number);
    }
  };

  return (
    <div className="flex justify-between w-[90%] mx-auto md:w-full flex-col md:flex-row md:flex-wrap">
      {/* Search box */}
      <div className="flex md:w-full md:flex-col md:flex-wrap">
        <div className="w-full flex justify-between border-2 border-purple-100 items-center mb-4 px-6 md:px-12 py-2 rounded-full">
          <input
            className=" text-sm md:text-base w-full focus:outline-none mr-2"
            type="text"
            placeholder="Search by amount, comment, reference..."
            value={searchTerm}
            onChange={handleSearchTerm}
          />
          <span className="">
            <SearchIcon color="#8661FF" />
          </span>
        </div>
        {/* Filter Items per page page
        <SortBy
          selectRef={sortRef}
          isVisible={isSortVisible}
          setIsVisible={setIsSortVisible}
        /> */}
      </div>
      <div className="flex  items-center w-full md:border-t md:border-b md:mt-4 md:py-4 justify-between">
        <ItemsPerPage
          selectRef={itemsRef}
          isVisible={isItemsVisible}
          setIsVisible={setIsItemVisible}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          options={options}
        />
        <div className="flex text-sm md:text-base items-center md:w-1/2 md:justify-center">
          Page
          <input
            className="inline-block py-1 w-8 text-center mx-1 border rounded-md"
            value={currentPage}
            onChange={(e) => {
              const { value } = e.target;
              if (value > lastPage || value < 1) {
                return null;
              }
              setCurrentPage(Number(value));
            }}
          />
          of {lastPage}
          <div className="flex ml-3">
            <button
              className="mr-3 transform rotate-180 cursor-pointer"
              onClick={() => handlePagination(-1)}>
              <AngleRight scale={1.5} />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => handlePagination(1)}>
              <AngleRight scale={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
