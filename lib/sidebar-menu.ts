import { MenuItem, NavigationItem } from "@/types/sidebar-menu";
import {
  FolderKanban,
  Home,
  LayoutDashboard,
  ListTodo,
  MessageCircle,
  Settings,
  House,
  Images,
  Bot,
  Blocks,
} from "lucide-react";

// Navigation menu items
export const navigation: NavigationItem[] = [
  { title: "Home", icon: Home, href: "#" },
  { title: "Dashboard", icon: LayoutDashboard, href: "#" },
  { title: "Projects", icon: FolderKanban, href: "#" },
  {
    title: "Tasks",
    icon: ListTodo,
    href: "#",
    submenu: [
      { title: "My tasks", href: "#" },
      { title: "Task 1", href: "#" },
      { title: "Task 2", href: "#" },
      { title: "Task 3", href: "#" },
      { title: "Task 4", href: "#" },
      { title: "Task 5", href: "#" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
    submenu: [
      { title: "Account settings", href: "#" },
      { title: "Privacy", href: "#" },
      { title: "Security", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Notifications", href: "#" },
      { title: "Billing", href: "#" },
    ],
  },
  { title: "Messages", icon: MessageCircle, href: "#" },
];

// Sidebar menu icons

export const sideMenuTopIcons: MenuItem[] = [
  { name: "Home", icon: House },
  { name: "Home", icon: Images },
  { name: "Home", icon: FolderKanban },
  { name: "Home", icon: ListTodo },
  { name: "Home", icon: LayoutDashboard },
  { name: "Home", icon: Settings },
  { name: "Home", icon: MessageCircle },
];

export const sideMenuBottomIcons: MenuItem[] = [
  { name: "Home", icon: Blocks },
  { name: "Home", icon: Bot },
];
