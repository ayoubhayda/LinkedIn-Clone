import React from "react";
import { Kebab, LinkedinGold } from "../../assets/icons";
import { Avatar } from "../../assets/images";

const Ad = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center gap-[15px] p-[20px] rounded-[8px] overflow-hidden border border-gray-300">
      <div className="flex items-center w-fit gap-2 absolute top-1 right-2">
        <span className="text-[12px] text-black">Ad</span>
        <button>
          <img src={Kebab} alt="icon" width={12} height={12} />
        </button>
      </div>
      <p className="text-[12px] font-[400] text-gray-500 text-center">
        Tony, unlock your full potential with LinkedIn Premium
      </p>
      <div className="flex items-center justify-center gap-[20px]">
        <img
          src={Avatar}
          alt="avatar"
          width={68}
          height={68}
          className="rounded-full"
        />
        <img
          src={LinkedinGold}
          alt="Linkedin Premium"
          width={68}
          height={68}
          className="rounded-md"
        />
      </div>
      <p className="text-[16px] font-[500] text-black text-center">
        See who's viewed your profile in the last 90 days
      </p>
      <button className="w-fit text-[16px] font-[700] text-blue-600 flex items-center px-[15px] py-[5px] rounded-[32px] border border-blue-600">
        Try for free
      </button>
    </div>
  );
};

export default Ad;
