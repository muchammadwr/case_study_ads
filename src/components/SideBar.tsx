import { link } from "fs";
import Link from "next/link";
import React from "react";

interface LinkItem {
  name: string;
  href: string;
}

const links: LinkItem[] = [
  {
    name: "Get Started",
    href: "",
  },
  {
    name: "Broadcast",
    href: "",
  },
  {
    name: "Campaign",
    href: "",
  },
  {
    name: "Auto Reply",
    href: "",
  },
  {
    name: "Opportunity",
    href: "",
  },
  {
    name: "Pricing",
    href: "",
  },
  {
    name: "FAQ",
    href: "",
  },
  {
    name: "Contact Us",
    href: "",
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col border-l-2">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
