import { openedJobs } from "@/util/job";
import Link from "next/link";
import React from "react";

const Opened = () => {
  return (
    <div className="space-y-4">
      {openedJobs.map((i) => (
        <div className="bg-white border w-[280px]  rounded-md" key={i.jobTitle}>
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
              <span className="font-semibold">{i.numberOfApplicants}</span> people applied
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Opened;
