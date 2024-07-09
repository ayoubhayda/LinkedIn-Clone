import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const FeedFilter = () => {
  const [filter, setFilter] = useState(false);
  return (
    <button
      onClick={() => setFilter(!filter)}
      className="w-full flex items-center justify-between gap-[8px] relative"
    >
      <hr className="flex flex-1 h-[1.5px] bg-gray-400" />
      <div className="flex items-center gap-1">
        <span className="text-[12px] text-gray-600">
          Sort by: <strong className="text-black">Top</strong>
        </span>
        <FaCaretDown className="size-4" />
      </div>

      {filter && (
        <div className="w-[200px] bg-white py-1 absolute right-0 top-[25px]  rounded-[8px] border border-gray-300 shadow flex flex-col">
          <button className="w-full flex py-2 px-[15px] text-[14px] font-[600] text-black hover:bg-gray-200 border-l-2 border-green-800">
            Top
          </button>
          <button className="w-full flex py-2 px-[15px] text-[14px] font-[600] text-black hover:bg-gray-200">
            Recent
          </button>
        </div>
      )}
    </button>
  );
};

export default FeedFilter;
