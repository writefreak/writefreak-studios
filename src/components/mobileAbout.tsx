"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-movingCards";

interface Props {
  className?: string;
}

export function MobileAbout({ className }: Props) {
  return (
    <div
      className={cn(
        "h-full rounded-md  flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative no-scrollbar overflow-hidden",
        className
      )}
    >
      <InfiniteMovingCards items={about} />
    </div>
  );
}

const about = [
  {
    id: 1,
    title: "Human",
    desc: "Our brand stories centered on human experiences make your brand relatable and memorable.",
    img: `/svgs/human-social-security-svgrepo-com.svg`,
  },
  {
    id: 6,
    title: "Human",
    desc: "Our brand stories centered on human experiences make your brand relatable and memorable.",
    img: `/svgs/human-social-security-svgrepo-com.svg`,
  },
  {
    id: 2,
    title: "Emotion",
    desc: "Emotion creates a strong bond that motivates people to care and act. Every story we tell, taps into feelings like hope, struggle, or excitement.",
    img: `/svgs/emotion-happy-fill-svgrepo-com.svg`,
  },

  {
    id: 3,
    title: "Authenticity",
    desc: "We craft stories in a manner that builds trust, reflecting your true values and identity, not just polished marketing.",
    img: `/svgs/verified-svgrepo-com.svg`,
  },
  {
    id: 4,
    title: "Relevance",
    desc: "It's part of our sole priority to make sure your story speaks directly to your audience’s needs, challenges, or desires.",
    img: `/svgs/puzzle-svgrepo-com.svg`,
  },
  {
    id: 5,
    title: "Transformation",
    desc: "Every story we tell shows transformation, by highlighting the progress, real results and impact you're making as a startup brand or business",
    img: `/svgs/growth-report-graph-svgrepo-com.svg`,
  },
  {
    id: 7,
    title: "Transformation",
    desc: "Every story we tell shows transformation, by highlighting the progress, real results and impact you're making as a startup brand or business",
    img: `/svgs/growth-report-graph-svgrepo-com.svg`,
  },
];
