import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <section
      id="Get Started"
      className="bg-[#519af4] max-md:px-4 space-y-3 py-20 text-white text-center"
    >
      <h1 className="text-4xl font-bold">Get started with Deel today</h1>
      <p>
        Join the other 15,000+ companies managing their global teams with Deel
      </p>
      <div className="flex justify-center ">
        <button className="text-white border text-sm border-white  w-60 rounded-full h-10">
          Request a demo
        </button>
        <button className="text-white flex items-center justify-center gap-2 text-sm   w-60 rounded-full h-10">
          Create an account <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
