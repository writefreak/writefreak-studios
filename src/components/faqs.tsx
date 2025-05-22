import React from "react";
import { FaqsAccordion } from "./faqAccordion";

const Faqs = () => {
  return (
    <div className="p-4 md:px-14">
      <div className="space-y-6">
        <h2 className="md:text-4xl text-center text-2xl">
          Frequently Asked Questions
        </h2>
        <div>
          <FaqsAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
