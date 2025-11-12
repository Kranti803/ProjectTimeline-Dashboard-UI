import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { ChevronsLeft } from "lucide-react";
import SearchForm from "../common/SearchForm";
import { cn } from "@/lib/utils";

const SideBarHeader = () => {
  const { open } = useSidebar();
  return (
    <SidebarMenu className="my-2.5">
      <SidebarMenuItem>
        <SidebarMenuButton className="flex justify-between">
          <div className="flex items-center justify-between py-3">
            <Image src={logo} alt="logo" width={20} height={20} />
            <div className="flex flex-col ml-2">
              <h2 className="text-sm font-bold">
                Relatel
                <span className="px-1 bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent italic">
                  wise
                </span>
              </h2>
              <p className="text-xs text-muted-foreground">microdose.studio</p>
            </div>
          </div>
          <span className="bg-white rounded-sm flex justify-center items-center shadow-md">
            <ChevronsLeft size={25} className="p-1" color="gray" />
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem
        className={cn(
          "bg-transparent px-2 mt-3 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <SearchForm />
      </SidebarMenuItem>
      
    </SidebarMenu>
  );
};

export default SideBarHeader;
