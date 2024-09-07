import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoReorderFourOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="p-[3em_0] w-[95%] m-[0_auto]">
      <div className="xl:flex xl:items-center xl:justify-around">
        <div className="space-y-3 ml-[1.5em] xl:ml-0">
          <Link to={"/"}>
            <h1 className="cursor-pointer font-bold text-[1.5rem]">futura</h1>
          </Link>
          <div className="flex items-center space-x-20 xl:hidden justify-around">
            <IoReorderFourOutline className="size-7" />
            <div className="bg-[#D9D9D9] items-center gap-3 rounded-2xl w-[50%] flex">
              <div className="p-[.5em]">
                <FaSearch className="size-7" />
              </div>

              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className=" bg-[#D9D9D9] rounded-2xl w-[95%] p-[.5em_0] outline-none"
              />
            </div>{" "}
            <div>
              {" "}
              <IoCartOutline className="size-7" />
            </div>
          </div>
          <div className="flex text-[.6rem] sm:*:w-[15%] justify-center space-x-5 md:space-x-3 xl:hidden  sm:text-[.8rem] md:text-[1.1rem]">
            <div className="flex border-2 border-[#CACACA] rounded-xl p-[.3em] gap-2">
              <FaHeart className="size-7" />
              <button>Favorites</button>
            </div>
            <div className="flex border-2 border-[#CACACA] rounded-xl p-[.3em] gap-2">
              <FaCircleCheck className="size-7" />
              <button>Following</button>
            </div>
            <div className="flex border-2 border-[#CACACA] rounded-xl p-[.3em] gap-2">
              <FaTag className="size-7" />
              <button>Sales</button>
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] items-center gap-3 rounded-2xl w-[50%] hidden xl:flex">
          <div className="p-[.5em]">
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
        <div className="xl:gap-3 *:cursor-pointer hidden xl:flex">
          <FaHeart className="size-7" />
          <Link to={"/cart"}>
            <IoCartOutline className="size-7" />
          </Link>
          <p className="inline-block bg-[#D9D9D9] p-[.3em_1em] rounded-full">
            T
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
