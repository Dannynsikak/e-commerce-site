import React from "react";
import {
  Category,
  Header,
  OrderUpdates,
  RecentlyViewed,
  AlsoLike,
} from "../components/index";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <OrderUpdates />
      <RecentlyViewed />
      <AlsoLike />
    </div>
  );
};

export default Home;
