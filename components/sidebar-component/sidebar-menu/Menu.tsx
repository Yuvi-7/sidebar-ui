import { Minus, Plus, LucideIcon } from "lucide-react";
import React from "react";
import SubMenu from "./SubMenu";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  icon: LucideIcon;
  href: string;
  submenu?: SubMenuItem[];
}

interface MenuProps {
  item: MenuItem;
  handleSubMenuItem: (index: number) => void;
  openSubmenu: number | null;
  index: number;
}

export const Menu: React.FC<MenuProps> = ({
  item,
  handleSubMenuItem,
  openSubmenu,
  index,
}) => {
  return (
    <li>
      {item.submenu ? (
        <button
          type="button"
          className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => handleSubMenuItem(index)}
        >
          <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
            {item.title}
          </span>

          {openSubmenu === index ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </button>
      ) : (
        <button className="w-full flex items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex flex-1 ms-3 whitespace-nowrap">{item.title}</span>
        </button>
      )}

      {item.submenu && openSubmenu === index && (
        <ul className="py-2 space-y-2 pl-8 mt-5">
          {item.submenu.map((sub, subIndex) => (
            <SubMenu key={subIndex} sub={sub} />
          ))}
        </ul>
      )}
    </li>
  );
};
