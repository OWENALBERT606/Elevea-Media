// config/sidebar.ts
import {
  BaggageClaim,
  BarChart2,
  BarChart4,
  Book,
  BookA,
  Cable,
  CheckCheck,
  CircleDollarSign,
  FolderTree,
  Home,
  House,
  Image,
  LucideIcon,
  Presentation,
  Settings,
  Users,
  Users2,
  Users2Icon,
} from "lucide-react";

export interface ISidebarLink {
  title: string;
  href?: string;
  icon: LucideIcon;
  dropdown: boolean;
  permission: string; // Required permission to view this item
  dropdownMenu?: MenuItem[];
}

type MenuItem = {
  title: string;
  href: string;
  permission: string; // Required permission to view this menu item
};

export const sidebarLinks: ISidebarLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    dropdown: false,
    permission: "dashboard.read",
  },
  {
    title: "Users",
    icon: Users,
    href: "/dashboard/users",
    dropdown: true,
    permission: "users.read",
    dropdownMenu: [
      {
        title: "Users",
        href: "/dashboard/users",
        permission: "users.read",
      },
      {
        title: "Roles",
        href: "/dashboard/users/roles",
        permission: "roles.read",
      },
      {
        title: "Change Password",
        href: "/dashboard/change-password",
        permission: "roles.read",
      },
      {
        title: "Profile",
        href: "/dashboard/profile",
        permission: "roles.read",
      },
    ],
  },
  
  {
    title: "Blogs",
    icon: Book,
    dropdown: false,
    href: "/dashboard/blogs",
    permission: "blogs.read",
  },
  {
    title: "Team",
    icon: Users2Icon,
    dropdown: false,
    href: "/dashboard/team",
    permission: "team.read",
  },
  {
    title: "Clients",
    icon: Users2Icon,
    dropdown: false,
    href: "/dashboard/clients",
    permission: "clients.read",
  },
  {
    title: "Testimonials",
    icon: BookA,
    dropdown: false,
    href: "/dashboard/testimonials",
    permission: "testimonials.read",
  },
  {
    title: "Projects",
    icon: BookA,
    dropdown: false,
    href: "/dashboard/projects",
    permission: "projects.read",
  },

  {
    title: "Members",
    href: "/dashboard/members",
    icon: Users2,
    dropdown: false,
    permission: "members.read",
  },
  {
    title: "Banners",
    href: "/dashboard/banners",
    icon: Image,
    dropdown: false,
    permission: "banners.read",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    dropdown: false,
    permission: "settings.read",
  },
 
];
