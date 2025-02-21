import Link from "next/link";
import React from "react";

type SubMenuItem = {
  title: string;
  href: string;
};

const SubMenu = ({ sub }: { sub: SubMenuItem }) => {
  return (
    <li className="relative flex items-center">
      {/* SVG for vertical & curved structure */}
      <svg
        className="absolute -left-[31px] mb-8"
        width="50"
        height="60"
        viewBox="0 0 50 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0 V40 Q15 55, 30 55 H35"
          stroke="gray"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <Link
        href={sub.href}
        className="w-full block ml-2 px-2 py-1 rounded-md text-gray-900 dark:text-white leading-none hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {sub.title}
      </Link>
    </li>
  );
};

export default SubMenu;
