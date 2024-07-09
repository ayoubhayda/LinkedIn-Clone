import { useState } from "react";
import { Avatar } from "../../assets/images";
import { Article, Event, Media } from "../../assets/icons";
import CreateFeed from "./CreateFeed";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ShareBox = () => {
  const [model, setModel] = useState(false);
  console.log(model);

  return (
    <div className="bg-white w-full flex flex-col rounded-[8px] overflow-hidden border border-gray-300">
      <div className="w-full flex items-center gap-[10px] py-[10px] px-[15px]">
        <img
          src={Avatar}
          alt="Avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
        <button
          onClick={() => setModel(true)}
          className="flex flex-1 items-center py-[14px] px-[15px] rounded-[50px] border border-gray-500 outline-none bg-transparent text-[14px] font-[600] text-gray-700 hover:bg-gray-100 transition"
        >
          Start a post, try writing with AI
        </button>
        {/* Create Feed Model */}
        {model && (
          <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-auto bg-black/60 z-[100] flex items-center justify-center">
            <div className="bg-white flex flex-col flex-1 max-w-[700px] h-[550px] rounded-lg border border-gray-300 shadow">
              <section className="w-full flex items-start justify-between p-[20px]">
                <button className="w-fit flex items-center gap-[10px]">
                  <img
                    src={Avatar}
                    alt="avatar"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[18px] font-[600] text-black">
                        Tony Stark
                      </h3>
                      <FaCaretDown className="size-[18px]" />
                    </div>
                    <span className="text-[14px] font-[500] text-gray-700">
                      Post to Anyone
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => setModel(false)}
                  className="w-fit p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <IoMdClose className="size-[25px] text-black" />
                </button>
              </section>
              <CreateFeed />
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-around py-[10px] px-[15px] pb-[15px]">
        <button className="flex items-center gap-[10px]">
          <img src={Media} alt="Media" width={24} height={25} />
          <span className="text-[14px] font-[600] text-black">Media</span>
        </button>
        <button className="flex items-center gap-[10px]">
          <img src={Event} alt="Media" width={24} height={25} />
          <span className="text-[14px] font-[600] text-black">Event</span>
        </button>
        <button className="flex items-center gap-[10px]">
          <img src={Article} alt="Media" width={24} height={25} />
          <span className="text-[14px] font-[600] text-black">
            Write article
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShareBox;
