import { Link } from "react-router-dom";
import { Avatar, Banner } from "../../assets/images";
import { Premium, Save } from "../../assets/icons";

const DropdownProfile = () => {
  return (
    <div className="bg-white w-full flex flex-col items-start text-left text-black rounded-[8px] rounded-tr-none overflow-hidden border border-gray-300 shadow-sm">
      <div className="flex flex-col gap-[10px] p-[10px]">
        <div className="flex items-start justify-start gap-[10px]">
          <img src={Avatar} alt="Avatar" className="rounded-full size-[68px]" />
          <div className="flex flex-col">
            <h3 className=" text-[16px] font-[600] ">Tony Stark</h3>
            <p className="text-[14px] font-normal ">
              Full Stack Web Developer | MERN Stack | Next.js | Laravel |
              Creating Innovative, Scalable Web Solutions
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="flex flex-1 items-center justify-center text-[14px] font-[600] text-blue-600 px-[15px] py-[2px] rounded-[25px] border border-blue-600 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-700 transition-all"
        >
          View Profile
        </Link>
      </div>
      <div className="flex flex-col gap-[6px] p-[10px] border-y border-gray-300">
        <h3 className="text-[16px] font-[600]">Account</h3>
        <Link
          to="/"
          className="flex items-start gap-1 text-[16px] font-[600] text-gray-600 hover:text-blue-600 transition-all"
        >
          <img src={Premium} alt="Premium" width={16} height={16} />
          <span className="mt-[-2.5px]">Try 1 month of Premium for MAD0</span>
        </Link>
        <Link
          to="/"
          className="text-[14px] font-normal text-gray-500 hover:underline"
        >
          Settings & Privacy
        </Link>
        <Link
          to="/"
          className="text-[14px] font-normal text-gray-500 hover:underline"
        >
          Help
        </Link>
        <Link
          to="/"
          className="text-[14px] font-normal text-gray-500 hover:underline"
        >
          Language
        </Link>
      </div>
      <div className="w-full flex flex-col gap-[6px] p-[10px] border-b border-gray-300">
        <h3 className="text-[16px] font-[600]">Manage</h3>
        <Link
          to="/"
          className="text-[14px] font-normal text-gray-500 hover:underline"
        >
          Posts & Activity
        </Link>
        <Link
          to="/"
          className="text-[14px] font-normal text-gray-500 hover:underline"
        >
          Job Posting Account
        </Link>
      </div>
      <div className="flex items-center p-[10px]">
        <Link
          to="/"
          className="text-[14px] font-normal text-gray-500 hover:underline"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default DropdownProfile;
