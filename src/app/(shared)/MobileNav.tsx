"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { links } from "./Navbar";

const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const timeline1 = gsap.timeline({
    // repeat: -1,
    // repeatDelay: 1,
    // yoyo: true,
  });
  const timeline2 = gsap.timeline({
    // repeat: -1,
    // repeatDelay: 1,
    // yoyo: true,
  });

  // useEffect(() => {
  //   setOpenDrawer(false);
  //   if (getCurrent.split("/")[1] === "") {
  //     setGetId(-1);
  //     return;
  //   }
  //   linkArr.map((i, index) => {
  //     if (i.label === getCurrent.split("/")[1]) {
  //       setGetId(index);
  //     }
  //   });
  // }, [getCurrent]);

  useGSAP(() => {
    if (openDrawer) {
      gsap.to("#drawer", {
        duration: 0.5,
        x: 0,
        ease: "power1.in",
        opacity: 1,
      });

      timeline1.to("#firsticon", {
        duration: 0.1,
        y: 4,
        ease: "power1.in",
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        rotate: -45,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        y: -4,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        rotate: 45,
        ease: "power1.in",
      });
    } else {
      gsap.to("#drawer", {
        ease: "power1.in",
        x: -900,
        duration: 0.1,
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        rotate: 0,
        ease: "power1.in",
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        y: 0,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        rotate: 0,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        y: 0,
        ease: "power1.in",
      });
    }
  }, [openDrawer]);
  return (
    <div className="bg-[#00AC6B] z-[99]   top-0 w-[100%] lg:hidden shadow-lg flex px-4 items-center justify-between h-20 ">
      <Link href="/">
        <Image
          className="w-10 h-4"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div
        // id="divnote"
        onClick={() => {
          setOpenDrawer((prev) => !prev);
        }}
        className="flex  cursor-pointer gap-1 flex-col  "
      >
        <p id="firsticon" className="bg-white w-7  h-1"></p>
        <p id="secondicon" className="bg-white w-7  h-1"></p>
      </div>
      <div
        id="drawer"
        className={`pt-10 flex ${
          openDrawer ? "" : "opacity-0"
        } text-slate-400 font-brush left-0 pl-4 z-[99] flex-col top-[79px] h-screen w-fdivl backdrop-blur-lg  absolute text-xl w-[100%] font-black gap-5`}
      >
        {links.map((i) => (
          <div
            onClick={() => {
              setOpenDrawer(false);
            }}
            className=""
            key={i}
          >
            <Link
              className={`hover:text-white text-[#3c3b3a]  `}
              href={`#${i}`}
              key={i}
            >
              {i}
            </Link>
          </div>
        ))}
        <div className=" text-[#3c3b3a] space-y-5  font-black font-brush  items-center">
          <Link className="" href="">Log in</Link>
          <Link
            className="border h-12 border-[#3c3b3a] w-48 flex items-center justify-center rounded-full "
            href=""
          >
            Request a demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
