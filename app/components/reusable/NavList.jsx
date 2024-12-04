"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavList({ items, display="flex", aline="items-center" }) {
  const pathname = usePathname();
  return (
    <>
      <ul className={`${display} ${aline} font-tin `}>
      {items.map((item, index) => (
        <li className="" key={index}>
          <Link href={item.link} className={`${pathname === item.link ? "bg-active" : ""} hover:text-primary p-1 px-5 rounded`}>
            {item.name}
          </Link>
        </li>
      ))}
      </ul>
    </>
  );
}
