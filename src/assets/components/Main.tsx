import React from "react";
import { Frame41 } from "../imgs/index";
import Rating from "../components/Rating";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import SimilarProducts from "./SimilarProducts";

const Main: React.FC = () => {
  return (
    <main className="w-[95%] m-[0_auto] space-y-20">
      <section className="md:flex md:*:w-[90%] md:gap-5">
        <div>
          <h3 className="font-medium text-[1.5rem]">My Basket</h3>
          <img
            src={Frame41}
            alt="a shoe"
            className="inline-block w-[421px] h-[444px] max-w-[100%]"
          />
          <div>
            <h3 className="font-medium text-[1.3rem]">Description</h3>
            <p>
              It has a diamond stitch pattern and it is soft and light on the
              skin for easy styling and comfort. Long-lasting and resistant to
              peeling, scratchiness. Adds to your everyday style
            </p>
          </div>
        </div>
        <article className="md:flex md:*:flex-1 md:gap-5">
          <div className="space-y-4">
            <h3 className="font-normal text-[1.3rem]">Reviews (10)</h3>
            <div className="border-2 border-gray-400 rounded-lg p-[.2em]">
              <p>
                I love these heels so much. Even though I am not a fan of heels,
                because of the comfort, these ones seem to differ. It’s so
                comfortable on the feet and steady on the ground. Great buy!
              </p>
              <div>
                <Rating />
              </div>
              <p className="text-[#2C2A2A] font-normal text-[1rem]">
                Lindsay . Yesterday
              </p>
            </div>
            <div className="border-2 border-gray-400 rounded-lg p-[.2em]">
              <p>
                Wore them to an event and got lots of compliments. Solid buy!
              </p>
              <div>
                <Rating />
              </div>
              <p className="text-[#2C2A2A] font-normal text-[1rem]">
                Lindsay . Yesterday
              </p>
            </div>
            <div className="border-2 border-gray-400 rounded-lg p-[.2em]">
              <p>Perfect gift to gift your partner for valentine. So durable</p>
              <div>
                <Rating />
              </div>
              <p className="text-[#2C2A2A] font-normal text-[1rem]">
                Lindsay . Yesterday
              </p>
            </div>
            <div className="border-2 border-gray-400 rounded-lg p-[.2em]">
              <p>Comfortable to wear and a solid material</p>
              <div>
                <Rating />
              </div>
              <p className="text-[#2C2A2A] font-normal text-[1rem]">
                Lindsay . Yesterday
              </p>
            </div>{" "}
            <button className="w-[100%] p-[.5em] bg-[#D9D9D9] rounded-xl">
              See more
            </button>
          </div>
          <div>
            <h3 className="font-normal text-[1.5rem]">
              Mora's Leather Sandals
            </h3>
            <span className="flex items-center">
              {" "}
              <Rating /> (146)
            </span>
            <div className="*:block">
              <label
                htmlFor="address"
                className="text-[#702AB7] font-medium text-[1rem]"
              >
                Add address
              </label>
              <input
                id="address"
                type="text"
                className="border-b-2 border-b-[#6e6a6a] outline-none w-full"
              />
              <div className="flex *:items-center">
                <label htmlFor="size" className="font-medium text-[1rem]">
                  Size
                </label>
                <div className="flex float-end *:flex-1 space-x-3">
                  <p>XS</p>{" "}
                  <div className="">
                    <FaChevronUp />
                    <FaChevronDown />
                  </div>
                </div>
              </div>
              <input
                id="size"
                type="text"
                className="w-full border-b-2 border-b-[#6e6a6a] outline-none"
              />
              <div className="flex *:items-center">
                <label htmlFor="color" className="font-medium text-[1rem]">
                  Color
                </label>
                <div className="flex float-end *:flex-1 space-x-3">
                  <p className="whitespace-nowrap">Light grey</p>{" "}
                  <div className="">
                    <FaChevronUp />
                    <FaChevronDown />
                  </div>
                </div>
              </div>
              <input
                id="color"
                type="text"
                className="w-full border-b-2 border-b-[#6e6a6a] outline-none"
              />
              <div className="flex *:items-center">
                <label htmlFor="quantity" className="font-medium text-[1rem]">
                  Quantity
                </label>
                <div className="p-[.3em_1em] float-end bg-slate-300 rounded-3xl">
                  <div className="flex items-center space-x-1">
                    <IoMdAdd />
                    <p className="whitespace-nowrap">2</p> <FiMinus />
                  </div>
                </div>
              </div>
              <input
                id="quantity"
                type="text"
                className="w-full border-b-2 border-b-[#6e6a6a] outline-none"
              />{" "}
              <div className="*:block space-y-3">
                <p className="font-bold text-[1rem]">NGN40,000</p>
                <Link
                  to={"/checkout"}
                  className="text-center w-[70%] sm:w-[100%] bg-black rounded-xl text-white p-[.5em]"
                >
                  Checkout
                </Link>
                <Link to={"/"}>
                  <button className="w-[70%] sm:w-[100%] bg-black rounded-xl text-white p-[.5em]">
                    Continue shopping
                  </button>
                </Link>
                <button className="w-[70%] sm:w-[100%] bg-black rounded-xl text-white p-[.5em]">
                  Refund policy
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
      <div className="">
        <div>
          <SimilarProducts />
        </div>
      </div>
    </main>
  );
};

export default Main;
