import Link from "next/link";
import { title } from "process";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="font-raleway bg-white shadow-md p-4 md:px-14 fixed top-0 left-0 right-0 z-50 mx-auto">
      <div className="flex items-center w-full justify-between">
        <h3 className="text-[18px] font-semibold text-[#377389]">
          Writefreak Studios.
        </h3>
        <div className="hidden md:flex gap-7">
          {links.map((l) => (
            <Link key={l.id} href={"#"} className="text-base font-semibold ">
              {l.desc}
            </Link>
          ))}
        </div>
        <div className="flex md:block items-center gap-3">
          <Button className="shadow-none rounded-full text-sm border border-[#377389] bg-white text-[#377389]">
            Let's Talk
          </Button>
          <Menu className="md:hidden text-[#377389]" />
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
    desc: "Contact us",
  },
];
