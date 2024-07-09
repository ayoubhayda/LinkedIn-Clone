import { BsExclamationSquareFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { Avatar3, Avatar4, Avatar5 } from "../../assets/images";
import { FaExclamationCircle } from "react-icons/fa";

const Recommended = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-[13px] px-[12px] py-[13px] rounded-[8px] overflow-hidden border border-gray-300">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-[16px] font-[600] text-black">Add to your feed</h3>
        <FaExclamationCircle className="size-[14px] text-gray-800" />
      </div>
      <div className="flex items-start gap-[10px]">
        <img
          src={Avatar3}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-[14px] font-[600] text-black">Emploi Portal</h4>
          <p className="text-[12px] text-gray-600">Company • Human Resources</p>
          <button className="w-fit flex items-center gap-2 px-[15px] py-[5px] rounded-[32px] border border-gray-800 mt-[6px]">
            <LuPlus className="size-[16px] text-black" />
            <span className="text-[16px] font-[600] text-gray-700 ">
              Follow
            </span>
          </button>
        </div>
      </div>

      {/* Profile 2 */}

      <div className="flex items-start gap-[10px]">
        <img
          src={Avatar4}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-[14px] font-[600] text-black">
            IT Road Consulting
          </h4>
          <p className="text-[12px] text-gray-600">
            IT Services and IT Consulting
          </p>
          <button className="w-fit flex items-center gap-2 px-[15px] py-[5px] rounded-[32px] border border-gray-800 mt-[6px]">
            <LuPlus className="size-[16px] text-black" />
            <span className="text-[16px] font-[600] text-gray-700 ">
              Follow
            </span>
          </button>
        </div>
      </div>

      {/* Profile 3 */}

      <div className="flex items-start gap-[10px]">
        <img
          src={Avatar5}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-[14px] font-[600] text-black">I.T.Solutions</h4>
          <p className="text-[12px] text-gray-600">
            IT Services and IT Consulting
          </p>
          <button className="w-fit flex items-center gap-2 px-[15px] py-[5px] rounded-[32px] border border-gray-800 mt-[6px]">
            <LuPlus className="size-[16px] text-black" />
            <span className="text-[16px] font-[600] text-gray-700 ">
              Follow
            </span>
          </button>
        </div>
      </div>

      <button className="flex items-center gap-1">
        <span className="text-[14px] font-[600] text-gray-800">
          View all recommendations
        </span>
        <FaArrowRightLong className="size-[16px] text-gray-800" />
      </button>
    </div>
  );
};

export default Recommended;
