"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Filter, SortAsc } from "lucide-react";
import Person1 from "@/app/assets/person1.png";
import Person2 from "@/app/assets/person2.png";
import Person3 from "@/app/assets/person3.png";
import { Separator } from "../ui/separator";

export default function MainSubHeader() {
  const [showDone, setShowDone] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full pb-3 px-4 sm:px-8">
      {/* Timeline & Avatars */}
      <div className="flex justify-between items-center w-full gap-3 pt-4">
        <div>
          <h2 className="text-lg font-semibold">Timeline</h2>
          <p className="text-sm text-muted-foreground hidden md:block">
            Detailed, visual representation of a project’s journey, highlighting
            key milestones,
            <br/> progress updates, and upcoming tasks.
          </p>
        </div>

        <div className="flex -space-x-2">
          <Avatar className="border-2 border-background w-7 h-7">
            <AvatarImage src={Person1.src} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background w-7 h-7">
            <AvatarImage src={Person2.src} />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background w-7 h-7">
            <AvatarImage src={Person3.src} />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Button
            variant="outline"
            size="icon"
            className="w-7 h-7 rounded-full text-xs"
          >
            +
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Tabs defaultValue="week" className="w-auto">
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>

          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6 hidden sm:block"
          />

          <div className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm text-muted-foreground">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronLeft />
            </Button>
            <span>27 Dec – 4 Jan</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Show Done , Sort and Filter */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Show done</span>
            <Switch checked={showDone} onCheckedChange={setShowDone} />
          </div>

          <Separator orientation="vertical" className="data-[orientation=vertical]:h-6 sm:ml-3"/>

          <Button variant="ghost" size="sm" className="gap-1">
            <SortAsc />
            Sort
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Filter />
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
