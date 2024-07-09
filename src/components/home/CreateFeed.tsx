import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BsImage } from "react-icons/bs";
import { LuBadgeInfo } from "react-icons/lu";
import { PiPlusBold } from "react-icons/pi";
import { FaRegFaceSmile } from "react-icons/fa6";

const CreateFeed = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <section className="w-full flex items-center px-[20px] pt-[20px]">
        <textarea
          cols={50}
          rows={10}
          autoFocus
          placeholder="What do you want to talk about?"
          className="w-full border-none outline-none resize-none text-black text-[18px] font-normal"
        ></textarea>
      </section>
      <div className="w-full">
        <section className="w-full flex items-center px-[20px] pt-[10px]">
          <button className="w-fit p-2 rounded-full hover:bg-gray-200">
            <FaRegFaceSmile className="size-[20px] text-gray-600" />
          </button>
        </section>
        <section className="w-full flex items-center px-[20px] py-[10px] gap-[15px]">
          <button className="w-fit p-2 rounded-full hover:bg-gray-200">
            <BsImage className="size-[20px] text-gray-600" />
          </button>
          <button className="w-fit p-2 rounded-full hover:bg-gray-200">
            <FaRegCalendarAlt className="size-[20px] text-gray-600" />
          </button>
          <button className="w-fit p-2 rounded-full hover:bg-gray-200">
            <LuBadgeInfo className="size-[20px] text-gray-600" />
          </button>
          <button className="w-fit p-2 rounded-full hover:bg-gray-200">
            <PiPlusBold className="size-[20px] text-gray-600" />
          </button>
        </section>
        <section className="w-full flex items-center justify-end px-[20px] py-[10px] border-t border-gray-300">
          <div className="w-fit flex items-center gap-1">
            <span className="w-fit p-2 rounded-full hover:bg-gray-200">
              <IoMdTime className="size-[27px] text-gray-800" />
            </span>
            <button className="text-[16px] font-[600] text-white py-1 px-5 rounded-[25px] bg-blue-600 hover:bg-blue-700">
              Post
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateFeed;
