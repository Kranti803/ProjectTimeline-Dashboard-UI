"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { ChevronDown } from "lucide-react"
import { SidebarSection } from "@/types/sidebar"
import SidebarItemList from "./SidebarItemList"

interface SidebarSectionGroupProps {
  section: SidebarSection
}

const SidebarSectionGroup = ({ section }: SidebarSectionGroupProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-md flex items-center justify-between">
        {section.label}
        <ChevronDown className="ml-2 size-4 opacity-70" />
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarItemList items={section.items} parentLabel={section.label} />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarSectionGroup
