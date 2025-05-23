import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const Video = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <video
        className="md:w-full brightness-50 h-[600px] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/6143904-uhd_4096_2160_25fps (1) (3) (1) (1).mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
