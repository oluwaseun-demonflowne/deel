import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";

const Header = () => {
  return (
    <div className="hidden md:flex justify-between items-center py-3 px-6">
      <div className="flex gap-4 items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/wellspring.jfif"}
            alt="company logo"
            unoptimized
            width={100}
            className="w-10 rounded-full"
            height={100}
          />
          <h1 className="text-xl font-bold">Wellspring</h1>
        </div>
        <div className="border-l h-5"></div>
        <h2 className="text-lg font-medium">Job list</h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <CiSearch className="text-xl" />
          <input
            className="outline-none w-[250px] text-[15px]"
            placeholder="Search by candidates, jobs"
          />
        </div>
        <button>
          <IoMdAddCircle className="text-4xl text-[#2784fe]" />
        </button>
      </div>
    </div>
  );
};

export default Header;
