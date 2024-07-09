import React from "react";
import { Comment, Kebab, Like, Send } from "../../assets/icons";
import { TbRepeat } from "react-icons/tb";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaHandHoldingHeart, FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Post } from "../../constants";

const FeedCard: React.FC<Post> = ({
  avatar,
  user,
  followers,
  date,
  description,
  link,
  image,
  likes,
  comments,
  reposts,
}) => {
  return (
    <div className="bg-white w-full flex flex-col rounded-[8px] overflow-hidden border border-gray-300">
      <div className="w-full flex items-start gap-[10px] p-[15px]">
        <img
          src={avatar}
          alt={`${user} avatar`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-1 flex-col gap-[-10px]">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-[16px] font-[600] text-black">{user}</h3>
            <button>
              <img src={Kebab} alt="More" width={24} height={24} />
            </button>
          </div>
          <span className="text-[12px] text-gray-600">
            {followers} followers
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[12px] text-gray-600">{date} •</span>
            <FaEarthAmericas className="size-[12px] text-gray-600" />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col p-[15px] pt-0">
        <p className="text-[16px] font-normal text-black">{description}</p>
        <a href={link} className="text-[16px] font-normal text-blue-600">
          {link}
        </a>
      </div>
      <div className="w-full h-fit">
        <img src={image} alt="Post" className="w-full" />
      </div>
      <div className="w-full px-[15px]">
        <div className="flex items-center justify-between py-[7px] border-b border-gray-300">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <span className="flex items-center justify-center size-[14px] bg-blue-500 rounded-full border border-white">
                <BiSolidLike className="size-2 text-white" />
              </span>
              <span className="flex items-center justify-center size-[14px] bg-red-500 rounded-full border border-white ml-[-4px]">
                <FaHeart className="size-2 text-white" />
              </span>
              <span className="flex items-center justify-center size-[14px] bg-green-700 rounded-full border border-white ml-[-4px]">
                <FaHandHoldingHeart className="size-2 text-white" />
              </span>
            </div>
            <span className="text-[12px] text-gray-500">{likes}</span>
          </div>
          <span className="text-[12px] text-gray-500">
            {comments} comments • {reposts} reposts
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-around p-[15px]">
        <button className="flex items-center gap-[5px]">
          <img src={Like} alt="Like" width={24} height={24} />
          <span className="text-[14px] font-[600] text-gray-500">Like</span>
        </button>
        <button className="flex items-center gap-[5px]">
          <img src={Comment} alt="Comment" width={24} height={24} />
          <span className="text-[14px] font-[600] text-gray-500">Comment</span>
        </button>
        <button className="flex items-center gap-[5px]">
          <TbRepeat className="size-[24px] text-[#A3A3A3]" />
          <span className="text-[14px] font-[600] text-gray-500">Repost</span>
        </button>
        <button className="flex items-center gap-[5px]">
          <img src={Send} alt="Send" width={24} height={24} />
          <span className="text-[14px] font-[600] text-gray-500">Send</span>
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
