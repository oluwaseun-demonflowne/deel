import Image from "next/image";
import React from "react";

const Everything = () => {
  return (
    <section className="bg-[#00AC6B] px-20  text-white ">
      <div className="flex items-center ">
        <div className="w-[50%] space-y-4">
          <h1 className="text-5xl font-black">
            Everything you need to scale a global team
          </h1>
          <p className="font-light text-sm">
            Deel helps thousands of companies expand globally with unmatched
            speed and flexibility. It&apos;s global hiring, HR and payroll in
            just one system.
          </p>
          <button className="bg-[#2c71f0] w-40 rounded-full h-10">
            Get Started
          </button>
        </div>
        <div className="w-[50%]">
          <Image
            src={"/desktop_interface.png"}
            width={100}
            unoptimized
            className="w-full "
            height={100}
            alt="a picture of a desktop interface"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="">
          Used by <span className="font-bold">15,000+ businesses</span> from small startups to
          household names
        </p>
      </div>
    </section>
  );
};

export default Everything;
