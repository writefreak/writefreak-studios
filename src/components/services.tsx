"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="Services">
      <div className="">
        <div className="p-4 md:px-14 text-center flex flex-col justify-center w-full items-center pt-10 md:pt-17 space-y-5">
          <h2 className="text-2xl md:text-4xl">Our Services</h2>
          <p className="md:text-base text-sm md:w-[29rem] text-gray-700 dark:text-gray-300">
            At Writefreak Studios, we help small and startup businesses stand
            out through storytelling and smart digital strategy.
          </p>
        </div>
        <div className="p-4 gap-6 md:px-14 grid grid-cols-1 md:grid-cols-2">
          {cards.map((c) => (
            <Card
              key={c.id}
              className="rounded-sm hover:bg-gray-50 dark:hover:bg-[#171717] dark:transition-none transition-colors duration-300 flex flex-col justify-between"
              data-aos="fade-up"
            >
              <CardContent className="">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-[#377389] dark:text-white">
                    {c.title}
                  </h2>
                  <p className="text-gray-700 md:text-sm text-sm dark:text-gray-300">
                    {c.desc}
                  </p>
                  <div className="pt-6">
                    <Button className="relative group overflow-hidden shadow-none rounded-full text-sm bg-white text-[#377389] border border-[#377389] hover:bg-white hover:text-white dark:bg-transparent">
                      <div className="absolute bg-[#377389] top-0 left-0 w-0 h-full transition-all duration-1000 ease-out group-hover:w-full hover:text-white z-0"></div>
                      <div className="relative z-10 flex gap-2 items-center">
                        Learn More
                        <ChevronRight className="group" />
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;

const cards = [
  {
    id: 1,
    title: " Brand Storytelling",
    desc: "We uncover and craft the true story behind your brand—one rooted in your values, challenges, and transformation.",
  },
  {
    id: 2,
    title: "Website Design",
    desc: "Your website is often the first impression of your brand. We design clean, impactful, and story-driven websites that reflect your identity, engage your audience, and support your business goals.",
  },
  {
    id: 3,
    title: "SEO Optimization",
    desc: "We ensure your brand gets discovered. Through thoughtful SEO strategies, we optimize your website content and structure so your story reaches the people actively looking for what you offer.",
  },
  {
    id: 4,
    title: "Portfolio Design",
    desc: "We design beautifully structured, easy-to-navigate digital portfolios that showcase your work, tell your story, and attract the right clients.",
  },
];
