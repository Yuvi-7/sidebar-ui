import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { sideMenuBottomIcons } from "@/lib/sidebar-menu";

interface SidebarBottomProps {
  toggleExpand: () => void;
}

const SidebarBottom: React.FC<SidebarBottomProps> = ({ toggleExpand }) => {
  return (
    <div className="basis-5/12 flex flex-col items-center justify-end">
      <ul className="h-20 mb-7 flex flex-col items-center justify-around">
        {sideMenuBottomIcons.map((menu, i) => (
          <li
            key={`${menu.name}-${i}`}
            className="cursor-pointer hover:bg-gray-300 hover:dark:text-black rounded-md p-2 transition-transform duration-200 hover:scale-105"
            onClick={toggleExpand}
          >
            <menu.icon />
          </li>
        ))}
      </ul>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SidebarBottom;
