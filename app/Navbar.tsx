import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];
const Navbar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <ul>
        <AiFillBug />
      </ul>
      <ul className="flex space-x-6 font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-600 hover: hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
