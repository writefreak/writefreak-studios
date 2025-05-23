"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeControl() {
  const { setTheme } = useTheme();
  return (
    <div>
      <Tabs defaultValue="account" className="w-[200px] md:hidden">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger onClick={() => setTheme("light")} value="light">
            Light
          </TabsTrigger>
          <TabsTrigger onClick={() => setTheme("dark")} value="dark">
            Dark
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-10 w-10 rounded-full bg-[#377389]">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
