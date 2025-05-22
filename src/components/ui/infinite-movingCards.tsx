"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    id: number;
    desc: string;
    img?: string;
    title?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 max-w-7xl overflow-x-auto no-scrollbar", // Increased px-10 for better visibility
        className
      )}
    >
      <ul className="flex w-max gap-4 py-4 flex-nowrap px-20">
        {/* Increased px above so that the first and last cards don't hide */}
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-md border flex-shrink-0 px-8 py-6 md:w-[450px]"
            style={{ background: "white" }}
            key={item.id}
          >
            <blockquote>
              <div className="relative z-50 py-3 flex flex-row items-center">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10">
                      <img src={item.img} alt="" className="h-full w-full" />
                    </div>
                    <span className="leading-[1.6] text-[#377389] font-bold font-raleway text-xl">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs leading-[1.6] text-gray-700 font-montserrat">
                    {item.desc}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
