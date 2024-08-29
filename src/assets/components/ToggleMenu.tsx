import React, { useState } from "react";

interface ToggleMenuProps {
  children: React.ReactNode;
}

const ToggleMenu: React.FC<ToggleMenuProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Menu Icon (Visible on small screens) */}
      <div className="lg:hidden flex items-center justify-between p-4">
        <div className="text-xl font-bold">futura</div>
        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Children (Header & Category Components) */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:justify-between p-4 bg-white shadow-lg absolute top-full w-full lg:static lg:bg-transparent lg:shadow-none`}
      >
        {children}
      </div>
    </div>
  );
};

export default ToggleMenu;
