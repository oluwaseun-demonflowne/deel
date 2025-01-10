"use client"
import Image from "next/image";
import React from "react";

const brands = [
  "calvin.png",
  "forever.png",
  "intercom.png",
  "notion.png",
  "reddit.png",
  "reebok.png",
  "revolute.png",
  "subway.png",
];

const Brand = () => {
  return (
    <div className="flex px-20 space-x-14">
      {brands.map((i) => (
        <Image
        className="w-20 flex-shrink-0 h-7"
          key={i}
          src={`/brand/${i}`}
          alt="brand names"
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

export default Brand;
