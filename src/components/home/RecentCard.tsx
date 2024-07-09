import { FaAngleDown } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const RecentCard = () => {
  return (
    <div className="hidden bg-white w-full md:flex flex-col rounded-[8px] overflow-hidden border border-gray-300">
      <ul className="flex flex-col list-none gap-[12px] p-[10px] pt-[20px] border-b border-gray-300">
        <li className="flex items-center justify-between text-[12px] hover:bg-gray-200">
          <span className="text-black">Recent</span>
          <FaAngleDown className="size-[16px] text-gray-500" />
        </li>
        <li className="flex items-center justify-between text-[12px] hover:bg-gray-200">
          <span className="text-blue-600 font-[600]">Groups</span>
          <FaAngleDown className="size-[16px] text-gray-500" />
        </li>
        <li className="flex items-center justify-between text-[12px] hover:bg-gray-200">
          <span className="text-blue-600 font-[600]">Events</span>
          <LuPlus className="size-[16px] text-gray-500" />
        </li>
        <li className="flex items-center justify-between text-[12px] hover:bg-gray-200">
          <span className="text-blue-600 font-[600]">Followed Hashtags</span>
        </li>
      </ul>
      <Link
        to="/"
        className="flex items-center justify-center text-[14px] text-gray-600 font-[600] p-[10px] hover:bg-gray-200"
      >
        <span>Discover more</span>
      </Link>
    </div>
  );
};

export default RecentCard;
