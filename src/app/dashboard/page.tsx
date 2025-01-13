import Closed from "@/components/Dashboard/JobPosting/Closed";
import Opened from "@/components/Dashboard/JobPosting/Opened";
import Title from "@/components/Dashboard/JobPosting/Title";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <Title />
      <div>
        <Opened />
        <Closed />
      </div>
    </div>
  );
};

export default page;
