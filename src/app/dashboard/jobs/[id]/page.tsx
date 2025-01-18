"use client";
import { openedJobs } from "@/util/job";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

const Page = () => {
  const { id } = useParams();
  const [job, setJob] = useState<typeof openedJobs | null>(null);

  useEffect(() => {
    const findId = openedJobs.filter((i) => i.id === id);
    setJob(findId);
  }, [id]);

  if (!job) {
    return <p>loading...</p>;
  }

  return (
    <div className="px-3 md:px-6 flex gap-6 md:gap-0 max-md:flex-col border py-6">
      <div className="flex md:w-[70%] border-r md:pr-6 flex-col gap-4">
        <div className="flex items-center space-x-2">
          <Image
            src={"/wellspring.jfif"}
            alt="company logo"
            unoptimized
            width={100}
            className="w-14 rounded-sm"
            height={100}
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-3xl  font-semibold">{job[0].jobTitle}</h1>
            <div className="flex flex-wrap md:gap-4 items-center text-[15px]">
              <p className="flex items-center">
                <CiLocationOn className="text-xl" /> {job[0].jobLocation}
              </p>
              <p>Added on 12th September</p>
            </div>
          </div>
        </div>
        <h4 className="text-sm tracking-wide">{job[0].jobDescription}</h4>
        <div>
          <p className="font-bold text-[#4098fd]">Skills to have</p>
          <ul className="flex flex-wrap text-sm gap-2">
            {job[0].jobSkills.map((i, index) => (
              <li className="" key={i}>
                {i}
                <span
                  className={` ${
                    job[0].jobSkills.length - 1 === index ? "hidden" : ""
                  }  ml-2`}
                >
                  •
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-[#4098fd]">Your job responsibilities</p>
          <ul className="text-sm space-y-1 pl-4 mt-2">
            {job[0].jobResponsibilities.map((i) => (
              <li className="list-disc" key={i}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:w-[30%] space-y-4 md:px-6">
        <div>
          <h4 className="font-bold">-Job Experience</h4>
          <h4 className="text-sm tracking-wide">{job[0].jobExperience}</h4>
        </div>
        <div>
          <h4 className="font-bold">-Job Education</h4>
          <h4 className="text-sm tracking-wide">{job[0].jobEducation}</h4>
        </div>
        <div>
          <h4 className="font-bold">-Job Compensation</h4>
          <h4 className="text-sm tracking-wide">{job[0].jobCompensation}</h4>
        </div>
        <button className="bg-[#4098fd] flex gap-1 items-center justify-center font-medium text-white w-44 h-12">
          Apply Now
          <MdArrowOutward className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Page;
