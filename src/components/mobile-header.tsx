import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  CircleHelp,
  House,
  LibraryBig,
  Menu,
  Star,
} from "lucide-react";
import Link from "next/link";

interface props {
  className?: string;
}

export function MobileHeader({ className }: props) {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn("", className)}>
        <Button className="bg-transparent">
          <Menu height={20} width={20} className="md:hidden  text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-white/10 backdrop-blur-md text-white"
      >
        <SheetTitle></SheetTitle>

        <div className="p-4 flex items-center flex-col gap-6">
          {links.map((l) => (
            <div key={l.id} className="flex items-center gap-2 pb-4 border-b">
              {/* <div>{l.icon}</div> */}
              <Link
                key={l.id}
                href={"#"}
                className="text-base font-semibold text-white"
              >
                {l.desc}
              </Link>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
const links = [
  {
    id: 1,
    desc: "Home",
    // icon: <House className="h-5 text-[#377389] w-5 " />,
  },
  {
    id: 2,
    desc: "About us",
    // icon: <LibraryBig className="h-5 text-[#377389] w-5" />,
  },
  {
    id: 3,
    desc: "Services",
    // icon: <BriefcaseBusiness className="h-5 text-[#377389] w-5" />,
  },
  {
    id: 4,
    desc: "Reviews",
    // icon: <Star className="h-5 text-[#377389] w-5 " />,
  },
  {
    id: 5,
    desc: "FAQs",
    // icon: <CircleHelp className="h-5 text-[#377389] w-5" />,
  },
];
