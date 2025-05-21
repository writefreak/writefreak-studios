import React from "react";
import BodyImage from "./bodyImage";

const Body = () => {
  return (
    <div className="pt-10 md:pt-16">
      <div className="flex flex-col gap-10">
        <h1 className="md:text-5xl text-3xl text-left pt-5 md:pt-0 leading-snug">
          Crafting Exceptional Brand Stories <br className="hidden md:flex" />{" "}
          With Lasting Impact
        </h1>
        <BodyImage />
      </div>
    </div>
  );
};

export default Body;
