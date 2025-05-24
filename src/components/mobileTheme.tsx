"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "./ui/tab";

interface Props {
  className?: string;
}
export function MobileTheme({ className }: Props) {
  const { setTheme } = useTheme();

  return (
    <div>
      <Tabs
        defaultValue="account"
        className={cn("w-[200px] md:hidden", className)}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger onClick={() => setTheme("light")} value="light">
            Light
          </TabsTrigger>
          <TabsTrigger onClick={() => setTheme("dark")} value="dark">
            Dark
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
