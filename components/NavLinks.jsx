import Link from "next/link";
import React from "react";
const links = [
  { href: "/chat", label: "Chat" },
  { href: "/tours", label: "Tours" },
  { href: "/profile", label: "Profile" },
];
export default function NavLinks() {
  return (
    <div className="ml-4">
      <ul className="flex flex-col gap-6">
        {links.map((link, index) => {
          return (
            <li key={link.label}>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
