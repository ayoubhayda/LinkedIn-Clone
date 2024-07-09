import { Link } from "react-router-dom";
import { Avatar, Banner } from "../../assets/images";
import { Premium, Save } from "../../assets/icons";

const ProfileCard = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center text-center relative rounded-[8px] overflow-hidden border border-gray-300">
      <div className="relative w-full h-[54px]">
        <img
          src={Banner}
          alt="Banner"
          className="absolute w-full h-full top-0 right-0 left-0 bottom-0 object-cover"
        />
      </div>
      <div className="absolute w-fit rounded-full border-2 border-white top-[15px]">
        <img src={Avatar} alt="Avatar" className="rounded-full size-[68px]" />
      </div>
      <div className="flex flex-col gap-[5px] items-center text-center mt-[44px] p-[10px]">
        <h3 className=" text-[16px] font-[600]">Tony Starck</h3>
        <p className="text-[12px] font-normal text-gray-500">
          Full Stack Web Developer | MERN Stack | Next.js | Laravel | Creating
          Innovative, Scalable Web Solutions
        </p>
      </div>
      <div className="hidden md:flex flex-col w-full">
        <div className="flex flex-col gap-[10px] p-[10px] border-y border-gray-300">
          <Link
            to="/"
            className="flex items-center justify-between text-[12px] font-[600] hover:bg-gray-200"
          >
            <span className="text-gray-500">Profile viewers</span>
            <span className="text-blue-600">125</span>
          </Link>
          <Link
            to="/"
            className="flex items-center justify-between text-[12px] font-[600] hover:bg-gray-200"
          >
            <span className="text-gray-500">Post impressions</span>
            <span className="text-blue-600">957</span>
          </Link>
        </div>
        <Link
          to="/"
          className="flex flex-col p-[10px] border-b border-gray-300 hover:bg-gray-200"
        >
          <span className="text-[12px] font-normal text-gray-500">
            Boost your career with exclusive tools
          </span>
          <p className="flex items-center gap-1 text-black hover:text-blue-600">
            <img src={Premium} alt="Premium" width={16} height={16} />
            <span className="text-[12px] font-[600]">Try Premium for MAD0</span>
          </p>
        </Link>
        <Link to="/" className="flex items-center p-[10px] hover:bg-gray-200">
          <p className="flex items-center gap-2">
            <img src={Save} alt="Saved Items" width={16} height={16} />
            <span className="text-[12px] font-[600] text-black">
              Saved Items
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
