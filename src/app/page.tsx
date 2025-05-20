import Body from "@/components/body";
import Header from "@/components/header";
import Services from "@/components/services";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div>
          <Header />
        </div>
        <div className="p-4 flex flex-col gap-10 md:px-14 md:pt-8">
          <Body />
        </div>
        <Services />
      </div>
    </div>
  );
};

export default page;
