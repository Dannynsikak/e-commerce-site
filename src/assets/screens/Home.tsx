import React from "react";
import {
  Category,
  Header,
  OrderUpdates,
  RecentlyViewed,
  AlsoLike,
  Discover,
  Footer,
} from "../components/index";

const Home = () => {
  return (
    <div className="">
      <div>
        {" "}
        <Header />
        <Category />
      </div>
      <div className="flex justify-end">
        <div className="w-[95%] ">
          <OrderUpdates />
          <RecentlyViewed />
          <AlsoLike />
          <Discover />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
