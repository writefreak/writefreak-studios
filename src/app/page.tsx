import About from "@/components/about";
import Body from "@/components/body";
import Footer from "@/components/footer";
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
        <div className="p-4 md:pb-8 flex flex-col gap-10 md:px-14 md:pt-8">
          <Body />
        </div>
        <About />
        <Services />
        {/* <FAQs/> */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
