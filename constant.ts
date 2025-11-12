import {
  Bell,
  Bookmark,
  CalendarDays,
  Code2,
  FileBarChart,
  Inbox,
  FileChartColumnIncreasing,
  Zap,
  GalleryVerticalEnd,
  Folder,
  MousePointerClick,
  Flag,
  Settings,
  CircleCheck,
  LifeBuoy,
} from "lucide-react";
import { SidebarSection, NavSecondaryItem, Task } from "./types/sidebar";

export const sidebarSections: SidebarSection[] = [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "#", icon: FileChartColumnIncreasing },
        {
          title: "Calendar",
          url: "#",
          icon: CalendarDays,
          children: [
            { title: "Timeline", url: "#", icon: Folder },
            { title: "Gantt", url: "#", icon: Zap },
            { title: "Reports", url: "#", icon: MousePointerClick },
          ],
        },
        { title: "Tasks", url: "#", icon: GalleryVerticalEnd },
      ],
    },
    {
      label: "Tools",
      items: [
        { title: "Notification", url: "#", icon: Bell, badge: "7" },
        { title: "Inbox", url: "#", icon: Inbox },
        { title: "Integration", url: "#", icon: Code2 },
        { title: "Reporting", url: "#", icon: FileBarChart },
      ],
    },
    {
      label: "Metrics",
      items: [
        { title: "Active", url: "#", icon: Flag, badge:"!" },
        { title: "Past", url: "#", icon: Bookmark },
      ],
    },
    
  ]

export const navSecondary: NavSecondaryItem[] = [
  {
    title: "Help Center",
    url: "#",
    icon: LifeBuoy,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
 
  {
    title: "Invite Team",
    url: "#",
    icon: CircleCheck,
  },
];


export const tasks:Task[] = [
  {
    id: 1,
    title: "Spline animated logo",
    subtitle: "🖌️ Logo",
    color: "blue" as const,
    left: 120,
    top: 20,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    ],
  },
  {
    id: 2,
    title: "New microdose website",
    subtitle: "🏠 New Homepage",
    color: "blue" as const,
    left: 380,
    top: 90,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Case studies",
    subtitle: "🎯 Fin Tech",
    color: "orange" as const,
    left: 760,
    top: 20,
    avatars: ["https://api.dicebear.com/7.x/avataaars/svg?seed=6"],
  },
  {
    id: 4,
    title: "Input Styleguide",
    subtitle: "✏️ Contact",
    color: "green" as const,
    left: 120,
    top: 200,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
    ],
  },
  {
    id: 5,
    title: "Sales deck - iteration ver. 1",
    subtitle: "📊 Marketing",
    color: "blue" as const,
    left: 400,
    top: 290,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=10",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=11",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=12",
    ],
  },
  {
    id: 6,
    title: "Demo reel",
    subtitle: "🎬 Animation 2nd",
    color: "red" as const,
    left: 460,
    top: 380,
    avatars: ["https://api.dicebear.com/7.x/avataaars/svg?seed=13"],
  },
];
