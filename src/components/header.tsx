import Link from "next/link";
import { title } from "process";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { MobileHeader } from "./mobile-header";
import { ThemeProvider } from "./ui/theme-provider";
import { ThemeControl } from "./theme-control";

const Header = () => {
  return (
    <div className="font-raleway backdrop-blur-md dark:md:bg-[#0a0a0a]/60 dark:md:backdrop-blur-md bg-black/50 md:bg-white shadow-md p-4 md:px-14 fixed top-0 left-0 right-0 z-50 mx-auto">
      <div className="flex items-center w-full justify-between">
        <h3 className="text-[18px] font-semibold text-white md:text-[#377389]">
          Writefreak Studios.
        </h3>
        <div className="hidden md:flex gap-7">
          {links.map((l) => (
            <div key={l.id} className="relative group">
              <Link
                key={l.id}
                href={"#"}
                className="text-base font-semibold group-hover:text-[#377389] transition-colors duration-300"
              >
                {l.desc}
              </Link>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-full h-0.5 bg-[#377389] transition-all duration-500"></span>
            </div>
          ))}
        </div>
        <div className="flex md:block items-center gap-3">
          <div className="flex items-center gap-3">
            <Button className="relative group overflow-hidden dark:bg-transparent shadow-none rounded-full text-sm md:border-2  border-[#377389] hover:bg-white hover:text-white bg-white text-[#377389]">
              <div className="absolute left-0 top-0 z-0 w-0 h-full group transition-all ease-out bg-[#377389] duration-1000 group-hover:w-full"></div>
              <div className="relative z-10">Let's Talk</div>
            </Button>
            <ThemeControl />
          </div>
          <MobileHeader className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;

const links = [
  {
    id: 1,
    desc: "Home",
  },
  {
    id: 2,
    desc: "About us",
  },
  {
    id: 3,
    desc: "Services",
  },
  {
    id: 4,
    desc: "Reviews",
  },
  {
    id: 5,
    desc: "FAQs",
  },
];
