import About from "@/components/about";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="md:pb-8 flex flex-col gap-10 md:p-0 md:pt-8">
        <Body />
      </div>
      <About />
      <Services />
      {/* <FAQs/> */}
      <Footer />
    </div>
  );
};

export default page;
