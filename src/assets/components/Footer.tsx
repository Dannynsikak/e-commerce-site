import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { items } from "../data/paymentMethods";

const Footer: React.FC = () => {
  return (
    <div className="text-[1.3rem] bg-black text-white ">
      <div className="w-[90%] m-[0_auto] p-[2em_0]">
        <div className=" md:flex md:*:flex-1">
          <div className="sm:flex sm:gap-3 ">
            <ul>
              <li className="font-medium">Side links</li>
              <li>Home</li>
              <li>Products</li>
              <li>Support</li>
              <li>Account</li>
            </ul>
            <ul>
              <li className="font-medium">Shopping information</li>
              <li>Product categories</li>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Gift Cards</li>
            </ul>
            <span>
              <h4>Newsletter</h4>
              <p>Stay up to date with us to get the recent latest updates</p>
              <span>Your email address</span>
              <button>Sign Up</button>
            </span>
          </div>
          <div className="md:flex md:gap-4">
            <div className="">
              <p className="font-bold">Join us on</p>
              <div className="flex *:flex-1 md:space-x-3">
                <FaFacebook className="size-7" />
                <FaTwitter className="size-7" />
                <FaYoutube className="size-7" />
                <FaInstagram className="size-7" />
              </div>
            </div>
            <div>
              <p className="font-bold">Payment methods Partners</p>
              <div>
                {" "}
                <div className="flex gap-3">
                  {items.map((item, id) => (
                    <div key={id} className="">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="inline-block max-w-[100%]"
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
