import { reason } from "@/util/reason";
import React from "react";

const Reason = () => {
  return (
    <section className="py-20 space-y-16 px-20">
      <div className="text-center  space-y-4 ">
        <h1 className="text-[#15357A] text-3xl font-bold">
          The reasons to choose Deel are clear
        </h1>
        <p className="text-sm px-60">
          Our guaranteed top-tier service and industry-leading worldwide
          coverage provide peace of mind for any global team. With Deel’s
          next-level automation and in-house infrastructure, quality always
          comes first for our customers.
        </p>
        <button className="text-black border text-sm border-[#15357A]  w-60 rounded-full h-10">
          Contact sales to book a demo
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8 text-center">
        {reason.map((i) => (
          <div key={i.content} className="space-y-2 px-20">
            <h4 className="text-4xl text-[#15357A] font-bold">{i.time}</h4>
            <p className="text-[15px]">{i.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reason;
