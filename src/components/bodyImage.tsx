import React from "react";
import { Button } from "./ui/button";
import Video from "./video";
import { ChevronRight } from "lucide-react";

const BodyImage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
      <div className="md:h-[300px] h-[250px]  md:flex">
        {/* <img
          src="/aaron-burden-y02jEX_B0O0-unsplash (1).jpg"
          alt=""
          className="h-full w-full object-cover"
        /> */}
        <Video />
      </div>
      <div>
        <div className="flex flex-col gap-9 md:gap-16">
          <p className="text-[15px] text-gray-700">
            At Writefreak Studios, we amplify the voices of startups through
            emotionally resonant storytelling—capturing your dreams, values, and
            challenges in a way that reflects your identity, sets you apart, and
            builds authentic, lasting connections with your audience.
          </p>

          <div>
            <Button className="relative group overflow-hidden shadow-none rounded-full text-sm bg-white text-[#377389] border border-[#377389] hover:bg-white hover:text-white">
              <div className="absolute bg-[#377389] top-0 left-0 w-0 h-full transition-all duration-1000 ease-out group-hover:w-full hover:text-white z-0"></div>
              <div className="relative z-10 flex gap-2 items-center">
                Start a Project
                <ChevronRight className="group" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyImage;
