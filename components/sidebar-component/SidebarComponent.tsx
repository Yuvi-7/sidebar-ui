"use client";
import React, { useState } from "react";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import SidebarMenu from "./sidebar-menu/SidebarMenu";

export const SidebarComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubMenuItem = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <>
      <aside className="w-20 h-full bg-[#eceff2] dark:bg-black py-3 rounded-xl flex flex-col items-center justify-between transition-all duration-300 relative">
        <div className="h-full py-3 rounded-xl flex flex-col items-center justify-between">
          <SidebarTop toggleExpand={toggleExpand} />
          <SidebarBottom toggleExpand={toggleExpand} />
        </div>
      </aside>

      <SidebarMenu
        isExpanded={isExpanded}
        openSubmenu={openSubmenu}
        handleSubMenuItem={handleSubMenuItem}
      />
    </>
  );
};
