import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { items } from "../data/orderUpdatesImgs";

const OrderUpdates: React.FC = () => {
  return (
    <div className="w-[90%] m-[0_auto]">
      <div>
        <div className="flex items-center space-x-3 mb-[1em]">
          <h1 className="text-[1.3rem] font-bold">Order Updates</h1>
          <div className="inline-block rounded-2xl bg-[#D9D9D9]">
            <MdNavigateNext className="size-6" />
          </div>
        </div>
        <div className="flex *:flex-grow-0 *:flex-shrink-0 overflow-x-auto space-x-4">
          {items.map((item, id) => (
            <div key={id} className="flex  items-center space-x-2">
              <img
                src={item.src}
                alt={item.alt}
                className="inline-block max-w-[100%]"
              />{" "}
              <div className="">
                <h3 className="text-[1.1rem] font-semibold">{item.title}</h3>
                <p className="text-[.8rem] text-gray-500">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderUpdates;
