"use client"

import {
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { SidebarNavItem } from "@/types/sidebar"
import SidebarSubmenu from "./SidebarSubMenu"

interface SidebarItemListProps {
  items: SidebarNavItem[]
  parentLabel: string
}

const SidebarItemList = ({ items, parentLabel }: SidebarItemListProps) => {
  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={`${parentLabel}-${item.title}`}>
          {item.children ? (
            <SidebarMenuButton type="button" className="bg-gray-200">
              <item.icon className="size-4" />
              <span>{item.title}</span>
              <ChevronUp className="ml-auto size-4" color="gray" />
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton asChild className="hover:bg-gray-200">
              <a href={item.url}>
                <item.icon className="size-4" />
                <span className="font-medium">{item.title}</span>
              </a>
            </SidebarMenuButton>
          )}

          {/* Optional badge */}
          {item.badge && (
            <SidebarMenuBadge 
            
              className={cn(
                "text-white",
                item.title === "Active" ? "bg-gray-300" : "bg-red-500"
              )}
            >
              {item.badge}
            </SidebarMenuBadge>
          )}

          {/* Submenu */}
          {item.children && (
            <SidebarMenuSub>
              <SidebarSubmenu
                parentTitle={item.title}
                childrenItems={item.children}
              />
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      ))}
    </>
  )
}

export default SidebarItemList;
