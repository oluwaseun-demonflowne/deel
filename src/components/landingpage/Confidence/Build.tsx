import Image from "next/image";
import React from "react";

const Build = () => {
  return (
    <section id="Trust" className="px-4 md:px-20 pt-20 space-y-8 pb-20 bg-[#fff4e0] text-center">
      <div className="px-4 md:px-48 space-y-4">
        <h1 className="text-[#15357A] text-4xl font-bold">
          Build confidence in your compliance with the #1 Global HR platform
        </h1>
        <p>
          Whether you have a domestic team or a growing worldwide workforce,
          Deel HR is custom-built for every worker, in any country, so you can
          compliantly manage everyone in one place.
        </p>
      </div>
      <div className="md:px-32">
        <Image
          src={"/action.png"}
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

export default Build;
