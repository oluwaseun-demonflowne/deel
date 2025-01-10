import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = ["Platform", "Use Cases", "Why Deel", "Pricing", "Resouces"];

const Navbar = () => {
  return (
    <nav className="bg-[#00AC6B] flex px-20 font-brush  justify-between w-[100%] items-center text-white h-16">
      <div className="flex gap-10 text-sm tracking-wide items-center">
        <Image
          className="w-10 h-4"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
        {links.map((i) => (
          <Link key={i} href="">
            {i}
          </Link>
        ))}
      </div>
      <div className="flex gap-6 font-brush text-sm items-center">
        <Link href="">Log in</Link>
        <Link className="border w-36 flex items-center justify-center rounded-full h-7" href="">Request a demo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
