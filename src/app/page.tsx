import Body from "@/components/body";
import Header from "@/components/header";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div>
          <Header />
        </div>
        <div className="p-4  md:px-14 md:pt-8">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default page;
