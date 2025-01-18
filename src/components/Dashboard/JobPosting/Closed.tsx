import { closedJobs } from "@/util/job";
import Link from "next/link";
import React from "react";

const Closed = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold flex gap-1 items-center">
        Closed
        <span className="text-[#4098fd] flex items-center justify-center w-8 h-8 rounded-full bg-[#edf9ff]">
          {closedJobs.length}
        </span>
      </h1>
      <div className="space-y-4">
        {closedJobs.map((i) => (
          <div
            className="bg-white border w-[280px]  rounded-md"
            key={i.jobTitle}
          >
            <div className="p-3">
              <h1 className="font-semibold text-sm">{i.jobTitle}</h1>
              <p className="font-light text-slate-700 text-[15px]">
                {i.jobDepartment}
              </p>
              <Link className="text-[#4098fd]" href={i.jobLink}>
                {i.jobLink}
              </Link>
            </div>
            <div className="border-t text-[15px]  p-3">
              <p>
                <span className="font-semibold">{i.numberOfApplicants}</span>{" "}
                people applied
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Closed;
