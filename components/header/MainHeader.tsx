import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import ProjectBreadcrumb from "./ProjectBreadcrumb";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className="flex h-16 items-center px-4">
      <SidebarTrigger className="size-10" />
      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-4 ml-2 "
      />
      <div className="w-full flex justify-between items-center"> 
        <ProjectBreadcrumb />
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
