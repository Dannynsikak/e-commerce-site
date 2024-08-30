import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { items } from "../data/discover";
import { FaStar } from "react-icons/fa";

const Discover = () => {
  return (
    <div className="mt-[1.5em] mb-[6em]">
      <div>
        <div className="flex items-center space-x-3 mb-[1em]">
          <h1 className="text-[1.3rem] font-bold">Discover new brands</h1>
          <div className="inline-block rounded-2xl bg-[#D9D9D9]">
            <MdNavigateNext className="size-6" />
          </div>
        </div>
        <div>
          <div className="flex *:flex-grow-0 *:flex-shrink-0 overflow-x-auto space-x-4">
            {items.map((item, id) => (
              <div key={id} className="space-y-2">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="inline-block max-w-[100%]"
                />{" "}
                <div className="font-normal text-[1rem]">
                  <p>{item.name}</p>
                  <span className="*:inline-block space-x-2">
                    <span>{item.rating}</span>
                    <span>
                      <FaStar />
                    </span>
                    <span>{item.price}</span>
                  </span>
                </div>
                <button className="bg-[#000000] text-white p-[.5em_3em] rounded-xl">
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
