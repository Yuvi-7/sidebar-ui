import { sideMenuTopIcons } from "@/lib/sidebar-menu";
import Image from "next/image";
import React from "react";

interface SidebarTopProps {
  toggleExpand: () => void;
}

const SidebarTop: React.FC<SidebarTopProps> = ({ toggleExpand }) => {
  return (
    <div className="basis-5/12">
      <Image
        src="/images/logo.png"
        className="mb-3"
        alt="Logo"
        width={50}
        height={50}
        priority
      />

      <ul className="h-full flex flex-col items-center justify-between">
        {sideMenuTopIcons.map((menu, i) => (
          <li
            onClick={toggleExpand}
            key={`${menu.name}-${i}`}
            className="cursor-pointer hover:bg-gray-300 dark:hover:text-black rounded-md p-2 transition-transform duration-200 hover:scale-105"
          >
            <menu.icon />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarTop;
