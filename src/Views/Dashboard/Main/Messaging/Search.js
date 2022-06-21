import React from 'react';
import { SearchIcon } from 'svg';

function Search({ searchText, handleChange }) {
  return (
    <div className="flex justify-between items-center rounded-full w-[85%] px-3 h-[2.813rem] border-2 border-[#8661FF] border-opacity-40 mb-8">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        className="flex-1 mx-3 outline-none bg-transparent placeholder:text-[#8661ff] placeholder:text-opacity-40 h-full"
        placeholder="Search chats"
      />
      <button type="button">
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
