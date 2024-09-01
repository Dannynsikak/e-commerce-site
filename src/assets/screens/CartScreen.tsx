import React from "react";
import { AlsoLike, Footer, Header, Main } from "../components/index";

const CartScreen: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
        <Main />
        <div className="w-[95%] m-[0_auto] mb-[2em]">
          <AlsoLike />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CartScreen;
