import type { LucideIcon } from "lucide-react"

export type SidebarChildItem = {
  title: string
  url: string
  icon?: LucideIcon
}

export type SidebarNavItem = {
  title: string
  url: string
  icon: LucideIcon
  badge?: string
  children?: SidebarChildItem[]
}

export type SidebarSection = {
  label: string
  items: SidebarNavItem[]
}

export type NavSecondaryItem = {
  title: string
  url: string
  icon: LucideIcon
}


export type Task = {
  id: number;
  title: string;
  subtitle: string;
  color: "blue" | "orange" | "green" | "red"; // literal types
  left: number;
  top: number;
  avatars: string[];
  featured?:boolean
};
