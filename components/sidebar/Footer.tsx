"use client";

import { ChevronsUpDown, Folder, Link } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Profile from "@/app/assets/profile.avif";
import { Button } from "../ui/button";

const Footer = ({
  user,
}: {
  user: {
    name: string;
    email: string;
  };
}) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="lg:hidden block">
        <SidebarMenuButton>
          <Link />
          <span>Share</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem className="lg:hidden block">
        <SidebarMenuButton>
          <Folder />
          <span>Manage</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="bg-transparent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex justify-between items-center"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={Profile.src}
              alt={user.name}
              className="rounded-full"
            />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="font-medium">{user.name}</span>
            <span className="text-xs">{user.email}</span>
          </div>
          <span className="bg-white p-1 rounded-sm flex justify-center items-center shadow-md">
            <ChevronsUpDown size={18} className="bg-transparent" color="gray" />
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default Footer;
