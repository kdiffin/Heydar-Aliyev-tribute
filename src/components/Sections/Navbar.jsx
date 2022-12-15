import React, { useState } from "react";
import { useEffect } from "react";
import { FaBars, FaAlignRight, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "#əsas",
      name: "əsas",
    },

    {
      id: 2,
      link: "#həyatı",
      name: "həyatı",
    },

    {
      id: 3,
      link: "#mükafatları",
      name: "mükafatları",
    },

    {
      id: 5,
      link: "#abidələri",
      name: "Abidələri",
    },
    {
      id: 6,
      link: "#təhsilə-dəyəri",
      name: "Təhsilə Dəyəri",
    },
    {
      id: 4,
      link: "#müdrik-İfadələri",
      name: "Müdrik İfadələri",
    },
  ];

  return (
    <div
      className={` ${props.routAbout ? "mb-20 " : ""} flex    pt-5 w-full h-12`}
    >
      <div>
        <Link
          to="/"
          className="text-4xl text-center flex w-full justify-center items-center   sm:ml-10 navOverflow:mr-auto  "
          state={props.lightMode}
        >
          Azərbaycanın ümumilli lideri
        </Link>
      </div>

      <ul className="hidden navOverflow:flex   ml-auto items-center">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200"
            >
              {!props.routAbout ? (
                <a href={link.link}>{link.name}</a>
              ) : (
                <Link to="/" state={props.lightMode}>
                  {" "}
                  {link.name}{" "}
                </Link>
              )}
            </li>
          );
        })}

        <div
          onClick={() => props.setLightMode(!props.lightMode)}
          className={`p-2  rounded-lg  mr-4 border-2 cursor-pointer ml-2 ${
            props.routAbout && "hidden"
          } active:scale-90 border-gray-500 text-gray-500`}
        >
          {" "}
          {props.lightMode ? <FaMoon /> : <FaSun />}
        </div>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 ml-auto pt-6 navOverflow:hidden text-gray-500"
      >
        {nav ? <FaAlignRight size={25} /> : <FaBars size={25} />}
      </div>
      {nav ? (
        <ul
          className="flex flex-col justify-center 
      items-center absolute top-0 dark:from-white dark:to-gray-300  left-0 w-full overflow-y-hidden h-full bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="p-10 text-4xl cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200 border-solid border-1 border-b--500"
              >
                {!props.routAbout ? (
                  <a href={link.link} onClick={() => setNav(false)}>
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to="/"
                    state={props.lightMode}
                    onClick={() => setNav(false)}
                  >
                    {" "}
                    {link.name}{" "}
                  </Link>
                )}
              </li>
            );
          })}
          <div
            onClick={() => props.setLightMode(!props.lightMode)}
            className="p-3  rounded-lg  mr-4 border-2 cursor-pointer active:scale-90 border-gray-500 text-gray-500"
          >
            {" "}
            {props.lightMode ? <FaMoon size={23} /> : <FaSun size={23} />}
          </div>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
