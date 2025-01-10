import Image from "next/image";
import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#15357A] space-y-4 text-white px-20 py-10">
      <Image
        className="w-10 h-4"
        src={"/logo.png"}
        width={100}
        height={100}
        alt="logo"
      />
      <div className="border border-white w-[100%]"></div>
      <div>
        <p className="flex items-center">
          <BiCopyright /> Copyright 2025. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
