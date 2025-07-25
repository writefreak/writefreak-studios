import About from "@/components/about";
import AOSInit from "@/components/aosInit";
import Body from "@/components/body";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Portfolio from "@/components/portfolio";
import Review from "@/components/reviews";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col ">
      <AOSInit />
      <Header />
      <div className="flex flex-col gap-10 md:p-0 md:pt-8">
        <Body />
      </div>
      <About />
      <Services />
      <Faqs />
      <Portfolio />
      {/* <Review /> */}
      <Footer />
    </div>
  );
};

export default page;
