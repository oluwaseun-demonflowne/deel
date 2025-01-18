import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <Image src={"/wellspring.jfif"} alt="company logo" unoptimized width={100} className="w-10 rounded-full" height={100} />
        <h1 className="text-xl font-bold">Wellspring</h1>
      </div>
    </div>
  );
};

export default Header;
