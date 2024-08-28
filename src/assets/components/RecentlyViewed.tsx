import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { items } from "../data/recentlyViewed";
import { Link } from "react-router-dom";
// import CartScreen from "../screens/CartScreen";

const RecentlyViewed: React.FC = () => {
  return (
    <div className="mt-[2em]">
      <div className="">
        <div className="flex items-center space-x-3 mb-[1em]">
          <h1 className="text-[1.3rem] font-bold">Recently viewed</h1>
          <div className="inline-block rounded-2xl bg-[#D9D9D9]">
            <MdNavigateNext className="size-6" />
          </div>
        </div>{" "}
        <div className="flex  items-center *:flex-grow-0 *:flex-shrink-0 overflow-x-auto space-x-4">
          {items.map((item, id) => (
            <div key={id} className="space-y-4 ">
              <img
                src={item.src}
                alt={item.alt}
                className="inline-block max-w-[100%]"
              />{" "}
              <div className="text-white">
                <Link
                  to="/cart"
                  className="bg-[#020202] p-[.5em_1.5em] rounded-lg"
                >
                  {item.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
