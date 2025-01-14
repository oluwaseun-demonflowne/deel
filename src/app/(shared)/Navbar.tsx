"use client";
import { useAuthModalState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const links = [
  "Everything",
  "Platform",
  "Trust",
  "Why Choose us",
  "Get Started",
];

const Navbar = () => {
  const { setShowLoginModal } = useAuthModalState();
  return (
    <nav
      id="Everything"
      className="bg-[#00AC6B] hidden md:flex px-20 font-brush  justify-between w-[100%] items-center text-white h-16"
    >
      <div className="flex gap-10 text-sm tracking-wide items-center">
        <Image
          className="w-10 h-4"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
        {links.map((i) => (
          <Link key={i} href={`#${i}`}>
            {i}
          </Link>
        ))}
      </div>
      <div className="flex gap-6 font-brush text-sm items-center">
        <button onClick={() => setShowLoginModal(true)}>Log in</button>
        <button className="border w-36 flex items-center justify-center rounded-full h-7">
          Request a demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
