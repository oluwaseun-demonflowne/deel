import Closed from "@/components/Dashboard/JobPosting/Closed";
import Opened from "@/components/Dashboard/JobPosting/Opened";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F9FAFC]">
      {/* <Title /> */}
      <div className="flex py-10 px-6 gap-3">
        <Opened />
        <Closed />
      </div>
    </div>
  );
};

export default page;
