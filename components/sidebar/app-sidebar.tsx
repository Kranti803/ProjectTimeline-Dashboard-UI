"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
} from "@/components/ui/sidebar"

import Header from "./Header"
import { sidebarSections } from "@/constant"
import SidebarSectionGroup from "./SidebarSectionGroup"
import NavSecondary from "./NavSecondary"
import Footer from "./Footer"

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      

      <SidebarContent>
        {sidebarSections.map((section) => (
          <SidebarSectionGroup key={section.label} section={section} />
        ))}

        <NavSecondary />
      </SidebarContent>

      <SidebarFooter className=" pt-2">
        <Footer
          user={{ name: "Kamli Bachanek", email: "kamil@microdose.studio" }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
