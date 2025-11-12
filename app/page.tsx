import AppSidebar from "@/components/sidebar/app-sidebar";
import MainHeader from "@/components/header/MainHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MainSubHeader from "@/components/header/MainSubHeader";
import { Separator } from "@/components/ui/separator";
import ProjectTimeline from "@/components/timeline/ProjectTimeline";

const MainDashboardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MainHeader />
        <Separator
          orientation="horizontal"
          className="data-[orientation=horizontal]:w-9/12 m-auto"
        />
        <MainSubHeader />
        <Separator
          orientation="horizontal"
          className="data-[orientation=horizontal]:w-9/12 m-auto"
        />
        <main className="min-h-screen p-8">
          <ProjectTimeline/>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainDashboardPage;
