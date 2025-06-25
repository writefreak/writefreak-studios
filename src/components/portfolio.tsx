import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import MobilePortfolio from "./mobilePortfolio";

// Data structure for recent works
// const recentWorks = [
//   {
//     title: "Brand Story for HMX Luxury",
//     description:
//       "Rebranding their identity and creating a compelling brand story.",
//     imageUrl: "/HMX Luxury (1).png", // Replace with real image URLs
//     link: "#",
//   },
//   {
//     title: "Launch Campaign for BoldWear",
//     description:
//       "Developing the narrative and marketing copy for FluxTech’s launch.",
//     imageUrl: "/boldwear (1).png",
//     link: "#",
//   },
//   {
//     title: "Website Story for PaperWorks",
//     description:
//       "Crafting engaging web copy and brand messaging for PaperWorks.",
//     imageUrl: "/Paperworks.png",
//     link: "#",
//   },
// ];

const Portfolio: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl text-center mb-12">
          Our Portfolio Highlights
        </h2>
        <div className="md:hidden">
          <MobilePortfolio />
        </div>
        <div className="md:grid grid-cols-3 hidden gap-12">
          {recentWorks.map((work, index) => (
            <Card
              data-aos="flip-left"
              key={index}
              className=" dark:bg-[#171717] relative p-4 rounded-lg flex flex-col shadow-lg overflow-hidden group"
            >
              <div className="md:h-64 h-72">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full rounded-lg h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="md:px-7 absolute inset-0 bg-white dark:bg-[#171717] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center  h-full">
                <h3 className="text-xl font-semibold  text-[#377389] ">
                  {work.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 md:text-sm text-sm">
                  {work.description}
                </p>
                <div className="pt-6">
                  <Button className="hover:bg-white rounded-full text-sm bg-white text-[#377389] border border-[#377389] dark:bg-transparent">
                    <div className=" flex gap-2 items-center">
                      View Project
                      <ChevronRight className="group" />
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const recentWorks = [
  {
    title: "HMX Luxury Brand Story",
    imageUrl: "/creative.jpeg",
    link: "#",
    description:
      "Crafted a compelling narrative for HMX Luxury, blending sophistication and exclusivity to elevate their luxury brand presence.",
  },
  {
    title: "Fuse Brand Story",
    imageUrl: "/fuse.jpeg",
    link: "#",
    description:
      "Developed a dynamic brand story for Fuse, emphasizing innovation, energy, and a bold market identity.",
  },
  {
    title: "Spicyheat Brand Story",
    imageUrl: "/spicy.jpeg",
    link: "#",
    description:
      "Created a fiery and vibrant brand story for Spicyheat, capturing the essence of bold flavors and unforgettable experiences.",
  },
];
