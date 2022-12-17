import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="text-gray-400  dark:border-t-gray-300  flex sm:flex-row flex-col py-2 sm:py-5 flex-wrap text-wrap px-2 sm:px-5 border-t-2 border-gray-600  ">
      <h1 className=" w-full sm:w-[500px] text-center sm:text-left  text-xl mr-auto mb-4 sm:mb-0">
        Bu sayt 132-134 nömrəli təhsil kompleksinin 9b şagirdi,{" "}
        <span className="font-semibold">Davud İbrahim</span> tərəfindən
        hazırlanmışdır.
      </h1>

      <div className="font-semibold flex   sm:flex-col text-[20px]">
        <div className="flex  ml-4 items-center">
          <p>Github :</p>{" "}
          <a
            href="https://github.com/diffim"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 "
          >
            <FaGithub size={30} />
          </a>
        </div>

        <div className="flex ml-auto mr-4 items-center">
          <p>Mail:</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ibra.davud@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3"
          >
            <SiGmail size={23} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
