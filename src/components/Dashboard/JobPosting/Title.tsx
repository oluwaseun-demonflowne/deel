import React from "react";
import { CiSearch } from "react-icons/ci";

const Title = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex w-[300px] pl-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue items-center">
          <CiSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search Candidate"
            className="outline-none w-full h-10 px-4 "
          />
        </div>
        <div className="flex w-[200px] pl-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue items-center">
          <CiSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search Job Posting"
            className="outline-none w-full h-10 px-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
