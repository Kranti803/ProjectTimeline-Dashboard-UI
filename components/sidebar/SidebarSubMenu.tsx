"use client"

import {
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { SidebarChildItem } from "@/types/sidebar"

interface SidebarSubmenuProps {
  parentTitle: string
  childrenItems: SidebarChildItem[]
}

const SidebarSubmenu = ({ parentTitle, childrenItems }: SidebarSubmenuProps) => {
  return (
    <>
      {childrenItems.map((child) => (
        <SidebarMenuSubItem key={`${parentTitle}-${child.title}`}>
          <SidebarMenuSubButton asChild className="hover:bg-gray-200">
            <a href={child.url}>
              {child.icon && <child.icon className="size-4" />}
              <span>{child.title}</span>
            </a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      ))}
    </>
  )
}

export default SidebarSubmenu;
