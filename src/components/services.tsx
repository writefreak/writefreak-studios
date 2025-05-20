import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Services = () => {
  return (
    <div className="">
      <div className="p-4 md:px-14 text-center flex flex-col justify-center w-full items-center pt-14 md:pt-17 space-y-5">
        <h2 className="text-4xl">Our Services</h2>
        <p className="md:text-base text-sm md:w-[29rem] text-gray-700">
          At Writefreak Studios, we help small and startup businesses stand out
          through storytelling and smart digital strategy.
        </p>
      </div>
      <div className="p-4 gap-6 md:px-14 grid grid-cols-1 md:grid-cols-2">
        {cards.map((c) => (
          <Card key={c.id} className="rounded-sm bg">
            <CardContent>
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-[#377389]">
                  {c.title}
                </h2>
                <p className="text-gray-700 md:text-sm text-xs">{c.desc}</p>
                <div className="pt-6">
                  <Button className="bg-white border border-[#377389] rounded-full text-[#377389]">
                    Learn more
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
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
