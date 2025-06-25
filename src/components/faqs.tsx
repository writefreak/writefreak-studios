"use client";
import React from "react";
import { FaqsAccordion } from "./faqAccordion";
import { Element } from "react-scroll";

const Faqs = () => {
  return (
    <Element name="FAQs">
      <div className="p-4 pt-10 md:px-14">
        <div className="space-y-6">
          <h2 className="md:text-4xl text-center text-2xl">
            Frequently Asked Questions
          </h2>
          <div data-aos="fade-up">
            <FaqsAccordion />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Faqs;
