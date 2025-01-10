import Image from "next/image";
import React from "react";

const Platform = () => {
  return (
    <section
      id="Platform"
      className="flex flex-col md:flex-row items-center pt-20 pb-10"
    >
      <div className="space-y-4 md:w-[50%] ">
        <h1 className="text-[#15357A] text-4xl font-bold">
          Deel’s the only HR platform with everything you need, for everyone
        </h1>
        <p>
          We&apos;re making global team management so easy, businesses
          don&apos;t need to think twice. Whether you want to hire contractors
          and employees worldwide without opening legal entities, streamline HR
          for your global team, or consolidate payroll for everyone —Deel does
          it all (while keeping you compliant).
        </p>
        <button className="bg-[#2c71f0] text-white w-40 rounded-full h-10">
          Request a demo
        </button>
      </div>
      <div className="md:w-[50%]">
        <Image
          src={"/platform.png"}
          width={100}
          unoptimized
          className="w-full "
          height={100}
          alt="a picture of a desktop interface"
        />
      </div>
    </section>
  );
};

export default Platform;
