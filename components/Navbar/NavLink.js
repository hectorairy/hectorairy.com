import Link from "next/link";
import React from "react";

export const NavLink = ({ to, text, active }) => {
  return (
    <li className="h-20 cursor-pointer md:w-full">
      <Link href={to}>
        <div
          className={`flex items-center no-underline py-2 px-4 h-full ${
            active === to
              ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-500 border-b-2 border-b-sky-500"
              : "text-black"
          } hover:text-sky-400 hover:transition-all hover:duration-300 md:text-center md:p-8 md:w-full md:table `}
        >
          {text}
        </div>
      </Link>
    </li>
  );
};
