import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    // phone nav

    <div>
      <nav className="bg-emerald-800 py-3 px-4 flex  justify-between sm:hidden font-family: 'Open Sans', sans-serif; ">
        <Link
          className="  mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
          to="/"
        >
          🎶Musical
        </Link>
        <a
          className="my-auto"
          href="#"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <div className="rounded-sm bg-white h-1 w-9"></div>
          <div className="rounded-sm bg-white h-1 w-9 my-1"></div>
          <div className="rounded-sm bg-white h-1 w-9"></div>

        </a>
      </nav>

      {showMediaIcons && (<Menu />)}

      {/* pc nav */}

      <nav className="hidden  sm:flex justify-between px-2 py-2 h-14 bg-[#091326]">
        <Link
          className="  mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
          to="/"
        >
          🎶Musical
        </Link>

        <ul className="flex my-auto">
          <Link
            className=" text-black-700 mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-black-700 mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-black-700 mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-black-700 mx-4 text-2xl   text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
