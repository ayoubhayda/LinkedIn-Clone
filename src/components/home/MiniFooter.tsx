import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Linkedin } from "../../assets/icons";

const MiniFooter = () => {
  return (
    <div className="w-full px-[30px] py-[16px] flex flex-col gap-[15px] items-center">
      <div className="flex flex-wrap items-center justify-center text-center gap-[10px]">
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500 hover:underline"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500  hover:underline"
        >
          Accessibility
        </Link>
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500  hover:underline"
        >
          Help Center
        </Link>
        <button className="text-[12px] font-[400] text-gray-500 flex items-center gap-1">
          <span>Privacy & Terms</span>
          <FaCaretDown className="size-[12px]" />
        </button>
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500  hover:underline"
        >
          Ad Choices
        </Link>
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500  hover:underline"
        >
          Advertising
        </Link>
        <button className="text-[12px] font-[400] text-gray-500 flex items-center gap-1">
          <span>Business Services</span>
          <FaCaretDown className="size-[12px]" />
        </button>
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500  hover:underline"
        >
          Get the LinkedIn app
        </Link>
        <Link
          to="/"
          className="text-[12px] font-[400] text-gray-500  hover:underline"
        >
          More
        </Link>
      </div>
      <div className="flex items-center gap-1 justify-center">
        <img src={Linkedin} alt="Linkedin" height={14} />
        <span className="text-[12px] font-[500] text-black">
          LinkedIn Corporation © 2024
        </span>
      </div>
    </div>
  );
};

export default MiniFooter;
