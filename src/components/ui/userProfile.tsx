import React from "react";
import { Button } from "./button";

const UserProfile = () => {
  return (
    <div className="p-4 flex items-center gap-3">
      <div>
        <img
          src="/aaron-burden-y02jEX_B0O0-unsplash (1).jpg"
          alt=""
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>
      <div className=" ">
        <h3 className="text-xl md:text-2xl font-bold">Hello 👋</h3>
        <span className="text-sm md:text-xs text-gray-700 dark:text-white">
          Endwell Heritage
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
