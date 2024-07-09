import { Link } from "react-router-dom";
import {
  Business,
  Home as HomeIcon,
  JobAd,
  Kebab,
  Message,
  Network,
  Notification,
} from "../../assets/icons";
import { Avatar } from "../../assets/images";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { DropdownProfile } from "../home";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menu, SetMenu] = useState(false);
  const [search, SetSearch] = useState(false);
  return (
    <header className="w-full flex items-center justify-center px-[24px] py-[10px] md:py-[5px] bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between gap-6 rlative">
        <section className="flex items-center gap-6 lg:gap-[10px]">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.svg" alt="Linkedin" width={34} height={34} />
          </Link>
          {/* Search Box */}
          <div className="hidden lg:flex flex-1 items-center gap-[10px] max-w-[280px] h-[34px] rounded-[4px] bg-[#EEF3F8] px-[16px]">
            <FaSearch className="size-[18px]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full bg-transparent border-none outline-none"
            />
          </div>
          <button
            onClick={() => SetSearch(!search)}
            className="navLink w-fit h-fit bg-transparent border-none outline-none lg:hidden"
          >
            <IoSearchSharp className="size-[24px] text-gray-500" />
            <span className="navText">Search</span>
            {/* Search Model */}
            {search && (
              <div className="absolute z-[100] bg-white w-full h-full top-0 left-0 flex items-center gap-[10px] px-[24px]">
                <Link to="/">
                  <img src="/logo.svg" alt="Linkedin" width={34} height={34} />
                </Link>
                {/* Search Box */}
                <div className="flex flex-1 items-center gap-[10px] h-[34px] rounded-[4px] bg-[#EEF3F8] px-[16px] border-2 border-blue-400">
                  <FaSearch className="size-[18px]" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search"
                    className="w-full h-full bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            )}
          </button>
        </section>
        {/* Menu */}
        <nav className="flex items-center justify-between gap-6">
          <Link to="/" className="navLink">
            <img src={HomeIcon} alt="Home" width={24} height={24} />
            <span className="navText relative text-black">
              Home{" "}
              <div className=" absolute w-[60px] h-[2px] bg-black -bottom-[5px] -left-[14px]" />
            </span>
          </Link>
          <Link to="/" className="navLink">
            <img src={Network} alt="My Network" width={24} height={24} />
            <span className="navText">My Network</span>
          </Link>
          <Link to="/" className="navLink">
            <img src={JobAd} alt="Jobs" width={24} height={24} />
            <span className="navText">Jobs</span>
          </Link>
          <Link to="/" className="navLink">
            <img src={Message} alt="Messaging" width={24} height={24} />
            <span className="navText">Messaging</span>
          </Link>
          <Link to="/" className="navLink">
            <img
              src={Notification}
              alt="Notifications"
              width={24}
              height={24}
            />
            <span className="navText">Notifications</span>
          </Link>
          <button
            onClick={() => setToggle(!toggle)}
            className="navLink relative"
          >
            <img
              src={Avatar}
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
            <div className="navText items-center gap-[4px]">
              <span>Me</span>
              <FaCaretDown className="size-3" />
            </div>
            {/* Dropdown Profile Card */}
            {toggle && (
              <div className="w-[290px] absolute right-[-10px] top-[45px] md:top-[55px]">
                <DropdownProfile />
              </div>
            )}
          </button>
          <div className="hidden sm:flex items-center gap-6 border-l border-gray-400">
            <div />
            <button className="navLink">
              <img src={Business} alt="For Business" width={24} height={24} />

              <div className="navText items-center gap-[4px]">
                <span>For Business</span>
                <FaCaretDown className="size-3" />
              </div>
            </button>
            <Link
              to="/"
              className="text-[12px] max-w-[108px] text-center underline text-[#915907]"
            >
              Get hired faster with Premium
            </Link>
          </div>
          <button
            onClick={() => SetMenu(!menu)}
            className="navLink relative sm:hidden"
          >
            <img src={Kebab} alt="Search" width={24} height={24} />
            {menu && (
              <div className="w-[200px] bg-white py-[10px] px-[15px] absolute right-[-10px] top-[45px] md:top-[55px] rounded-[8px] border border-gray-300 shadow flex items-center justify-between gap-[20px]">
                <button>
                  <img
                    src={Business}
                    alt="For Business"
                    width={24}
                    height={24}
                  />
                </button>
                <Link
                  to="/"
                  className="text-[12px] w-[108px] text-center underline text-[#915907]"
                >
                  Get hired faster with Premium
                </Link>
              </div>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
