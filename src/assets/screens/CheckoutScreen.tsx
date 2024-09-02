import React from "react";
import { Footer, Header, UserDetails } from "../components/index";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <UserDetails />
      <div className="mt-[8em]">
        <Footer />
      </div>
    </div>
  );
};

export default About;
