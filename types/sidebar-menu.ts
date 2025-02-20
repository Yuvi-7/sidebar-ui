import { LucideIcon } from "lucide-react";

export type SubMenuItem = {
  title: string;
  href: string;
};

export type NavigationItem = {
  title: string;
  icon: LucideIcon;
  href: string;
  submenu?: SubMenuItem[];
};

export interface MenuItem {
  name: string;
  icon: LucideIcon;
}
