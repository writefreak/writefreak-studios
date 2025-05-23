import React from "react";
import { Card, CardContent } from "./ui/card";
import { MobileAbout } from "./mobileAbout";

const About = () => {
  return (
    <div>
      <div className="md:bg-[#377389] md:px-14 p-4 md:border-b-0 md:border-t-0 border-b border-t">
        <div className="space-y-10">
          <div className="space-y-5 w-full flex flex-col justify-center items-center pt-30 md:pt-10">
            <h3 className="text-2xl md:text-4xl md:text-white md:pt-8">
              Why Choose Us?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 md:text-white text-sm  text-center md:w-[39rem]">
              At writefreak Studios, we specialize in storytelling that truly
              connects, with each emotion-driven narrative tailored to amplify
              the unique voices of startup brands and small businesses.
              Leveraging our pristine HEART framework, we transform your brand’s
              story into a powerful tool that builds trust, inspires action, and
              drives growth.
            </p>
          </div>
          <div>
            <div className="md:grid hidden md:grid-cols-5 gap-5 md:gap-6 pb-10">
              {aboutText.map((a) => (
                <Card key={a.id} className="rounded-sm " data-aos="zoom-in">
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="pb-2">
                        <div className="h-8 w-8">
                          <img src={a.icon} alt="" className="h-full w-full" />
                        </div>
                      </div>
                      <h3 className="text-xl text-[#377389] dark:text-white font-semibold">
                        {a.title}
                      </h3>
                      <p className="text-gray-700  dark:text-gray-400 md:text-xs text-xs">
                        {a.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <MobileAbout className="md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const aboutText = [
  {
    id: 1,
    title: "Human",
    desc: "Our brand stories centered on human experiences make your brand relatable and memorable.",
    icon: `/svgs/human-social-security-svgrepo-com.svg`,
  },
  {
    id: 2,
    title: "Emotion",
    desc: "Emotion creates a strong bond that motivates people to care and act. Every story we tell, taps into feelings like hope, struggle, or excitement.",
    icon: `/svgs/emotion-happy-fill-svgrepo-com.svg`,
  },

  {
    id: 3,
    title: "Authenticity",
    desc: "We craft stories in a manner that builds trust, reflecting your true values and identity, not just polished marketing.",
    icon: `/svgs/verified-svgrepo-com.svg`,
  },
  {
    id: 4,
    title: "Relevance",
    desc: "It's part of our sole priority to make sure your story speaks directly to your audience’s needs, challenges, or desires.",
    icon: `/svgs/puzzle-svgrepo-com.svg`,
  },
  {
    id: 5,
    title: "Transformation",
    desc: "Every story we tell shows transformation, by highlighting the progress, real results and impact you're making as a startup brand or business",
    icon: `/svgs/growth-report-graph-svgrepo-com.svg`,
  },
];
