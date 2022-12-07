import React, { useState } from "react";
import { FaBars, FaAlignRight } from "react-icons/fa";

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
      id: 4,
      link: "#nəsihətləri",
      name: "nəsihətləri",
    },
  ];
  // <div
  //   className={`flex snap-none ${
  //     props.routAbout ? "-mt-20 mb-12" : "-mb-4"
  //   }  justify-between px-4  items-center w-full h-20  text-white  bg-black`}
  // >
  //   <div>
  //     <h1 className="text-4xl ml-2">Azərbaycanın ümumilli lideri</h1>
  //   </div>

  //   <ul className="hidden md:flex">
  //     {links.map((link) => {
  //       return (
  //         <li
  //           key={link.id}
  //           className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200"
  //         >
  //           <a href={link.link}>{link.name}</a>
  //         </li>
  //       );
  //     })}
  //   </ul>
  //   <div
  //     onClick={() => setNav(!nav)}
  //     className="cursor-pointer pr-4 z-10 md:hidden text-gray-500"
  //   >
  //     {nav ? <FaAlignRight size={25} /> : <FaBars size={25} />}
  //   </div>

  //   {nav ? (
  //     <ul
  //       className="flex flex-col justify-center
  //     items-center absolute top-0  left-0 w-full overflow-y-hidden h-full bg-gradient-to-b from-black to-gray-800 text-gray-500"
  //     >
  //       {links.map((link) => {
  //         return (
  //           <li
  //             key={link.id}
  //             className="p-10 text-4xl cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200 border-solid border-1 border-b--500"
  //           >
  //             <a href={link.link} onClick={() => setNav(false)}>
  //               {link.link}
  //             </a>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   ) : (
  //     <></>
  //   )}
  // </div>

  return (
    <div className="fixed top-0 z-1 flex bg-black/70  items-center justify-center w-full h-12">
      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200"
            >
              <a href={link.link}>{link.name}</a>
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
        <ul
          className="flex flex-col justify-center 
      items-center absolute top-0  left-0 w-full overflow-y-hidden h-full bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="p-10 text-4xl cursor-pointer capitalize text-gray-500 hover:scale-110 duration-200 border-solid border-1 border-b--500"
              >
                <a href={link.link} onClick={() => setNav(false)}>
                  {link.link}
                </a>
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
