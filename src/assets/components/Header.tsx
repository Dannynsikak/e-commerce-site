import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <nav className="p-[3em_0] w-[100%] m-[0_auto]">
      <div className="flex items-center justify-around">
        <div>
          <h1 className="cursor-pointer font-bold text-[1.5rem]">futura</h1>
        </div>
        <div className="bg-[#D9D9D9] flex items-center gap-3 rounded-2xl w-[50%]">
          <div className="">
            <FaSearch className="size-7" />
          </div>

          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className=" bg-[#D9D9D9] rounded-2xl w-[95%] p-[.9em_0] outline-none"
          />
        </div>
        <div className="flex gap-3 *:cursor-pointer">
          <FaHeart className="size-7" />
          <IoCartOutline className="size-7" />
          <p className="inline-block bg-[#D9D9D9] p-[.3em_1em] rounded-full">
            T
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
