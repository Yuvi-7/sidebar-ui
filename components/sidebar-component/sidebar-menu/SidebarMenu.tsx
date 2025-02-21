import React from "react";
import SwitchTab from "./SwitchTab";
import SearchBar from "./SearchBar";
import { Menu } from "./Menu";
import { navigation } from "@/lib/sidebar-menu";

interface SidebarMenuProps {
  isExpanded: boolean;
  openSubmenu: number | null;
  handleSubMenuItem: (index: number) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isExpanded,
  openSubmenu,
  handleSubMenuItem,
}) => {
  return (
    <div
      className={`h-full transition-all duration-300 ${
        isExpanded ? "w-60" : "w-0 overflow-hidden"
      }`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black dark:border-l-2">
        {isExpanded && (
          <>
            <h2 className="text-xl font-semibold">Overview</h2>
            <SearchBar />
            <SwitchTab />
          </>
        )}

        <ul className="space-y-2 font-medium">
          {navigation.map((item, index) => (
            <Menu
              key={index}
              item={item}
              handleSubMenuItem={handleSubMenuItem}
              openSubmenu={openSubmenu}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
