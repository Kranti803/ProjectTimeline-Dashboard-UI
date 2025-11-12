import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
  } from "../ui/breadcrumb";
  import Image from "next/image";
  import Calender from "@/app/assets/first.png";
  import Surfing from "@/app/assets/ocean.png";
  import Folder from "@/app/assets/folder.png";

const ProjectBreadcrumb = () => {
  return (
    <div className=" px-2">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#" className="flex gap-x-2">
            <Image
              src={Folder.src}
              height={18}
              width={18}
              alt="folder_png"
            />
            <span>New microdose website</span>
            <Image
              src={Surfing.src}
              height={18}
              width={18}
              alt="surfing_png"
            />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex gap-x-2">
            <Image
              src={Calender.src}
              height={18}
              width={18}
              alt="calender_png"
            />
            <span>Timeline</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
  )
}

export default ProjectBreadcrumb;