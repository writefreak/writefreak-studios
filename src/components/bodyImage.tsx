import React from "react";
import { Button } from "./ui/button";

const BodyImage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
      <div className="md:h-[300px] h-[250px] hidden md:flex">
        <img
          src="/aaron-burden-y02jEX_B0O0-unsplash (1).jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <div className="flex flex-col gap-12 md:gap-16">
          <p className="text-[15px] text-gray-700">
            At Writefreak Studios, we amplify the voices of startups through
            emotionally resonant storytelling—capturing your dreams, values, and
            challenges in a way that reflects your identity, sets you apart, and
            builds authentic, lasting connections with your audience.
          </p>
          <div className="md:h-[300px] h-[250px] md:hidden ">
            <img
              src="/aaron-burden-y02jEX_B0O0-unsplash (1).jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Button className="shadow-none rounded-full text-sm bg-[#377389] text-white">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyImage;
