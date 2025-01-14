"use client"
import Image from "next/image";
import React from "react";
// import Brand from "./Brand";
import { shimmer, toBase64 } from "../../Shimmer";
import { useAuthModalState } from "@/store";

const Everything = () => {
  const {setShowRegisterModal} = useAuthModalState()
  return (
    <section id="" className="bg-[#00AC6B] py-10  text-white ">
      <div className="flex md:flex-row flex-col items-center px-4 md:px-20 ">
        <div className="md:w-[50%] space-y-4">
          <h1 className="text-5xl font-black">
            Everything you need to scale a global team
          </h1>
          <p className="font-light text-sm">
            Deel helps thousands of companies expand globally with unmatched
            speed and flexibility. It&apos;s global hiring, HR and payroll in
            just one system.
          </p>
          <button onClick={() => setShowRegisterModal(true)} className="bg-[#2c71f0] w-40 rounded-full h-10">
            Get Started
          </button>
        </div>
        <div className="md:w-[50%] max-md:h-[350px]">
          <Image
            src={"/desktop_interface.png"}
            width={100}
            unoptimized
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            placeholder="blur"
            className="w-full max-h-[400px]"
            height={100}
            alt="a picture of a desktop interface"
          />
        </div>
      </div>
      <div className="text-center space-y-10">
        <p className="px-4">
          Used by <span className="font-bold">15,000+ businesses</span> from
          small startups to household names
        </p>
        {/* <Brand /> */}
      </div>
    </section>
  );
};

export default Everything;
