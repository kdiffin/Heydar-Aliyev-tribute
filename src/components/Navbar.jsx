import React, { useState } from "react";
import { FaBars, FaAlignRight } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "experience",
    },

    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between px-4 items-center w-full h-20 -mb-10 text-white  bg-black">
      <div>
        <h1 className="text-4xl ml-2">Heydər Əliyev</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200"
            >
              {link.link}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden text-gray-500"
      >
        {nav ? <FaAlignRight size={25} /> : <FaBars size={25} />}
      </div>

      {nav ? (
        <ul className="flex flex-col justify-center items-center absolute top-0  left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="p-5 text-4xl cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200 border-solid border-1 border-b--500"
              >
                {link.link}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
